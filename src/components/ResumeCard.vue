<template>
  <q-card class="q-ma-xs col items-start justify-start">
    <div class="text-h6 text-center">Resume</div>
    <q-separator color="" />
    <div class="row justify-start items-center"></div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  setup() {
    const projects = [
      {
        id: 0,
        title: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil atque distinctio! Delectus minima eligendi quasi excepturi cumque esse id ea non molestias perferendis reprehenderit cupiditate dicta, fuga nisi itaque?',
      },
      {
        id: 1,
        title: 'Project 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil atque distinctio! Delectus minima eligendi quasi excepturi cumque esse id ea non molestias perferendis reprehenderit cupiditate dicta, fuga nisi itaque?',
      },
    ];
    return { projects };
  },
});
</script>
