import Navbar from '../common/navbar/navbar.vue';
import UserModel from '../../model/user';
import GoogleService from '../../service/google';

export default {
  name: 'MainPage',

  components: {
    Navbar
  },

  data() {
    return {
      user: {}
    }
  },

  created() {
    GoogleService
      .getProfile()
      .then(res => res.json())
      .then(profile => {
        this.user = {
          id: profile.emails[0] ? profile.emails[0].value : '',
          name: profile.displayName,
          gender: profile.gender,
          image: profile.image ? profile.image.url : ''
        };
        UserModel.set(this.user);
      })
  }
}
