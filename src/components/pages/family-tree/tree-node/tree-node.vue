<script src="./tree-node.js"></script>

<style scoped lang="scss">
@import "../../../../consts.scss";

.tree-node{
  vertical-align: middle;
  margin: 1rem 0;
  max-width: 50%;
  width: 46%;
  display: flex;
  align-items: center;
  background: $lightest-gray;
  border-radius: 28px;

  .text{
    padding: 0 10px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    .relation{
      font-size: $font-smallest;
      color: $gray;
    }
  }

  &.self{
    background: $light-blue;
    color: $white;

    .image{
      box-shadow: unset;
    }
  }
}
</style>

<template>
  <div class="tree-node" :class="{ self: isSelf}">
    <div class="image" :style="{ 'background-image': `url(${getImagePath(member)})`}"></div>
    <div class="text">
      {{member.name}}
      <div class="relation">Relation</div>
    </div>
  </div>

</template>
