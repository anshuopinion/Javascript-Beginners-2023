// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// async and await

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    return new Error(error);
  }
}

getPosts();
