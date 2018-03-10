<script src='./login.js'></script>

<style scoped lang="scss">
.page{
  padding: 1rem;
  height: auto;
  padding-top: 3rem;

  .title{
    font-weight: 500;
    padding: 2rem 0;
    font-size: 1.5rem;
  }

  input{
    margin-top: 1rem;
  }

  button{
    display: block;
    width: 100%;
  }
}
</style>

<template>
  <div class="page">
    <form v-on:submit="submit()">
      <div class="title">Login</div>
      <button type="submit">Login with Google</button>
    </form>
  </div>
</template>


