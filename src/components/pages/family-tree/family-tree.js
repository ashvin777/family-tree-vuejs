import TreeNode from './tree-node/tree-node.vue';
import UserModel from '../../../model/user';

export default {
  name: 'FamilyTree',

  components: {
    TreeNode
  },

  created() {
    this.user = UserModel.get();
    this.spouse = UserModel.getMemberByProperty('spouseId', this.user.id);

    if (this.user.gender === 'male') {
      this.children = UserModel.getMembersByProperty('fatherId', this.user.id);
    } else {
      this.children = UserModel.getMembersByProperty('motherId', this.user.id);
    }
  },

  methods: {
    getSpouseOfChild(child) {
      return UserModel.getMemberByProperty('spouseId', child.id);
    }
  }

}
