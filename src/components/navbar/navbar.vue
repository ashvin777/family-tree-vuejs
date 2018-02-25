<template>
  <div class="navbar">
    <header>
      <div class="image">
        <img src="../../assets/me.jpg">
      </div>
  
      <div class="title">
        Ashvin suthar
        <div class="subtitle">ashvin.suthar777@gmail.com</div>
      </div>
  
      <div class="right">
        <span class="icon-cog"></span>
      </div>
    </header>
  
    <div class="subheader">
      <div class="link active">
        All members
      </div>
      <div class="link">
        Family tree
      </div>
      <div class="link">
        Favourite
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  };
</script>

<style scoped lang="scss">
  @import "../../consts.scss";
  header {
    background: $light-blue;
    display: flex;
    color: $white;
    align-items: center;
    padding: 1rem 1rem;
    position: relative;

    .image {
      border-radius: 100%;
      display: inline-block;
      padding: 3px;
      height: 3rem;
      width: 3rem;
      min-width: 3rem;
      border: 2px solid $white;
      img {
        height: 100%;
        width: 100%;
        border-radius: 100%;
      }
    }
    .title {
      flex: 1;
      font-weight: bold;
      padding: 0 1rem;
      font-size: $font-largest;
      .subtitle {
        color: $light-gray;
        font-size: $font-normal;
        font-weight: normal;
      }
    }
  }
  
  .subheader {
    background: $light-blue;
    display: flex;
    background: $blue;
    .link {
      color: $light-gray;
      font-size: $font-normal;
      font-weight: normal;
      padding: 0.75rem 1rem;
      margin-right: 0px;
      position: relative;
      &.active {
        color: $white;
        font-weight: bold;
        &:before {
          content: '';
          position: absolute;
          top: calc( 100% - 0.4rem);
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          height: 0.75rem;
          width: 0.75rem;
          background: $blue;
          z-index: 100;
        }
      }
    }
  }
</style>
