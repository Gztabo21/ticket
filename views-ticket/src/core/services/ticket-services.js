import http from '../http/common-http';

 class TickectService{
    getAll(){
        return http.get('/tickets');
    }
    get(id) {
        return http.get(`/tickets/${id}`);
      }
    getTicketAssigned(idUser) {
        return http.get(`/tickets/assigned/${idUser}`);
      }
    add(data) {
        return http.post("/tickets", data);
      }
    update(id, data) {
        return http.put(`/tickets/${id}`, data);
      }
    delete(id) {
        return http.delete(`/tickets/${id}`);
      }
}
export default new TickectService ();
//module.exports = TickectService