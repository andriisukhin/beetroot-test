<template lang="pug">
  div
    <slot name="fetched">
      md-progress-spinner(md-mode="indeterminate")
    </slot>
</template>

<script>
export default {
  name: 'Loader'
}
</script>