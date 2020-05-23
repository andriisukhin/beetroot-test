import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const url = 'https://jsonplaceholder.typicode.com/';

const state = {
  users: {
    data: [],
    fetched: false,
  },
  posts: {
    data: [],
    fetched: false
  },
}

const actions = {
  async getUsers({ commit }) {
    commit('setPendingStatus', 'users');
    const data = await axios.get(`${url}users`);
    console.log(data.data);
    commit('setUsers', data.data);
  },
  async getPosts({ commit }) {
    commit('setPendingStatus', 'posts');
    const data = await axios.get(`${url}posts`);
    console.log(data);
    commit('setPosts', data.data);
  }
}

const mutations = {
  setPendingStatus(state, val) {
    state[val].fetched = false;
  },
  setUsers(state, payload) {
    state.users.data = payload;
    state.users.fetched = true;
  },
  setPosts(state, payload) {
    state.posts.data = payload.map((item, i) => {
      const res = {...item, page: Math.floor(i / 10) + 1}
      return res;
    });
    state.posts.fetched = true;
  }
}

const getters = {
  filteredUsers: state => val => {
    return val === ''
      ? state.users.data
      : state.users.data.filter(u => u.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  },
  postsOnPage: state => val => {
    return state.posts.data.filter(p => p.page === +val);
  },
  getUserName: state => id => {
    console.log(state.users.data.find(user => user.id === id));
    return state.users.data.find(user => user.id === id);
  }
}



export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})