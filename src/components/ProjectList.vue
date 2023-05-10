<template>
  <div class="col items-start justify-start">
    <div class="text-h6 text-center">Projects</div>
    <q-separator color="" />
    <div class="row no-wrap" style="height: 600px">
      <LanguageList
        :lang="selectedFilter"
        @select="($event) => (selectedFilter = $event)"
        class="col-3"
      ></LanguageList>
      <q-separator vertical color="" />
      <q-scroll-area style="height: 100%; width: 100%">
        <div class="row justify-start items-center">
          <div
            class="col-xs-12 col-sm-6 col-lg-4"
            v-for="project in filteredProjects"
            :key="project.id"
          >
            <ProjectItem :project="project" class="q-ma-xs"></ProjectItem>
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import ProjectItem from './ProjectItem.vue';
import LanguageList from './LanguageList.vue';
import { Language } from 'src/logic/Language';
import { Project } from 'src/logic/Project';

export default defineComponent({
  components: { ProjectItem, LanguageList },
  setup() {
    const selectedFilter = ref<Language | undefined>(undefined);
    const projects: Project[] = [
      {
        id: 0,
        langs: ['CSHARP', 'TS'],
        title: 'Code Racer',
        url: undefined,
        gitUrl: undefined,
        gitFrontEndUrl: 'https://github.com/ctorD/CodeRacerClient',
        gitBackEndUrl: 'https://github.com/ctorD/CodeRacerBackend',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil atque distinctio! Delectus minima eligendi quasi excepturi cumque esse id ea non molestias perferendis reprehenderit cupiditate dicta, fuga nisi itaque?',
      },
      {
        id: 1,
        langs: ['VUE', 'TS'],
        title: 'Flow Time',
        url: 'https://google.com',
        gitUrl: 'https://github.com/ctorD/FlowTime',
        gitFrontEndUrl: undefined,
        gitBackEndUrl: undefined,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil atque distinctio! Delectus minima eligendi quasi excepturi cumque esse id ea non molestias perferendis reprehenderit cupiditate dicta, fuga nisi itaque?',
      },
      {
        id: 1,
        langs: ['VUE'],
        title: 'Vue Project',
        url: undefined,
        gitUrl: undefined,
        gitFrontEndUrl: undefined,
        gitBackEndUrl: undefined,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil atque distinctio! Delectus minima eligendi quasi excepturi cumque esse id ea non molestias perferendis reprehenderit cupiditate dicta, fuga nisi itaque?',
      },
    ];

    const filteredProjects = computed(() => {
      if (selectedFilter.value) {
        return projects.filter(
          (project) =>
            project.langs.findIndex((lang) => lang == selectedFilter.value) > -1
        );
      } else {
        return projects;
      }
    });

    return { projects, selectedFilter, filteredProjects };
  },
});
</script>
