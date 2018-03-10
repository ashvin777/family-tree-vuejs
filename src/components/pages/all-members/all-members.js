import SearchBar from '../../common/search-bar/search-bar.vue';
import ListMember from '../../common/list-member/list-member.vue';

import GoogleService from '../../../service/google';

export default {
  components: {
    ListMember,
    SearchBar
  },

  data() {
    return {
      members: [],
      search: ''
    };
  },

  computed: {
    membersComputed() {
      if (!this.search) {
        return this.members;
      }
      return this.members.filter(member => {
        return member.name.search(this.search) !== -1;
      });
    }
  },

  mounted() {
    GoogleService
      .getContacts()
      .then(res => res.json())
      .then(contacts => {
        contacts.feed.entry.forEach((entry, index) => {
          this.members.push({
            id: entry.gd$email && entry.gd$email.length > 0 ? entry.gd$email[0].address : '',
            name: entry.title.$t,
            email: entry.gd$email && entry.gd$email.length > 0 ? entry.gd$email[0].address : ''
          });
        });
      });
  },

  methods: {
    onSearchTextChanges(searchText) {
      this.search = searchText;
    }
  }
}
