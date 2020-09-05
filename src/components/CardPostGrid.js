import React from "react"
import Card from "./Card"

function CardPostGrid({ posts, column }) {
  return (
    <>
      <h2>Recent Post</h2>
      <section
        className="recent-posts"
        style={{
          gridTemplateColumns: `repeat(${column}, minmax(275px,1fr))`,
          marginBottom: "35px",
        }}
      >
        {posts.map((v, i) => (
          <Card key={i} {...v} />
        ))}
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></section>
    </>
  )
}

export default CardPostGrid
