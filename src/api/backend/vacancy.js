import session from './session';

export default {

  createVacancy(full_name, email, password) {
    return session.post('account/registration/', { user, content ,media });
  },
  getVacancy() {
    return session.get('/post/', data);
  },
  updatevacancy(data) {
    return session.patch('/post/', data);
  },
  deleteVacancy(url) {
    return session.delete('/post/', data);
  },
};