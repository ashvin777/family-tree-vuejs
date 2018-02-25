<template>
  <div class="list-view">
    <ListItem v-for="item in items" :key="item.id" item="item"></ListItem>
  </div>
</template>

<script>
import ListItem from "../list-item/list-item.vue";

export default {
  name: "ListView",
  components: {
    ListItem
  },
  data: () => {
    return {
      items: [
        {
          id: 1,
          name: "Ashvin suthar"
        },
        {
          id: 2,
          name: "Anita suthar"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../consts.scss";

.list-view {
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 3px 10px $light-gray;
}
</style>
