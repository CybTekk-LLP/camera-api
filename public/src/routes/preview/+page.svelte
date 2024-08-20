<script lang="ts">
  import { Modal, Toast } from "$lib/project";
  import * as storeService from "$lib/services/store.service";
  import * as apiService from "$lib/services/api.service";
  import { onMount } from "svelte";

  let images = storeService.getImages();
  let activeIndex = 0;
  let checked: boolean;
  let dialog: HTMLDialogElement;
  let showBackdrop = false;
  let showToast: boolean | undefined = undefined;
  let imageurl: string;
  let email: string | undefined = "";
  let name: string | undefined = "";

  async function fetchBlob(blobUrl: string) {
    const response = await fetch(blobUrl);
    return await response.blob();
  }

  function blobToFile(blob: Blob, fileName: string) {
    return new File([blob], fileName, { type: blob.type });
  }

  async function convertBlobUrlsToFiles(blobUrls: string[]) {
    const files = [];
    for (let i = 0; i < blobUrls.length; i++) {
      const blob = await fetchBlob(blobUrls[i]);
      const file = blobToFile(blob, `file${i + 1}.png`); // Generate file names dynamically
      files.push(file);
    }
    return files;
  }
  let onGalleryInput = async () => {
    const files = await convertBlobUrlsToFiles(storeService.getImages());
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });
    showToast = !!(await apiService.uploadGallery(files));

    if (showToast && name && email) {
      const sendEmail = await apiService.sendMail(email, name, imageurl);
    }
  };

  const deleteImage = () => {
    storeService.deleteImage(activeIndex);
    images = storeService.getImages();
  };

  let canvas: HTMLCanvasElement;
  onMount(() => {
    email = storeService.getEmail();
    name = storeService.getName();
    const ctx = canvas.getContext("2d");
    const img0 = loadImage("/images/Preview/Prompt for first Email.svg", main);
    const img1 = loadImage(images[0], main);
    const img2 = loadImage(images[1], main);
    const img3 = loadImage(images[2], main);

    let imagesLoaded = 0;
    async function main() {
      imagesLoaded += 1;

      if (imagesLoaded === 4 && ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "#75861B";
        ctx.lineWidth = 0;
        ctx.fillStyle = "#F0EBE2";
        ctx.drawImage(img0, 0, 0, canvas.width, canvas.height);
        ctx.font = "18px serif";
        ctx.fillStyle = "#75861B";
        ctx.textAlign = "center";
        ctx.fillText(
          name?.split(" ")[0] ||
            (email?.toUpperCase() ?? "").replace(/@.*/, "") + "'s Images",
          canvas.width / 2,
          370
        );
        ctx.rotate(-0.23);
        ctx.drawImage(img1, 14.4, 171.5, 108, 117);
        ctx.rotate(0.22);
        ctx.drawImage(img2, 201, 136, 108, 117);
        ctx.rotate(0.226);
        ctx.drawImage(img3, 375, 62, 108, 117);

        let url = canvas.toDataURL("image/jpeg", 1.0);
        if (url) {
          imageurl = await apiService.uploadImageForEmail(url);
        }
      }
    }

    function loadImage(
      src: string,
      onload: ((this: GlobalEventHandlers, ev: Event) => any) | null
    ) {
      const img = new Image();
      img.onload = onload;
      img.src = src;
      return img;
    }
  });
</script>

<main class="camera-preview">
  <nav class="nav-bar">
    <a href="/">
      <img draggable="false" src="/images/Preview/Back.svg" alt="back" />
    </a>
    {#if images.length !== 0}
      <a
        class="post"
        href="/"
        on:click|preventDefault={() => {
          dialog.show(), (showBackdrop = true);
        }}
      >
        <p>Post</p>
      </a>
    {/if}
  </nav>
  {#if images.length !== 0}
    <div class="image-slider">
      {#each images as image, i}
        <img
          draggable="false"
          class="gallery-image"
          width="100%"
          height="100%"
          src={image}
          id={`image-${i}`}
          alt="gallery"
        />
      {/each}
    </div>
    <div class="bottom">
      <div class="thumbnails">
        {#each images as image, i}
          <a
            class="thumbnail"
            class:active={activeIndex === i}
            href={`#image-${i}`}
            on:click={() => (activeIndex = i)}
          >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img
              draggable="false"
              class="thumbnail-image"
              src={image}
              alt="thumbnail"
            />
          </a>
        {/each}
      </div>
      {#if images.length !== 0}
        <a href="/" on:click|preventDefault={deleteImage}>
          <img
            draggable="false"
            src="/images/Preview/Delete.svg"
            alt="delete"
          />
        </a>
      {/if}
    </div>
  {:else}
    <div class="empty-state">
      <img
        draggable="false"
        src="/images/Preview/EmptyState.svg"
        alt="empty state"
      />
      <h3 style:color="#ffffff">Store upto three images</h3>
    </div>
  {/if}
  <Modal
    bind:dialog
    bind:showBackdrop
    bind:checked
    images={storeService.getImages()}
    handleClick={() => onGalleryInput()}
  />

  <Toast
    showToast={showToast && !(showToast = undefined)}
    visibleTime={3000}
    variant="success"
    content={{
      heading: "Success",
      description: "Your images have been submitted successfully",
    }}
  />
  <Toast
    showToast={showToast === false && !(showToast = undefined)}
    visibleTime={3000}
    variant="failure"
    content={{
      heading: "Failure",
      description: "Failed to submit your images",
    }}
  />
</main>
<canvas width="512" height="464" id="canvas" bind:this={canvas}></canvas>

<style lang="scss">
  canvas {
    display: none;
  }
  .camera-preview {
    position: relative;
    inline-size: 100vw;
    block-size: 100vh;
    & > .nav-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 20px;
      padding-block: 20px;
      & > .post {
        text-decoration: none;
        color: #b1cd46;
      }
    }
    & > .image-slider {
      inline-size: 100%;
      block-size: 75%;
      display: flex;
      align-items: center;
      gap: 20px;
      overflow-x: scroll;
      scrollbar-width: 0;
      scroll-snap-type: x mandatory;
      &::-webkit-scrollbar {
        display: none;
      }
      margin-block-end: 30px;
      & > .gallery-image {
        object-fit: cover;
        image-rendering: optimizeSpeed;
        scroll-snap-align: center;
      }
    }
    & > .bottom {
      display: grid;
      grid-template-columns: auto 20px;
      align-items: center;
      padding-inline: 20px;
      & > .thumbnails {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;
        overflow-x: scroll;
        overflow-y: hidden;
        scrollbar-width: 0;
        &::-webkit-scrollbar {
          display: none;
        }
        & > .thumbnail {
          inline-size: 64px;
          block-size: 64px;
          text-decoration: none;
          border: 2px solid transparent;
          border-radius: 10px;
          &.active {
            border: 2px solid #b1cd46;
          }
          & > .thumbnail-image {
            inline-size: 100%;
            block-size: 100%;
            border-radius: 10px;
            object-fit: cover;
            image-rendering: optimizeSpeed;
            aspect-ratio: 1/1;
          }
        }
      }
    }
    & > .empty-state {
      position: absolute;
      inset-inline-start: 50%;
      inset-block-start: 50%;
      transform: translate(-50%, -50%);
      & > img {
        padding-inline-start: 30px;
      }
      & > h3 {
        font-weight: normal;
        white-space: nowrap;
        margin-block-start: 20px;
      }
    }
  }
</style>
