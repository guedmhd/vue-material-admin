<script setup lang="ts">
import NotificationDropdown from './dropdown/NotificationDropdown.vue';
import ProfileDropdown from './dropdown/ProfileDropdown.vue';
import { useDrawerStore } from '@/store';

// dropdown imports
//const sDrawer = ref(false);
const useDrawer = useDrawerStore();
</script>

<template>
  <!------Header-------->
  <VAppBar :elevation="10">
    <VAppBarNavIcon @click="useDrawer.setDrawer" />
    <VSpacer />
    <!-- Notification -->
    <NotificationDropdown />
    <ProfileDropdown />
  </VAppBar>
</template>
