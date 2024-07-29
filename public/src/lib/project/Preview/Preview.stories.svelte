<script lang="ts" context="module">
    import { Template, Story } from "@storybook/addon-svelte-csf";
    import { Preview } from "..";
    export const meta = {
        title: "Components/Project/Preview",
        components: Preview,
    };
</script>

<Template let:args>
    <Preview {...args} images={["https://picsum.photos/500", "https://picsum.photos/400", "https://picsum.photos/600"]} />
</Template>

<Story name="main" args={{}} />
