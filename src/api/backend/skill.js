import session from './session';

export default {

  createSkill(user, username, country,category, avatar, status, cv_upload,education, certification, work_history,website) {
    return session.post('/skill/', { user, username ,country, category, avatar, status, cv_upload, education,certification, work_history, website });
  },
  getSkill() {
    return session.get('/skill/');
  },
  updateSKill(data) {
    return session.patch('/skill/', data);
  },
  deleteSkill(url) {
    return session.delete('/skill/', url);
  },

}