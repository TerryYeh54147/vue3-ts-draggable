<template>
  <div id="drawer-component">
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <q-item-section
          v-for="(item, i) in navDrawer"
          :key="`navDrawer${i}${item.title}`"
        />
      </q-list>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Drawer } from 'components/models';

const navDrawer: Array<Drawer> = [
  {
    title: '首頁',
    icon: 'home',
    path: '/',
  },
  {
    title: '待辦事項',
    icon: 'note',
    path: '/todo',
  },
];
const leftDrawerOpen = ref(false);
</script>
