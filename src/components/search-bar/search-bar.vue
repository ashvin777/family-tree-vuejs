<template>
  <div class="search-bar">
    <span class="icon-search"></span>
    <input type='search' placeholder="Search by name...">
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style scoped lang="scss">
@import "../../consts.scss";

.search-bar{
  position: relative;

  .icon-search{
    position: absolute;
    z-index: 10;
    color: $gray;
    top: 48%;
    left: 1rem;
    transform: translateY(-50%);
  }

  input{
    color: $black;
    padding-left: 3rem;
  }
}
</style>
