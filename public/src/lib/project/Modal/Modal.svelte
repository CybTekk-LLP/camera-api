<script lang="ts">
  import { onMount } from "svelte";
  import { Preview } from "..";
  import { goto } from "$app/navigation";

  export let checked: boolean;
  export let dialog: HTMLDialogElement;
  export let showBackdrop: boolean;
  export let handleClick: () => void;
  export let images: string[] = [];

  const clickOutside = (node: HTMLElement) => {
    const handleClick = (event: Event) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        node.dispatchEvent(new CustomEvent("click_outside", node));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  };
  const handleClickOutside = () => {
    dialog.close();
    showBackdrop = false;
  };
  onMount(() => {
    dialog.addEventListener("click_outside", () => {
      handleClickOutside();
    });
  });
</script>

<div class="modal-bg" class:show-filter={showBackdrop}></div>
<dialog bind:this={dialog} use:clickOutside>
  <div>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img
      class="cancel"
      src="/images/Preview/Cancel.svg"
      alt="alert"
      on:click={() => {
        dialog.close(), (showBackdrop = false);
      }}
    />
    <div style="text-align: center; margin:10px auto 30px auto">
      <Preview {images}></Preview>
    </div>
    <p>
      By clicking "I Consent," you agree to our use of your images, which will
      be processed and stored on AWS. Your privacy and data security are
      assured.
    </p>
    <br />
    <div class="checkbox">
      <input id="condition" type="checkbox" bind:checked />
      <label for="condition"> I consent</label>
    </div>
    <br />
    <button
      class="btn-secondary btn"
      on:click={() => {
        dialog.close(), (showBackdrop = false), goto("/");
      }}>Take Again</button
    >
    <br />
    <button
      class="btn"
      class:disabled={!checked}
      on:click={() => {
        dialog.close(), (showBackdrop = false), handleClick();
      }}>Submit</button
    >
  </div>
</dialog>

<style>
  .modal-bg {
    position: fixed;
    display: none;
    block-size: 100%;
    z-index: 2;
    inset-inline-start: 0;
    inset-block-start: 0;
    inline-size: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-blend-mode: saturation;
    &.show-filter {
      display: block;
    }
  }
  dialog {
    position: absolute;
    inline-size: 90%;
    inset-inline-start: 50%;
    inset-block-start: 50%;
    translate: -50% -50%;
    background-color: #22280b;
    padding-inline: 20px;
    padding-block: 50px;
    border-radius: 20px;
    z-index: 3;
    border: 0;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: start;
      & > p {
        font-size: 14px;
        color: #9cafa3;
      }
      & > .cancel {
        position: absolute;
        inset-inline-end: 10px;
        inset-block-start: 10px;
      }
      & > .checkbox {
        display: flex;
        align-items: center;
        accent-color: #b1cd46;
        & > input {
          inline-size: 20px;
          block-size: 20px;
          margin-right: 10px;
        }
        & > label {
          color: #ffffff;
        }
      }
      & > .btn {
        inline-size: 100%;
        padding-inline: 30px;
        padding-block: 10px;
        cursor: pointer;
        background-color: #b1cd46;
        outline: 1px solid transparent;
        border: 0;
        color: #000000;
        border-radius: 10px;
        transition: background-color 0.2s ease;
        &.disabled {
          background-color: #6b806f;
          color: #ffffff;
          cursor: not-allowed;
          pointer-events: none;
          cursor: not-allowed;
        }
        &.btn-secondary {
          color: #ffffff;
          outline: 1px solid #b1cd46;
          background-color: #22280b;
          &:hover {
            background-color: #b2cd4653;
          }
        }
      }
    }
  }
</style>
