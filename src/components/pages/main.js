import Navbar from '../navbar/navbar.vue';
import SearchBar from '../search-bar/search-bar.vue';
import ListView from '../list-view/list-view.vue';

export default {
  name: 'MainPage',
  components: {
    Navbar,
    SearchBar,
    ListView
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
