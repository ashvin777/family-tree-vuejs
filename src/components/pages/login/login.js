import GoogleService from '../../../service/google';
import PATH from '../../../router/path';
export default {

  methods: {
    submit() {
      GoogleService
        .login()
        .then(() => {
          this.$router.push(PATH.ALL_MEMBERS);
        });
    }
  }

}
