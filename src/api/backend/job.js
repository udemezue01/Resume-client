import session from './session';

export default {

  createJob(position, description, tags, image, location) {
    return session.post('jobs/', { position, description, tags, image, location });
  },
  getJob() {
    return session.get('/job/', data);
  },
  updateJob(data) {
    return session.patch('/job/', data);
  },
  deleteJob(url) {
    return session.delete('/job/', data);
  },
};