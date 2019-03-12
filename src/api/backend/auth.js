import session from './session';

export default {
  login(email, password) {
    return session.post('/api/login/', { email, password });
  },
  logout() {
    return session.post('/api/logout/', {});
  },
  createAccount(full_name, email, password) {
    return session.post('/accounts/api/register', { email, full_name , password });
  },
  changeAccountPassword(password1, password2) {
    return session.post('/api/password/change/', { password1, password2 });
  },
  sendAccountPasswordResetEmail(email) {
    return session.post('/api/password/reset/', { email });
  },
  resetAccountPassword(uid, token, new_password1, new_password2) { // eslint-disable-line camelcase
    return session.post('/api/password/reset/confirm/', { uid, token, new_password1, new_password2 });
  },
  getAccountDetails() {
    return session.get('/accounts/');
  },
  updateAccountDetails(data) {
    return session.patch('/accounts/', data);
  },
  verifyAccountEmail(key) {
    return session.post('/registration/verify-email/', { key });
  },
};