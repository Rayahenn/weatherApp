<template>
  <div class="col-12">
    <div class="box">
        <fa-icon class="icon" icon="temperature-low" />
        <span>Temperatura w kolejne dni:</span>
        <div class="temperatureWrapper">
            <span class="temperature" v-for="(temperature, key) in dailyTemp" :key="key">
                {{ temperature.temp.day.toFixed(0) }}°C<span v-if="key !== dailyTemp.length - 1">,</span>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dailyTemp",
  props: ["dailyTemp"]
};
</script>