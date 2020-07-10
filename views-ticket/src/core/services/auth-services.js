import http from '../http/common-http';

 class AuthService{
   auth(data){
    return http.post("/signin", data); 
   }
   register(data){
    return http.post("/register", data);
   }
    
    
}
export default  new AuthService ();