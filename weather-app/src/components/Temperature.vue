<template>
  <div class="col-lg-4 ">
    <div class="box">
      <fa-icon v-if="temperature > 25" class="icon" icon="temperature-high" />
      <fa-icon v-else class="icon" icon="temperature-low" />
      <span>Temperatura: {{ temperature }}°C</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "temperature",
  props: ["temperature"]
};
</script>

<style lang="scss">

</style>