// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "GET",
// })
//   .then((response) => {
//     console.log({ response });

//     return response.json();
//   })
//   .then((json) => console.log(json));

(async () => {
  // How to perform simple GET request
  const fetchPostById = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  // const post = await fetchPostById(1);

  // For Creating New Post -> POST

  const newPost = {
    userId: 555,
    // id: 555,
    title: "Do Some Coding",
  };

  const createPost = async (post) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  // const createdPost = await createPost(newPost);

  // console.log(createdPost);

  // PUT Request for update

  const updatePost = async (id, post) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // const updatedPost = await updatePost(1, {
  //   userId: 555,

  //   title: "Do Some Coding",
  //   body: "this is updated post",
  // });

  // console.log(updatedPost);

  const deletePost = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deletedPost = await deletePost(1);
  console.log(deletedPost);
})();
