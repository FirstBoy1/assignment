<template>
  <div>
    <custom-input />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomInput from './components/CustomInput.vue';

@Component({ components: { CustomInput } })
export default class App extends Vue {}
</script>
