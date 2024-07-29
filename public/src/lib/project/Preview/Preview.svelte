<script lang="ts">
    export let images: string[] = [];
</script>

<div id="pictures">
    {#each images ?? [] as image}
        <img draggable="false" src={image} alt="taken from camera" />
    {/each}
</div>

<style lang="scss">
    #pictures {
        display: flex;
        justify-content: center;
        & > img {
            height: 200px;
            aspect-ratio: 9/16;
            object-fit: cover;
            border: 4px solid #b1cd46;
            border-radius: 10px;
            position: relative;
            &:first-of-type {
                rotate: -15deg;
            }
            &:last-of-type {
                rotate: 15deg;
            }
            &:nth-of-type(2) {
                z-index: 1;
            }
        }
    }
</style>
