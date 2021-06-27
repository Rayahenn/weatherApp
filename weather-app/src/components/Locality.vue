<template>
  <div class="col-lg-4">
    <div class="box">
      <fa-icon class="icon" icon="map-marker-alt" />
      <span>Miejsce: {{ locality }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "locality",
  props: ["locality"]
};
</script>