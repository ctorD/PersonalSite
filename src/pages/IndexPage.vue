<template>
  <q-page>
    <div class="q-pa-sm row items-stretch content-stretch q-col-gutter-sm">
      <div class="col-sm-12">
        <q-card class="row">
          <project-list></project-list>
        </q-card>
      </div>
      <!-- <div class="col-12">
        <project-list></project-list>
      </div> -->
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
