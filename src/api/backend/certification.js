import session from './session';

export default {

  createCertification(user, username, country,category, avatar, status, cv_upload,education, certification, work_history,website) {
    return session.post('/skill/', { user, username ,country, category, avatar, status, cv_upload, education,certification, work_history, website });
  },
  getCertification() {
    return session.get('/skill/');
  },
  updateCertification(data) {
    return session.patch('/skill/', data);
  },
  deleteCertification(url) {
    return session.delete('/skill/', url);
  },

}