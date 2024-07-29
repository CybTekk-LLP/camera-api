<script lang="ts">
  export let variant: "success" | "failure";
  export let showToast = false;
  export let visibleTime = 3000;
  export let content: {
    heading: string;
    description: string;
  };

  let toast: HTMLElement;
  let toastOut = false;
  let dismissCard = () => {
    toast.style.display = "none";
  };

  const watchToast = (show: boolean) => {
    if (!show) return;

    setTimeout(() => {
      toastOut = true;
    }, visibleTime - 500);

    setTimeout(() => {
      showToast = false;
      toastOut = false;
    }, visibleTime);
  };

  $: watchToast(showToast ?? false);
</script>

{#if showToast}
  <article
    bind:this={toast}
    class:out={toastOut}
    class:failure={variant === "failure"}
  >
    <div>
      <h1>{content.heading}</h1>
      <p>
        {content.description}
      </p>
    </div>
    <a
      aria-label="Dismiss Invite Card"
      href="/"
      class="cross"
      on:click|preventDefault={() => {
        dismissCard();
      }}
    >
      <img
        class="cancel"
        src="/images/Preview/Cancel.svg"
        alt="Dismiss Invite Card"
      />
    </a>
  </article>
{/if}

<style lang="scss">
  article {
    position: fixed;
    inset-inline-end: 10px;
    inset-block-end: 30px;
    z-index: 3;
    max-inline-size: 378px;
    inline-size: 100%;
    block-size: 90px;
    background-color: #22280B;
    border-radius: 8px;
    border-inline-start: 10px solid #B1CD46;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-inline: 16px;
    padding-block: 25px;
    -webkit-animation: toast 250ms ease both;
    -moz-animation: toast 250ms ease both;
    -o-animation: toast 250ms ease both;
    animation: toast 250ms ease both;
    @keyframes toast {
      0% {
        translate: 100% 0;
      }
      100% {
        translate: 0 0;
      }
    }
    &.failure {
      border-inline-start: 10px solid #ff0000;
    }
    &.out {
      -webkit-animation: toastOut 250ms ease both;
      -moz-animation: toastOut 250ms ease both;
      -o-animation: toastOut 250ms ease both;
      animation: toastOut 250ms ease both;
    }
    @keyframes toastOut {
      0% {
        translate: 0 0;
      }
      100% {
        translate: 100% 0;
      }
    }
    & > img {
      image-rendering: optimizeSpeed;
    }
    & > a {
      position: absolute;
      text-decoration: none;
      inset-inline-end: 10px;
      inset-block-start: 10px;
      z-index: 3;
    }
    & > div {
      position: relative;
      z-index: 3;
      inline-size: 290px;
      margin-inline: auto;
      & > h1 {
        font-size: 20px;
      }
      & > p {
        font-size: 16px;
      }
    }
  }
</style>
