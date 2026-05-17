import React, { useEffect, useState } from "react";

function App() {
  // STEP1 - defining states

  const [post, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step2 - useEffect with fetch

  useEffect(() => {
    fetch("https://api.github.com/users/pritesh709")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // step 3

  if (loading) return <p>Loading....</p>;

  if (error) return <h3>error : {error} </h3>;

  // step 4 - showcasing on UI

  return (
    <div>
      <h1>Data fetching in REACTJS</h1>
      <h2>Name : {post.login}</h2>
      <h3>Email : {post.email}</h3>
      <h3> Following : {post.following}</h3>
    </div>
  );
}

export default App;
