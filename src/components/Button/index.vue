<template>
  <button>
    {{ text }}
  </button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Button Label",
    }
  }
});
</script>

<style scoped lang="scss">
button {
  color: $color-base-red;
}
</style>