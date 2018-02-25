<template>
  <div class="list-item">
    <span class="icon-star"></span>
    <div class="image">
      <img src="../../assets/me.jpg">
    </div>

    <div class="title">
      Ashvin suthar

      <div class="subtitle">
        ashvin.suthar777@gmail.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ['item']
};
</script>

<style scoped lang="scss">
@import "../../consts.scss";

.list-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;

  .icon-star{
    color: $light-gray;
  }

  .image {
    border-radius: 100%;
    display: inline-block;
    margin-left: 0.5rem;

    padding: 3px;
    height: 3rem;
    width: 3rem;
    min-width: 3rem;

    img {
      height: 100%;
      width: 100%;
      border-radius: 100%;
      box-shadow: 0 3px 10px $light-gray;
    }
  }

  .title {
    padding-left: 0.5rem;
    font-size: $font-large;

    .subtitle {
      color: $gray;
      font-size: $font-normal;
      font-weight: normal;
    }
  }

  &:nth-child(even){
    background: $lightest-gray;
  }
}
</style>
