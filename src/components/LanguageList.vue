<template>
  <div class="column content-center items-center justify-start">
    <div class="row items-center justify-center full-width">
      <q-btn
        class="full-width"
        :disable="props.lang == undefined"
        label="All"
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
        label="TypeScript"
        flat
        size="md"
        @click="onSelect('TS')"
      />
      <q-btn
        class="full-width"
        :color="props.lang == 'VUE' ? 'primary' : 'black'"
        icon="mdi-vuejs"
        label="Vue"
        flat
        size="md"
        @click="onSelect('VUE')"
      />
      <q-btn
        class="full-width"
        :color="props.lang == 'CSHARP' ? 'primary' : 'black'"
        icon="mdi-language-csharp"
        label="CSharp"
        flat
        size="md"
        @click="onSelect('CSHARP')"
      />
    </div>
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
