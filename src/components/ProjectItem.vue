<template>
  <q-card>
    <q-card-section class="q-pa-sm row items-center bg-secondary text-white">
      <div class="text-h6">{{ project.title }}</div>
      <q-space />
      <div>
        <q-btn
          v-if="project.gitUrl != undefined"
          icon="fa-brands fa-github"
          flat
        />
        <q-btn-dropdown
          v-if="project.gitFrontEndUrl != undefined"
          dense
          icon="fa-brands fa-github"
          flat
        >
          <q-list dense>
            <q-item
              target="”_blank”"
              :href="project.gitFrontEndUrl"
              dense
              clickable
              v-close-popup
              v-if="project.gitFrontEndUrl"
            >
              <q-item-section avatar>
                <q-icon color="primary" name="code" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Front-End</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              target="”_blank”"
              :href="project.gitBackEndUrl"
              dense
              clickable
              v-close-popup
              v-if="project.gitBackEndUrl"
            >
              <q-item-section avatar>
                <q-icon color="primary" name="code" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Back-End</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn
          target="”_blank”"
          :href="project.url"
          v-if="project.url"
          icon="fa-solid fa-link"
          flat
        />
      </div>
    </q-card-section>

    <q-card-section class="q-pa-sm bg-white">
      {{ project.description }}
    </q-card-section>
    <q-card-section
      class="row bg-secondary q-gutter-sm items-end justify-end full-width bg-white"
    >
      <q-icon
        v-for="(icon, index) in icons"
        :key="index"
        size="md"
        :name="icon"
      ></q-icon>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Language } from 'src/logic/Language';
import { Project } from 'src/logic/Project';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  components: {},
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  setup(props) {
    const icons = getLanguageIcons();
    function getIcon(lang: Language) {
      //
      switch (lang) {
        case 'TS':
          return 'mdi-language-typescript';
        case 'VUE':
          return 'mdi-vuejs';
        case 'CSHARP':
          return 'mdi-language-csharp';
      }
    }

    function getLanguageIcons() {
      const icons: string[] = [];

      props.project.langs.forEach((lang) => {
        icons.push(getIcon(lang));
      });
      return icons;
    }

    function createGitButton() {
      if (props.project.gitUrl) {
        //One Git
      } else {
      }
    }

    return { icons };
  },
});
</script>
