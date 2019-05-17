import session from './session';

export default {
  login(email, password) {
    return session.post('/api/login/', { email, password });
  },
 
  // google auth
  googleLogin(){
    return session.post('api/google',)
  },

  // facebook auth

  facebookLogin(){
    return session.post('api/login/faceook/',)
  },


  logout() {
    return session.post('/api/logout/', {});
  },
  createAccount(full_name, email,account_type, password) {
    return session.post('/api/register/', {  full_name, email, account_type , password });
  },
  changeAccountPassword(password1, password2) {
    return session.post('/api/password/change/', { password1, password2 });
  },
  sendAccountPasswordResetEmail(email) {
    return session.post('/api/password/reset/', { email });
  },
  resetAccountPassword(uid, token, new_password1, new_password2) { 
    return session.post('/api/password/reset/confirm/', { uid, token, new_password1, new_password2 });
  },
  getAccountDetails(data) {
    return session.get('/accounts/', data);
  },
  updateAccountDetails(data) {
    return session.patch('/accounts/', data);
  },
  verifyAccountEmail(key) {
    return session.post('/registration/verify-email/', { key });
  },
};