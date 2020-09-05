import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Flex, Image, Box, Text, Button } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/ui/index.scss"
import PostGrid from "../components/PostGrid"
import Post from "../components/Post"
import CardPostGrid from "../components/CardPostGrid"
import { generatePostJSON, mergeStyles } from "../utils/helpers"
import {
  trendingConfig,
  featuredConfig,
  lastFeaturedConfig,
} from "../utils/uiConfig"

const IndexPage = () => {
  const [postData, setPostData] = useState({
    trending: [],
    featured: [],
    lastpost: {},
    recent: [],
  })
  useEffect(() => {
    generatePostJSON().then(arr => {
      setPostData({
        recent: arr.slice(0, 9),
        featured: mergeStyles(arr.slice(4, 7), featuredConfig),
        lastpost: mergeStyles([arr[8]], lastFeaturedConfig),
        trending: mergeStyles(arr.slice(0, 5), trendingConfig),
      })
    })
  }, [])
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog">
        <main className="container">
          <section className="row">
            <h2>Featured Posts</h2>
            <section className="featured">
              {postData.featured.length > 0 && (
                <>
                  <PostGrid posts={postData.featured} column={2} />
                  <Post {...postData.lastpost[0]} />
                </>
              )}
            </section>
          </section>
          <section className="row">
            {postData.recent.length && (
              <CardPostGrid posts={postData.recent} column={3} />
            )}
          </section>
          <section className="row">
            <h2>Trending Posts</h2>
            {postData.trending.length > 0 && (
              <PostGrid posts={postData.trending} column={3} />
            )}
          </section>
        </main>
      </div>
    </Layout>
  )
}
export default IndexPage
