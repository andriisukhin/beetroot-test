<template lang="pug">
  div
    h1 Users
    loader
      template(v-slot:fetched v-if="users.fetched")
        md-field
          label Search Users
          md-input(v-model="search")
        md-list
          md-list-item(v-for="(user, u) in filteredUsers(search)" :key="`user${u}`")
            div.justify-between
              div Name:
              div {{ user.name }}
            div.justify-between
              div Email:
              div {{ user.email }}
            div.justify-between
              div Phone:
              div {{ user.phone }}
            div.justify-between
              div Name:
              div {{ user.name }}
            div.justify-between
              div Website:
              div {{ user.website }}
            div.justify-between
              div Company:
              div {{ user.company.name }}
            div.justify-between
              div Address:
              div {{ user.address.city }}, {{ user.address.street }}, {{ user.address.suite }}
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import Loader from '../components/Loader.vue';

export default {
  name: 'Users',
  data() {
    return {
      search: '',
    }
  },
  components: {
    'loader': Loader,
  },
  computed: {
    ...mapState([
      'users',
    ]),
    ...mapGetters([
      'filteredUsers',
    ]),
  },
  methods: {
    ...mapActions([
      'getUsers',
    ]),
  },
  created() {
    !this.users.data.length && this.getUsers();
  }
}
</script>

<style lang="scss" scoped>
  .md-list-item {
    margin-top: 10px;
    margin-top: 10px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
    padding: 10px;
  }
  /deep/ .md-list-item-content {
    display: block!important;
  }
  .justify-between {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid lightgrey;
    &:last-child {
      border-bottom: none;
    }
  }
</style>