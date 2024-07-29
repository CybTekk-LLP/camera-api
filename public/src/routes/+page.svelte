<script lang="ts">
  // @ts-nocheck
  import { onMount } from "svelte";
  import * as storeService from "$lib/services/store.service";
  import * as apiService from "$lib/services/api.service";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  function base64ToBlob(base64, mimeType) {
    let byteCharacters = atob(base64);
    let byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }

  // Function to generate a blob URL from a base64 string
  function base64ToBlobURL(base64, mimeType) {
    let blob = base64ToBlob(base64, mimeType);
    return URL.createObjectURL(blob);
  }

  onMount(async () => {
    let query = decodeURIComponent(
      new URL($page.url).searchParams.get("email")
    );
    storeService.setEmail(query);
   
    const streamWebCamVideo = (isFrontCamera = true) => {
      const video = document.getElementById("stream");
      const constraints = {
        video: {
          facingMode: isFrontCamera ? "user" : "environment", // Toggle between front and rear cameras
          zoom: true,
        },
      };
      window.navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          video.srcObject = stream;
          video.onloadedmetadata = (e) => {
            isFrontCamera && video?.setAttribute("style", "scale: -1 1");
            !isFrontCamera && video?.removeAttribute("style");
            video.play();
          };

          const [track] = stream.getVideoTracks();
          const capabilities = track.getCapabilities();
          const settings = track.getSettings();
          const input = document.querySelector('input[type="range"]');

          // Check whether zoom is supported or not.
          if (!("zoom" in settings)) {
            return Promise.reject("Zoom is not supported by " + track.label);
          }

          // Map zoom to a slider element.
          input.min = capabilities.zoom.min;
          input.max = capabilities.zoom.max;
          input.step = capabilities.zoom.step;
          input.value = settings.zoom;

          document.querySelector(".zoom-multiplier").textContent =
            `${~~capabilities.zoom
              .min}x ${~~(capabilities.zoom.max + 3 * capabilities.zoom.min) / 4}x ${~~(3 * capabilities.zoom.max + capabilities.zoom.min) / 4}x ${~~capabilities.zoom.max}x`;

          // console.log("min:", capabilities.zoom.min);
          // console.log("max:", capabilities.zoom.max);
          // console.log("step:", capabilities.zoom.step);
          // console.log("value:", settings.zoom);

          input.oninput = function (event) {
            track.applyConstraints({
              advanced: [{ zoom: event.target.value }],
            });
            document.querySelector(".slider").style.left =
              ((input.value - 1) * 120) / (capabilities.zoom.max - 1) +
              3 +
              "px";
          };
          input.hidden = false;
          document.querySelector(".range-container").style.visibility =
            "visible";
        })
        .catch((e) => {
          console.error(e);
        });
    };
    const changeFacingMode = () => {
      let isFrontCamera = false;
      const facingModeButton = document.querySelector(
        ".switch-camera-facing-mode"
      );
      facingModeButton.addEventListener("click", () => {
        facingModeButton.querySelector(".rotate").classList.add("rotating");
        setTimeout(() => {
          facingModeButton
            .querySelector(".rotate")
            .classList.remove("rotating");
        }, 1500);
        streamWebCamVideo(isFrontCamera);
        facingModeButton.dataset.facingMode = isFrontCamera ? "front" : "back";
        isFrontCamera = !isFrontCamera;
      });
    };
    const capturePhoto = () => {
      const photoButton = document.querySelector(".capture-button");
      photoButton
        ?.querySelector(".capture-icon")
        ?.setAttribute("style", "scale: 1");
      photoButton.addEventListener("click", () => {
        const facingModeButton = document.querySelector(
          ".switch-camera-facing-mode"
        );
        photoButton
          ?.querySelector(".capture-icon")
          ?.setAttribute("style", "scale: 0.90");
        setTimeout(() => {
          photoButton
            ?.querySelector(".capture-icon")
            ?.setAttribute("style", "scale: 1");
        }, 500);

        drawOnCanvasAndSavePhoto(
          facingModeButton.dataset.facingMode === "front"
        );
      });
    };
    const drawOnCanvasAndSavePhoto = async (isMirrored = false) => {
      const video = document.getElementById("stream");
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const scaleFactor = 2;
      canvas.width = video.videoWidth * scaleFactor;
      canvas.height = video.videoHeight * scaleFactor;
      if (isMirrored) {
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
      }
      // Check for filters
      if (video.dataset.lens === "monochrome") context.filter = "grayscale(1)";
      if (video.dataset.lens.startsWith("gradient"))
        context.filter = "saturate(0.1)";

      const flashElement = document.createElement("div");
      flashElement.style.position = "fixed";
      flashElement.style.top = "0";
      flashElement.style.left = "0";
      flashElement.style.width = "100%";
      flashElement.style.height = "100%";
      flashElement.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      document.body.appendChild(flashElement);
      setTimeout(() => {
        flashElement.remove();
      }, 200);
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      try {
        const imageDataUrl = canvas.toDataURL("image/png", 0.9);
        const link = document.createElement("a");
        const timestamp = new Date().toISOString().replace(/[:.]/g, "");
        link.href = imageDataUrl;
        link.download = `photo_${timestamp}.png`;
        // link.click();

        document.querySelector(".preview").src = imageDataUrl;
        let mimeType = "image/png"; // Adjust this to the correct MIME type of your image
        let blobURL = base64ToBlobURL(
          imageDataUrl.replace("data:image/png;base64,", ""),
          mimeType
        );

        storeService.setImage(blobURL);
      } catch (error) {
        console.error("Error capturing photo:", error);
      }
    };

    streamWebCamVideo();
    changeFacingMode();
    capturePhoto();
  });
</script>

<section id="camera">
  <video id="stream" muted autoplay playsinline data-lens="none"></video>
  <div class="range-container">
    <input type="range" name="range" id="range" aria-label="Zoom Level" />
    <img
      draggable="false"
      src="/images/Camera/trackMeter.svg"
      alt="zoom feature"
    />
    <img
      draggable="false"
      class="slider"
      src="/images/Camera/line.svg"
      alt="zoom slider"
    />
    <p class="zoom-multiplier" aria-live="polite"></p>
  </div>

  <div class="controls" role="button" tabindex="0">
    <div class="lenses">
      <div
        class="image"
        role="button"
        tabindex="0"
        on:click={() => goto("/preview")}
        on:keydown={() => null}
      >
        <img
          draggable="false"
          class="preview"
          src="/images/Camera/rect.svg"
          height="48px"
          width="48px"
          alt="preview shot"
        />
      </div>
    </div>
    <div
      class="capture-button"
      role="button"
      tabindex="0"
      aria-label="take a picture"
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="31.3333"
          stroke="#2C2C2C"
          stroke-width="1.33333"
        />
        <circle cx="32" cy="32" r="24" fill="white" class="capture-icon" />
      </svg>
    </div>
    <div
      class="switch-camera-facing-mode"
      role="button"
      tabindex="0"
      data-facing-mode="front"
      aria-label="switch camera facing mode"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="23.5" stroke="#2C2C2C" />
        <mask
          id="mask0_63_76"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="11"
          y="11"
          width="26"
          height="26"
        >
          <path d="M11 11H37V37H11V11Z" fill="white" />
        </mask>
        <g mask="url(#mask0_63_76)">
          <g class="rotate">
            <path
              d="M18.2887 26.8558V25.2241C18.2887 22.0719 20.8478 19.5129 23.9999 19.5129C25.5758 19.5129 27.0036 20.1525 28.0377 21.1863"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6572 25.2241L18.289 26.8558L19.9208 25.2241"
              stroke="white"
              stroke-width="1.52344"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.7113 23.592V25.2237C29.7113 28.3759 27.1522 30.9349 24.0001 30.9349C22.4242 30.9349 20.9964 30.2952 19.9623 29.2615"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.3431 25.2236L29.7114 23.5919L28.0796 25.2236"
              stroke="white"
              stroke-width="1.52344"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <path
            d="M11.7617 21.1445C11.7617 20.0627 12.1917 19.0249 12.9566 18.26C13.7215 17.4951 14.7593 17.0651 15.8411 17.0651H17.2804C17.8984 17.0651 18.4634 16.7159 18.74 16.1632C18.8273 15.9878 18.9223 15.7985 19.0186 15.6055C19.5714 14.5 20.7014 13.8016 21.9374 13.8016H26.0626C27.2986 13.8016 28.4286 14.5 28.9814 15.6055C29.0777 15.7985 29.1727 15.9878 29.26 16.1632C29.5366 16.7159 30.1016 17.0651 30.7196 17.0651H32.1589C33.2407 17.0651 34.2785 17.4951 35.0434 18.26C35.8083 19.0249 36.2383 20.0627 36.2383 21.1445V30.1193C36.2383 31.2012 35.8083 32.239 35.0434 33.0038C34.2785 33.7688 33.2407 34.1987 32.1589 34.1987H15.8411C14.7593 34.1987 13.7215 33.7688 12.9566 33.0038C12.1917 32.239 11.7617 31.2012 11.7617 30.1193V21.1445Z"
            stroke="white"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </div>
  </div>
</section>

<style lang="scss">
  #camera {
    position: relative;
  }

  /* Video Element */
  video {
    inline-size: 100vw;
    block-size: 85vh;
    object-fit: cover;
    object-position: center;
  }

  /* Video Controls */
  .controls {
    display: flex;
    position: relative;
    block-size: 100px;
    inline-size: 90vw;
    margin-inline: auto;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }

  /* Video filters */

  .lenses {
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
  }

  .lenses > .image {
    position: relative;
  }

  .lenses > .image > .preview {
    object-fit: cover;
    border-radius: 4px;
    position: relative;
    aspect-ratio: 1/1;
    z-index: 1;
  }

  /* Switch between rear and front camera modes */
  .switch-camera-facing-mode {
    cursor: pointer;
    pointer-events: all;
  }

  .switch-camera-facing-mode:has(.rotating) {
    pointer-events: none;
  }

  .switch-camera-facing-mode .rotate {
    cursor: pointer;
  }

  .switch-camera-facing-mode .rotate:is(.rotating) {
    animation: rotate 1.5s both;
    transform-origin: 50% calc(50% + 1.1px);
  }

  @keyframes rotate {
    0% {
      rotate: 0deg;
    }

    100% {
      rotate: -180deg;
    }
  }

  /* Capture button to click and take photos */
  .capture-button {
    cursor: pointer;
    transition: scale 0.2s ease-in-out;
  }
  .capture-button .capture-icon {
    transition: scale 0.2s ease-in-out;
    transform-origin: center;
  }

  // .capture-button:is(.click) .capture-icon {
  //   animation: click 0.2s ease-in-out both;
  //   transform-origin: center;
  // }

  // @keyframes click {
  //   0% {
  //     scale: 1;
  //   }

  //   50% {
  //     scale: 0.85;
  //   }

  //   100% {
  //     scale: 1;
  //   }
  // }

  .range-container {
    position: absolute;
    inset-inline-start: 50%;
    translate: -50% 0;
    inset-block-start: 72vh;
    display: flex;
    justify-content: center;
    word-spacing: 15px;
    visibility: hidden;
  }

  .zoom-multiplier {
    position: absolute;
    inline-size: max-content;
    color: #fff;
    font-size: 10px;
    translate: 0 18px;
    pointer-events: none;
  }

  .range-container img {
    position: absolute;
    pointer-events: none;
  }

  .range-container .slider {
    position: absolute;
    left: 3px;
  }
</style>
