export async function getWords() {
  return fetch('http://localhost:3001')
  .then(response => {
    return response.json();
  })
  .then(data => {
    return data;
  });
}