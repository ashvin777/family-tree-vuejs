<script src="./family-tree.js"></script>
<style scoped lang="scss">
.page {
  padding-top: 1.5rem;

  .tree-list-item {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .children{
    padding-top: 2rem;
    padding-left: 2rem;
  }
}
</style>

<template>
  <div class="page">

    <div class="tree-list-item">
      <TreeNode :member="user" :isSelf="true"></TreeNode>
      <TreeNode :member="spouse"></TreeNode>
    </div>

    <div class="children">
      <div class="tree-list-item" v-for="child in children" :key="child.id">
        <TreeNode :member="child"></TreeNode>
        <TreeNode :member="getSpouseOfChild(child)"></TreeNode>
      </div>
    </div>

  </div>
</template>