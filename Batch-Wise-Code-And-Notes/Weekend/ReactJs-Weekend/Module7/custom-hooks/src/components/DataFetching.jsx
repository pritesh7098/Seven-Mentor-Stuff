import React from "react";
import useFetch from "../hooks/useFetch";

function DataFetching() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      {data}
    </div>
  );
}

export default DataFetching;
