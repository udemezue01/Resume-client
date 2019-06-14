import session from './session';

export default {

  createProfile(user, username, country,category, avatar, status, cv_upload,education, certification, work_history,website) {
    return session.post('/profile/', { user, username ,country, category, avatar, status, cv_upload, education,certification, work_history, website });
  },
  getProfile() {
    return session.get('/profile/user/');
  },
  updateProfile(data) {
    return session.patch('/profile/', data);
  },
  deleteProfile(url) {
    return session.delete('/profile/', url);
  },

}