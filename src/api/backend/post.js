import session from './session';

export default {

  createPost(full_name, email, password) {
    return session.post('account/registration/', { user, content ,media });
  },
  getPost() {
    return session.get('/post/', data);
  },
  updatePost(data) {
    return session.patch('/post/', data);
  },
  deletePost(url) {
    return session.delete('/post/', data);
  },
};