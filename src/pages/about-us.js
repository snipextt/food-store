import React from "react"
import { Link } from "gatsby"
import {
  Flex,
  Image,
  Box,
  Text,
  AspectRatioBox,
  Heading,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/ui/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Flex
      className="overlay cicular"
      position="relative"
      height={["50vh", "50vh", "90vh", "90vh"]}
    >
      <Image
        position="absolute"
        src={require("../assets/images/chefs.jpg")}
        height={["50vh", "50vh", "90vh", "90vh"]}
        minWidth="100%"
        objectFit="cover"
      />
      <Box
        zIndex="99"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        color="white"
        margin="auto"
        width="80%"
      >
        <Heading>About Us</Heading>
        <Text as="i" fontSize={20} textAlign="center">
          We love food as much as you do. Visit us today and let your hunger
          out! We make all the food you love and eat.
        </Text>
      </Box>
    </Flex>
    <Box marginTop="4em">
      <Flex
        width={["100%", "100%", "70%", "70%"]}
        marginX="auto"
        marginTop="1em"
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="space-between"
      >
        <Image
          src={require("../assets/images/noodles.jpg")}
          size={["100%", "100%", "50%"]}
          alt="noodles"
        />
        <Text
          maxWidth="40%"
          display="flex"
          justifyContent="center"
          textALign="center"
          flexDirection="column"
        >
          <Heading>About Us!</Heading> We love food as much as you do. Visit us
          today and let your hunger out! We make all the food you love and eat.
          Everything you might need to keep your tummy happy.
        </Text>
      </Flex>
    </Box>
    <Box width={["100%", "100%", "70%", "70%"]} marginX="auto" mt="4em">
      <Heading fontFamily="Saira">Contact Us</Heading>
      <Flex>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1599317863722!5m2!1sen!2sin"
          width="50%"
          height="500px"
          frameborder="0"
          style={{
            border: 0,
          }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </Flex>
    </Box>
  </Layout>
)

export default IndexPage
