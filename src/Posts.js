import axios from "axios";
import React, { useState, useEffect } from "react";

const hdrs = {
  "Content-type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("user_token"),
};

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await axios.get("http://localhost:8000/api/posts", {
          headers: hdrs,
        });
        setPosts(response.data.posts);
        console.log(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="posts-container">
      <h2>All Posts</h2>
      {posts.map((post) => {
        return (
          <div className="post-card" key={post.title}>
            <h2 className="post-title">{post.content}</h2>
            <p className="post-body">{post.category}</p>
          </div>
        );
      })}
    </div>
  );
}
