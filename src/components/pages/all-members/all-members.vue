<script src="./all-members.js"></script>

<style scoped lang='scss'>
@import '../../../consts.scss';

.list-view {
  flex: 1;
  overflow: auto;
}
</style>

<template>
  <div class="page">
    <SearchBar @onKeyup="onSearchTextChanges"></SearchBar>
    <div class='list-view'>
      <ListMember v-for='(member, index) in membersComputed' :key='index' :member='member'></ListMember>
    </div>
  </div>
</template>
