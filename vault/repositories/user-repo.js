import userData from "../data/user-data.js";
class UserRepo {
  findByUsername(username) {
    return userData.find((user) => user.username === username);
  }

  exists(username) {
    return this.findByUsername(username) !== null;
  }

  add(user) {
    userData.push(user);
  }
}

export default UserRepo;
