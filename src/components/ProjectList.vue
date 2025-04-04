<template>
  <div class="col q-pa-sm items-start justify-start">
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
        <div class="row justify-start items-start">
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
        langs: ['VUE', 'CSHARP', 'TS'],
        title: 'Code Racer',
        url: 'https://coderacer.5645645.xyz/',
        gitUrl: undefined,
        gitFrontEndUrl: 'https://github.com/ctorD/CodeRacerClient',
        gitBackEndUrl: 'https://github.com/ctorD/CodeRacerBackend',
        description:
          'A fast-paced multiplayer coding game where players compete to accurately write code snippets in real time. Created using WebSockets for realtime data, with code snippets sourced from the GitHub API.',
      },
      {
        id: 2,
        langs: ['VUE', 'TS', 'CSHARP'],
        title: 'Casio Sync',
        url: 'https://casiosync.ctord.dev/',
        gitUrl: undefined,
        gitFrontEndUrl: 'PRIVATE',
        gitBackEndUrl: 'https://github.com/ctorD/WorldTimeApi',
        description:
          'Easily configure daylight saving time settings for your Casio watch. Casio Sync provides up-to-date DST data, ensuring your watch stays accurate with the latest time zone adjustments.',
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
