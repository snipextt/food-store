import React from "react"
import { Flex, Image, Box, useToast } from "@chakra-ui/core"

function FoodCards({ index }) {
  const toast = useToast()
  const debounceFn = (fn, delay) => {
    let timer
    return function (..._args) {
      clearTimeout(timer)
      timer = setTimeout(fn, delay)
    }
  }
  return (
    <Box maxW="30%" paddingY="2em" marginRight="4em">
      <Flex direction="column" backgroundColor="#FB9C58" rounded="10px">
        <Image
          src={require(`../assets/images/${index}.jpg`)}
          maxHeight="240px"
          width="400px"
          objectFit="cover"
          rounded="10px"
          onClick={debounceFn(
            () =>
              toast({
                title: "Order Placed",
                description: "You've place your order but wait, you haven't",
                status: "success",
                duration: 5000,
                isClosable: true,
              }),
            800
          )}
        />
      </Flex>
    </Box>
  )
}

export default FoodCards
