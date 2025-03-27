const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export function getPosts() {
  return fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Fetch failed:', error.message);
      throw error;
    });
}
