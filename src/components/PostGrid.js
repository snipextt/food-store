import React from "react"
import Post from "./Post"

function PostGrid({ posts, column }) {
  return (
    <section
      className="posts-grid"
      style={{
        gridTemplateColumns: `repeat(${column}, minmax(275px,1fr))`,
      }}
    >
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </section>
  )
}

export default PostGrid
