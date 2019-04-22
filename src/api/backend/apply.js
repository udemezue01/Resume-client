import session from './session';

export default {

  createApplication(full_name, email, password) {
    return session.post('account/registration/', { user, content ,media });
  },
  getApplication(data) {
    return session.get('/apply/', data);
  },
  updateApplication(data) {
    return session.patch('/apply/', data);
  },
  deleteVacancy(url) {
    return session.delete('/apply/', data);
  },
};