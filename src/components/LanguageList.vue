<template>
  <div class="column content-center items-center justify-start">
    <q-btn
      class="full-width"
      :disable="props.lang == undefined"
      :label="$q.screen.gt.sm ? 'All' : ''"
      icon="all_inclusive"
      :color="props.lang == undefined ? 'primary' : 'black'"
      flat
      size="md"
      @click="onSelect(undefined)"
    ></q-btn>
    <q-btn
      class="full-width"
      :color="props.lang == 'TS' ? 'primary' : 'black'"
      icon="mdi-language-typescript"
      :label="$q.screen.gt.xs ? 'TypeScript' : ''"
      flat
      size="md"
      @click="onSelect('TS')"
    />
    <q-btn
      class="full-width"
      :color="props.lang == 'VUE' ? 'primary' : 'black'"
      icon="mdi-vuejs"
      :label="$q.screen.gt.xs ? 'Vue' : ''"
      flat
      size="md"
      @click="onSelect('VUE')"
    />
    <q-btn
      class="full-width"
      :color="props.lang == 'CSHARP' ? 'primary' : 'black'"
      icon="mdi-language-csharp"
      :label="$q.screen.gt.xs ? 'CSharp' : ''"
      flat
      size="md"
      @click="onSelect('CSHARP')"
    />
  </div>
</template>

<script lang="ts" setup>
import { Language } from 'src/logic/Language';

const emits = defineEmits<{ (e: 'select', id: Language | undefined): void }>();
const props = defineProps<{
  lang: Language | undefined;
}>();
const onSelect = (type: Language | undefined) => {
  emits('select', type);
};
</script>
