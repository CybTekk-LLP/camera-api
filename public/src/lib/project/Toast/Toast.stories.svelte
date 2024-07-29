<script lang="ts" context="module">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { Toast } from "..";

  export const meta = {
    title: "Components/Project/Toast",
    components: Toast,
  };
</script>

<Template let:args>
  <Toast {...args} />
</Template>

<Story
  name="success"
  args={{
    showToast: true,
    visibleTime: "3000",
    variant: "success",
    content: {
      heading: "Success",
      description: "Your images have been submitted successfully",
    },
  }}
/>

<Story
  name="failure"
  args={{
    showToast: true,
    visibleTime: "3000",
    variant: "failure",
    content: {
      heading: "Failure",
      description: "Failed to upload images",
    },
  }}
/>
