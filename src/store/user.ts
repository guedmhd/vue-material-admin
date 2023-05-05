import { defineStore } from 'pinia';
import { login } from '@/api/user';

export interface IUserState {
  token: string;
  expire_in: number;
  username: string;
  avatar: string;
  permissions: any[];
}
/** User Store */
export const useUserStore = defineStore('user', {
  // Default Config State
  state: () => ({
    token: '',
    expire_in: 0,
    username: '',
    avatar: '',
    permissions: [],
    roles: [
      { title: 'Admin', value: 'admin' },
      { title: 'Author', value: 'author' },
      { title: 'Editor', value: 'editor' },
      { title: 'Maintainer', value: 'maintainer' },
      { title: 'Subscriber', value: 'subscriber' }
    ],
    statusOptions: [
      { title: 'Pending', value: 'pending' },
      { title: 'Active', value: 'active' },
      { title: 'Inactive', value: 'inactive' }
    ]
  }),
  // Getters
  getters: {
    getRoles(state) {
      return state.roles;
    },
    getStatusOptions(state) {
      return state.statusOptions;
    }
  },
  // Actions
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    async login(params) {
      const { data } = await login(params);
      const { access_token } = data;
      this.setToken(access_token);
    }
  },
  // Data persistence destination
  persist: {
    key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE ?? 'vuetify',
    storage: window.sessionStorage
  }
});