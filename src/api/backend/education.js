import session from './session';

export default {

  createEducation(user, username, country,category, avatar, status, cv_upload,education, certification, work_history,website) {
    return session.post('/education/', { user, username ,country, category, avatar, status, cv_upload, education,certification, work_history, website });
  },

  getEducation() {
    return session.get('/eduction/');
  },

  updateEducation(data) {
    return session.patch('/education/', data);
  },
  
  deleteEducation(url) {
    return session.delete('/education/', url);

  },

}