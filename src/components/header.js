import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef } from "react"
import { Box } from "@chakra-ui/core"
import "../assets/ui/index.scss"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/core"

const Header = ({ siteTitle }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = useRef()
  return (
    <header className="navbar">
      <section className="logo">
        <img src={require("../assets/images/logo.png")} alt="logo" />{" "}
        {siteTitle}
      </section>
      <Box className="nav-links">
        <Breadcrumb separator=" " spacing="0.8em">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/pets">Find Pets</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/adopt">Adopt</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/orgnizations">Orgnizations</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box className="ham">
        <Icon ref={btnRef} m={0} h="20px" name="drag-handle" onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              display="flex"
              justifyContent="space-around"
              alignItems="flex-end"
              fontSize="18px"
            >
              <Link to="/">
                <section
                  className="logo"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <img src={require("../assets/images/logo.png")} alt="logo" />{" "}
                  {siteTitle}
                </section>
              </Link>
            </DrawerHeader>
            <DrawerBody
              marginBottom="20px"
              display="flex"
              justifyContent="space-around"
              fontSize="18px"
              fontWeight="400"
            >
              <Link to="/pets">Find Pets</Link>
              <Link to="/pets">Adopt</Link>
              <Link to="/orgnizations">Orgnizations</Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
