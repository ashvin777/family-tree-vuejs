<template>
  <div class="search-bar">
    <span class="icon-search"></span>
    <input type='search' placeholder="Search by name..." v-model="model" :keyup="$emit('onKeyup', model)">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data(){
    return {
      model: ''
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../consts.scss";

.search-bar{
  position: relative;

  .icon-search{
    position: absolute;
    z-index: 10;
    color: $gray;
    top: 48%;
    left: 1rem;
    transform: translateY(-50%);
    font-size: 1.25rem;
  }

  input{
    color: $black;
    padding-left: 3.25rem;
  }
}
</style>
