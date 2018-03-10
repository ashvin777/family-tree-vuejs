class UserModel {
  constructor() {
    this.users = [];
    this.members = require('../data/all.json');
  }

  set(model) {
    this.users = model;
  }

  get() {
    return this.users;
  }

  getMemberByProperty(property, value) {
    return this.members.find(member => {
      return member[property] === value;
    });
  }

  getMembersByProperty(property, value) {
    return this.members.filter(member => {
      return member[property] === value;
    });
  }

  clear() {
    this.users = [];
  }
}

export default new UserModel();