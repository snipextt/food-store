import React from "react"
import { uiColor } from "../utils/uiConfig"
import { capitailize } from "../utils/helpers"

function Post({ ...post }) {
  return (
    <a
      className="post overlay"
      style={
        // eslint-disable-next-line no-restricted-globals
        window.innerWidth > 900
          ? {
              backgroundImage: `url("${require(`../assets/images/${post.image}`)}")`,
              ...post.style,
            }
          : {
              backgroundImage: `url("${require(`../assets/images/${post.image}`)}")`,
            }
      }
      href={post.link}
    >
      <div className="post-description">
        <section className="tags-container">
          {post.tags.map((v, i) => (
            <span
              className="tag"
              key={i}
              style={{ backgroundColor: uiColor[v] }}
            >
              {v}
            </span>
          ))}
        </section>
        <section>
          <h4 className="post-title">{capitailize(post.title)}</h4>
          <span className="post-date"> {post.date}</span>
        </section>
      </div>
    </a>
  )
}

export default Post
