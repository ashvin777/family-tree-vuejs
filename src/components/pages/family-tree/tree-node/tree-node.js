export default {
  props: ['member', 'isSelf'],

  methods: {
    getImagePath(member) {
      try {
        return require('../../../../assets/users/' + member.id + '.jpg');
      } catch (err) {
        return '';
      }
    }
  }
}