import session from './session';

export default {

  createPost(user,content, media) {
    return session.post('/post/', { user, content ,media });
  },
  getPost(data) {
    return session.get('/post/', data);
  },
  updatePost(data) {
    return session.patch('/post/', data);
  },
  deletePost(url) {
    return session.delete('/post/', data);
  },
};