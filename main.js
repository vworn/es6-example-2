import { getPosts } from './api.js';

function displayPosts() {
  const container = document.getElementById('postContainer');

  getPosts()
    .then(posts => {
      posts.slice(0, 5).forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        container.appendChild(div);
      });
    })
    .catch(err => {
      container.innerHTML = `<p style="color:red;">Failed to load posts: ${err.message}</p>`;
    });
}

displayPosts();
