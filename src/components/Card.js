import React from "react"
import { uiColor } from "../utils/uiConfig"
import { capitailize } from "../utils/helpers"

function Card({ ...post }) {
  return (
    <section className="post-card">
      <img
        alt="Post"
        className="post-image overlay"
        src={require(`../assets/images/${post.image}`)}
      />
      <section className="tags-container">
        {post.tags.map((v, i) => (
          <span className="tag" key={i} style={{ backgroundColor: uiColor[v] }}>
            {v}
          </span>
        ))}
      </section>
      <section className="post-description">
        <h4 className="post-title">{capitailize(post.title)}</h4>
        <p className="post-details">
          By <span className="author">{capitailize(post.author)}</span>,{" "}
          {post.date}
        </p>
        <p className="tag-content">{post.body}</p>
      </section>
    </section>
  )
}

export default Card
