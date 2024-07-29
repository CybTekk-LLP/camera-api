<script lang="ts" context="module">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Modal } from "..";

  export const meta = {
    title: "Components/Project/Modal",
    components: Modal,
  };
</script>

<Template let:args>
  <Modal {...args} />
</Template>

<Story name="main" args={{}} />
