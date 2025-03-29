<template>
  <q-page class="row" padding>
    <q-card class="col-12 q-mb-sm items-center justify-center text-center">
      <div class="text-h6">Daniel Clarke</div>
      <div class="text-subtitle1">Software Developer</div>
      <div class="row no-wrap items-center justify-center">
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
    </q-card>

    <div class="col-12" style="height: 100%">
      <q-card class="row">
        <project-list></project-list>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectList from 'src/components/ProjectList.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ProjectList },
  setup() {
    //
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
