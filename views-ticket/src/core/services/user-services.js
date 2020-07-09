import http from '../http/common-http';

 class UserService {
    getAll(){
        return http.get('/users');
    }
    get(id) {
        return http.get(`/users/${id}`);
      }
    
}
export default new UserService();
//module.exports = TickectService