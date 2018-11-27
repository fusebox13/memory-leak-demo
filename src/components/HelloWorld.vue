<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="leakMemory">Leak Memory</button>
    <button @click="periodLeak">Periodic Leak</button>
    <button @click="useInternalMemory">Leak Internal</button>
    <button @click="dumpHeapStats">Get Heap Stats</button>
    <ul>
      <li v-for="(heapDump, index) in heapSnapShots" :key="index">
        {{heapDump.usedJSHeapSize / 1000000}} MB
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
let x: string[] = [];
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  public otherMsg!: string;
  public count: number = 0;
  public q: string[] = [];
  public heapSnapShots: Object[] = [];

  click() {
    this.count++;
  }
  created() {
    this.count = 0;
    //this.useInternalMemory();
    this.dumpHeapStats();
  }
  beforeDestroy() {
    console.log("Destroying Array:", this.q);
  }
  leakMemory() {
    for (var i = 0; i < 10000; i++) {
      document.body.appendChild(document.createElement("div"));
    }
    x.push(new Array(1000000).join("x"));
  }
  useInternalMemory() {
    this.q.push(new Array(1000000).join("q"));
  }

  dumpHeapStats() {
    console.log(performance.memory);
    this.heapSnapShots.push(performance.memory);
  }
  periodLeak() {
    for (let i = 0; i < 10; i++) {
      console.log("Leaking memory");
      setTimeout(this.leakMemory(), 1000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  color: #660000;
}
</style>
