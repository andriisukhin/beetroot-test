<template lang="pug">
  md-app
    md-app-toolbar.md-dense.md-primary
      .md-toolbar-row.nav-row.md-dense
        md-tabs.md-primary(md-sync-route)
          md-tab.md-primary(md-label="Home" to="/" exact)
          md-tab.md-primary(md-label="Users" to="/users")
          md-tab.md-primary(md-label="Posts" to="/posts/1")
    md-app-content.content
      router-view
</template>

<script>
export default {
  name: 'Main',
}
</script>
<style lang="scss" scoped>
  .nav-row {
    align-items: flex-end;
  }
  /deep/ .md-app-content {
    min-height: calc(100vh - 64px)!important;
  }
</style>