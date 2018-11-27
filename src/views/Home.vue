<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/death-skull.svg">
    <HelloWorld v-if="exists" msg="DO BAD THINGS"/>
    <button @click="toggle">v-if Memory Leak Component</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  exists: boolean = true;
  toggle() {
    this.exists = !this.exists;
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 20%;
  height: 20%;
}
</style>
