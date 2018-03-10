<template>
  <div class="navbar">
    <header>
      <div class="image" :style="{ 'background-image': `url(${user.image})`}"></div>

      <div class="title">
        {{user.name}}
        <div class="subtitle">{{user.id}}</div>
      </div>

      <div class="right">
        <span class="icon-cog"></span>
      </div>
    </header>

    <div class="subheader">
      <router-link class="link" :to="PATH.ALL_MEMBERS" :class="{ active: $route.path === PATH.ALL_MEMBERS}">
        All members
      </router-link>
      <router-link class="link" :to="PATH.FAMILY_TREE" :class="{ active: $route.path === PATH.FAMILY_TREE}">
        Family tree
      </router-link>
      <router-link class="link" :to="PATH.FAVOURITE" :class="{ active: $route.path === PATH.FAVOURITE}">
        Favourite
      </router-link>
    </div>
  </div>
</template>

<script>
import PATH from '../../../router/path';

export default {
  name: 'Navbar',
  props: ['user'],

  created() {
    this.PATH = PATH;
  }
};
</script>

<style scoped lang="scss">
@import "../../../consts.scss";
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

    background-size: cover;
    background-color: $gray;

    box-shadow: unset;
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

  .icon-cog {
    font-size: 1rem;
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
    text-decoration: none;

    &.active {
      color: $white;
      font-weight: bold;

      &:before {
        content: "";
        position: absolute;
        top: calc(100% - 0.4rem);
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        height: 0.75rem;
        width: 0.75rem;
        background: $blue;
        z-index: 100;
      }
    }

    &:hover {
      color: $white;
    }
  }
}
</style>
