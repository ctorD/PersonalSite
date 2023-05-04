<template>
  <q-card>
    <q-card-section class="row items-center bg-secondary text-white">
      <div class="text-h6">{{ title }}</div>
      <q-space />
      <div>
        <q-btn icon="fa-brands fa-github" flat />
        <q-btn icon="fa-solid fa-link" flat />
      </div>
    </q-card-section>

    <q-card-section class="bg-white">
      {{ description }}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
