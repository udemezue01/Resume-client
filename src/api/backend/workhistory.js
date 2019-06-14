import session from './session';

export default {

  createWorkHistory(user, username, country,category, avatar, status, cv_upload,education, certification, work_history,website) {
    return session.post('/workhistory/', { user, username ,country, category, avatar, status, cv_upload, education,certification, work_history, website });
  },
  getWorkHistory() {
    return session.get('/workhistory/');
  },
  updateWorkHistory(data) {
    return session.patch('/workhistory/', data);
  },
  deleteWorkHistory(url) {
    return session.delete('/workhistory/', url);
  },

}