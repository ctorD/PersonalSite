<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Portfolio </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="fa-solid fa-code" />
          </q-item-section>

          <q-item-section>Projects</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="fa-regular fa-file" />
          </q-item-section>

          <q-item-section>Resume</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
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
