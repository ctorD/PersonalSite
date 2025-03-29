<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header class="bg-primary text-white">
      <q-toolbar class="row items-center justify-center q-gutter-lg">
        <q-btn
          flat
          label="Home"
          icon="fa-solid fa-home"
          @click="toggleLeftDrawer"
        />
        <q-btn
          flat
          label="Projects"
          icon="fa-solid fa-code"
          @click="toggleLeftDrawer"
        />
        <q-btn
          flat
          label="Resume"
          icon="fa-solid fa-file"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header> -->

    <q-page-container class="bg-grey-4">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
