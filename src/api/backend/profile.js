import session from './session';

export default {

  createProfile(user, username, country,category, avatar, status, cv_upload,education, certification, work_history,website) {
    return session.post('/profile/', { user, username ,country, category, avatar, status, cv_upload, education,certification, work_history, website });
  },
  getProfile(data) {
    return session.get('/profile/', data);
  },
  updateProfile(data) {
    return session.patch('/profile/', data);
  },
  deleteProfile(url) {
    return session.delete('/profile/:username/', url);
  },
  createEducation (school, year_started, year_ended){
    return session.post('/profile/p/education/', {user, school, year_started, year_ended})
  },

  createCertification (user, organization, year_obtained){
    return session.post('/profile/p/certification', {user, organization, year_obtained})
  },
  createWorkHistory (user, company, year_started, year_ended){
    return session.post ('/profile/p/workhistory', {user, company, year_started, year_ended})
  }
};