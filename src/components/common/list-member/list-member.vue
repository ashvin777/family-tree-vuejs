<template>
  <div class="list-member">
    <span class="icon-star"></span>

    <div class="image" :style="{ 'background-image': `url(${getImagePath(member)})`}"></div>

    <div class="title">
      {{member.name}}

      <div class="subtitle">
        {{member.email}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListMember',
  props: ['member'],
  methods: {
    getImagePath(member) {
      try {
        return require('../../../assets/users/' + member.id + '.jpg');
      } catch (err) {
        return '';
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../consts.scss";

.list-member {
  display: flex;
  align-items: center;
  padding: 1.25rem 1rem;

  .icon-star {
    color: $light-gray;
    font-size: 1rem;
  }

  .image {
    margin: 0 1rem;
  }

  .title {
    font-size: $font-medium;
    font-weight: 500;

    .subtitle {
      color: $gray;
      font-size: $font-small;
      font-weight: 500;
      margin-top: 5px;
    }
  }

  &:nth-child(even) {
    background: $lightest-gray;
  }
}
</style>
