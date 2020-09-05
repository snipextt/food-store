import React from "react"
import { Flex, Image, Box, Text, Button } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/ui/index.scss"
import Seperator from "../components/Seperator"
import FoodCards from "../components/FoodCards"

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
          rounded="md"
          mx="auto"
          marginTop={[["25px", "25px", "45px"]]}
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
    <Flex
      direction="column"
      width={["100%", "100%", "70%", "66%"]}
      marginX="auto"
      marginY="6em"
    >
      <Flex
        align="center"
        justify="space-between"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Text fontSize={22} fontFamily="Saira">
          {new Date().toLocaleString("default", { weekday: "long" })}&apos;s
          Special Menu
          <Seperator color="#FB9C58" width={125} />
        </Text>
        <Text
          width={["80%", "80%", "50%", "50%"]}
          marginTop={["1em", "1.3em", 0, 0]}
          fontSize={17}
        >
          A special menu for everyday and a unique day for every menu. We love
          food as much as you do. Visit us today and let your hunger out! We
          make all the food you love and eat.
        </Text>
      </Flex>
      <Flex>
        {[1, 2, 3].map((v, i) => (
          <FoodCards key={i} index={v} />
        ))}
      </Flex>
    </Flex>
    {/* <Flex
      direction="column"
      width={["100%", "100%", "70%", "66%"]}
      marginX="auto"
      marginY="2em"
    >
      <Text fontSize={26} fontFamily="Saira">
        Download Our Apps
      </Text>
    </Flex> */}
  </Layout>
)

export default IndexPage
