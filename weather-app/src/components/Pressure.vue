<template>
  <div class="col-lg-4">
    <div class="box">
      <fa-icon class="icon" icon="tachometer-alt" />
      <span v-if="pressure">Ciśnienie: {{ pressure }} hPa</span>
      <span v-else>Ciśnienie: 0 hPa</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "pressure",
  props: ["pressure"]
};
</script>