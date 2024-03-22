<template>
  <q-page
    class="q-pa-lg row justify-evenly items-start content-start q-col-gutter-md"
  >
    <div class="col-xs-12 col-sm-12 col-md-6">
      <q-card class="row">
        <div class="full-width column q-pa-sm items-center justify-center">
          <div class="text-h6">Daniel Clarke</div>
          <div class="text-subtitle1">Software Developer</div>
          <div class="row no-wrap">
            <q-btn
              icon="fa-solid fa-envelope"
              href="mailto: abc@example.com"
              flat
              size="sm"
            ></q-btn>
            <q-btn icon="fa-brands fa-linkedin-in" flat size="sm"></q-btn>
            <q-btn
              icon="fa-brands fa-github"
              flat
              size="sm"
              href="https://github.com/ctorD"
            ></q-btn>
          </div>
        </div>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6">
      <q-card class="row">
        <div class="full-width column q-pa-sm items-center justify-center">
          <div class="text-h6">Languages</div>
          <q-separator></q-separator>
          <div class="text-subtitle1">Software Developer</div>
          <div class="row no-wrap">
            <q-btn
              icon="fa-solid fa-envelope"
              href="mailto: abc@example.com"
              flat
              size="sm"
            ></q-btn>
            <q-btn icon="fa-brands fa-linkedin-in" flat size="sm"></q-btn>
            <q-btn
              href="https://github.com/ctorD"
              icon="fa-brands fa-github"
              flat
              size="sm"
            ></q-btn>
          </div>
        </div>
      </q-card>
    </div>
    <div class="col-sm-12" style="height: 100%">
      <q-card class="row">
        <project-list></project-list>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
import LanguageList from 'src/components/LanguageList.vue';
import ProjectList from 'src/components/ProjectList.vue';

export default defineComponent({
  name: 'IndexPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { LanguageList, ProjectList },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>

<style lang="sass">
.example-col-gutter-size
  .my-content
    padding: 10px 15px
    background: rgba(#999,.15)
    border: 1px solid rgba(#999,.2)
</style>
