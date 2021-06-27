<template>
  <div class="col-lg-4">
    <div class="box">
      <fa-icon class="icon" icon="wind" />
      <span v-if="windSpeed">Predkość: {{ windSpeed }} km/h</span>
      <span v-else>Predkość: 0 km/h</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wind",
  props: ["windSpeed"]
};
</script>