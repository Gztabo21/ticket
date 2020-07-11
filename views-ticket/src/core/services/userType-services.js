import http from '../http/common-http';

 class UserTypeService {
    getAll(){
        return http.get('/usertypes');
    }
    get(id) {
        return http.get(`/usertypes/${id}`);
      }
    
}
export default new UserTypeService();
//module.exports = TickectService