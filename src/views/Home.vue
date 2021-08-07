<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="count(1)">
    {{s}}
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
//   setup(){
//     console.log(1)
// }
data(){
  return {
    s:1,
  }
},
created(){
console.log(2)
},
methods:{
  count(n:number){
    this.s=this.s+n
  }
},
})

export default class Home extends Vue {}
</script>
