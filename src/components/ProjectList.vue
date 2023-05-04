<template>
  <q-card class="q-ma-xs col items-start justify-start">
    <div class="text-h4 text-center">Projects</div>
    <q-separator color="" />
    <div class="row justify-start items-center">
      <div
        class="col-xs-12 col-sm-6 col-lg-4"
        v-for="project in projects"
        :key="project.id"
      >
        <ProjectItem
          class="q-ma-xs"
          :title="project.title"
          :description="project.description"
        ></ProjectItem>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default defineComponent({
  components: { ProjectItem },
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
