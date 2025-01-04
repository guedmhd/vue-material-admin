import { defineStore } from 'pinia';

export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    drawer: true
  }),
  getters: {
    getDrawer: (state) => state.drawer
  },
  actions: {
    setDrawer() {
      this.drawer = !this.drawer;
    }
  }
});
