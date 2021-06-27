<template>
  <div class="col-lg-4">
    <div class="box">
      <fa-icon class="icon" icon="tint" />
      <span v-if="humidity">Wilgotność: {{ humidity }}%</span>
      <span v-else>Wilgotność: 0%</span>
    </div>
  </div>
</template>

<script>
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "Humidity",
  props: ["humidity"]
};
</script>