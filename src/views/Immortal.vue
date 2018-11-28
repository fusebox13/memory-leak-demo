<template>
  <div>I am immortal!!!!!!!!!!!!!</div>
</template>

<script>
import { EventBus } from "@/services/event-bus.js";

export default {
  name: "Immortal",
  data: function() {
    return {
      randomString: "!@#!@#!@#!",
      mass: [],
      randomArray: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    fatten() {
      console.log("Fattening");
      this.mass.push(new Array(1000000).join("🍔"));
    },
    safeLog() {
      console.log(this);
    }
  },
  mounted() {
    EventBus.$on("some-signal", () => {
      console.log("Signal Recieved");
      let evilClosure = () => {
        let hold = this.randomArray;
      };
      //console.log(this)
    });

    EventBus.$emit("some-signal", "the payload");

    //EventBus.$off();

    //this.fatten();
    // let self = this;
    // setTimeout(()=> {
    //   console.log(self);
    // }, 1000);

    //setTimeout(this.safeLog, 1000);
    // this.randomArray.forEach(() => {
    //   //let leakyGuy = this;
    //   console.log(this.$el)
    // });
  }
};
</script>
<style lang="scss" scoped>
</style>
