import http from "../http-common"
class UserData {
  get(id) {
    return http.get(`/users/${id}`);
  }
  getAll() {
    return http.get(`/users`);
  }
  create(data) {
    return http.post("/users", data);
  }
  update(id, data) {
    return http.put(`/users/${id}`, data);
  }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
}
export default new UserData();