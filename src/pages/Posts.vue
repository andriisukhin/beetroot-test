<template lang="pug">
  div
    h1 Posts
    loader
      template(v-slot:fetched v-if="postsOnPage($route.params.page).length && this.users.data.length")
        md-list
          md-list-item(v-for="(post, p) in postsOnPage($route.params.page)" :key="`post${p}`")
            div.post
              h3 {{ post.title }}
              p {{ post.body }}
              .flex-end
                div {{ getUserName(post.userId) ? getUserName(post.userId).name : 'AAA' }}
        div.nav
          router-link.nav-item(v-for="pg in pages" :key="`page${pg}`" :to="`/posts/${pg}`") {{ pg }}
        
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import Loader from '../components/Loader.vue';

export default {
  name: 'Posts',
  components: {
    'loader': Loader,
  },
  computed: {
    ...mapState([
      'posts',
      'users',
    ]),
    ...mapGetters([
      'postsOnPage',
      'getUserName'
    ]),
    pages() {
      return Math.ceil(this.posts.data.length / 10);
    }
  },
  methods: {
    ...mapActions([
      'getPosts',
      'getUsers'
    ])
  },
  created() {
    !this.posts.data.length && this.getPosts();
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
.md-list-item-content {
  display: block!important;
}
.post {
  width: 100%;
  white-space: normal!important;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.nav {
  margin: 20px 0;
}
.nav-item {
  margin: 0 10px;
}

/deep/ .router-link-exact-active {
  color: darkblue!important;
}

</style>