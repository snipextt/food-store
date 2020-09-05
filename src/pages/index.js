import React from "react"
import { Link } from "gatsby"
import { Flex, Image, Box, Text, Button } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/ui/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      className="hero"
      marginTop={["1.5em", "1.5em", "4em", "4em"]}
      mx="auto"
      height={["auto", "auto", "80vh", "45vh"]}
      direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
      padding="20px"
      align="center"
      justify={["flex-end", "flex-end", "flex-end", "center"]}
    >
      <Box
        maxW={["100%", "78%", "80%", "28%"]}
        className="stroke"
        minH={["30%", "40%", "30%", "60%"]}
        paddingLeft="12px"
        marginRight={[0, "25px"]}
      >
        <Text fontSize={26} marginBottom="22px" fontWeight="400">
          &nbsp;
        </Text>
        <Text fontSize="lg" FontFamily="Railway" as="i" color="white">
          &nbsp;&nbsp;&nbsp;&nbsp;We love food as much as you do. Visit us today
          and let your hunger out! We make all the food you love and eat.
          Everything you might need to keep your tummy happy.
        </Text>
        <Button
          display="block"
          variantColor="orange"
          marginTop={[["25px", "25px", "22px"]]}
        >
          Place an order now!
        </Button>
      </Box>
      <Image
        src={require("../assets/images/banner.jpg")}
        height={["40%", "50%", "70%", "100%"]}
        rounded="15px"
        boxShadow={["8px -8px #f7d3b2", "15px -14px #f7d3b2"]}
      />
    </Flex>
    <Flex direction="column"></Flex>
  </Layout>
)

export default IndexPage
