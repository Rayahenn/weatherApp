<template>
  <div class="col-lg-4">
    <div class="box">
      
      <div v-if="cloudiness == 'Clouds'" class="icons">
        <fa-icon class="icon cloud" icon="cloud" />
        <fa-icon class="icon sun" icon="sun" />
        <fa-icon class="icon cloud" icon="cloud" />
      </div>
      <div v-else-if="cloudiness == 'Clear'" class="icons">
        <fa-icon class="icon sun" icon="sun" />
      </div>
      <div v-else-if="cloudiness == 'Drizzle'" class="icons rain">
        <fa-icon class="icon drizzle" icon="cloud" />
      </div>
      <div v-else-if="cloudiness == 'Rain'" class="icons rain">
        <fa-icon class="icon drizzle" icon="cloud" />
      </div>
      <div v-else class="icons">
        <fa-icon class="icon sun" icon="sun" />
      </div>
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cloudiness",
  props: ["cloudiness", "description"]
};
</script>

<style scoped lang="scss">
  .icons {
    position: relative;
  }
  span {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;

    font-size: 30px;
    color: white;
  }
  .cloud {
    display: inline;
    color: rgb(235, 238, 241);
    top: 35%;
    left: 12%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
    &:nth-of-type(1) {
      animation: move 8s linear infinite;
    }
    &:nth-of-type(3) {
      top: 20%;
      transform: translate(-50%, -50%);
      z-index: -3;
      animation: cloud 8s linear infinite;
    }
  }
  .sun {
    position: absolute;
    color: #f7df0f;
    display: inline-block;
    z-index: -2;
    animation: sun 8s linear infinite;
  }
  .drizzle {
    position: relative;
    display: inline-block;
    top: 0%;
    left: 50%;
  }
.rain::before {
  content: "";
  display: inline-block;
  position: relative;
  height: 5px;
  top: 0%;
  left: 40%;
  transform: translateY(24px);
  border: 2px solid white;
  animation: rain 1s 0.4s linear infinite;
  animation-fill-mode: forwards;
  box-shadow: 70px -20px 0 white;
}

.rain::after {
  content: "";
  display: inline-block;
  position: relative;
  height: 5px;
  top: 0%;
  left: 10%;
  border: 2px solid white;
  animation: rain 1s linear infinite;
  transform: translateY(24px);
}

@media (max-device-width: 600px) {
  .cloudiness {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .drizzle {
    top: 40% !important;
  }
  .rain::before,
  .rain::after {
    top: 25%;
  }
  .sun {
    font-size: 70px;
    left: 50% !important;
    margin: auto;
  }
  .cloud {
    font-size: 70px;
    left: 20% !important;
    &:nth-of-type(3) {
      left: 30% !important;
    }
  }
}

@media (min-width: 601px) {
  .icon {
    font-size: 100px;
  }
}

@keyframes move {
  0% {
    transform: translateY(-0.5rem);
  }
  50% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(-0.4rem);
  }
}

@keyframes cloud {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.8;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateX(120%);
  }
}
@keyframes sun {
  0% {
    filter: drop-shadow(0px 0px 7px #ffe70d);
  }
  50% {
    filter: drop-shadow(0px 0px 20px #ffc70d);
  }
  100% {
    filter: drop-shadow(0px 0px 7px #ffe70d);
  }
}
@keyframes rain {
  0% {
    opacity: 1;
  }
  100% {
    top: 40%;
    opacity: 0;
  }
}
</style>
