import React, { useState } from "react";
import { Text } from "@chakra-ui/react";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", checkScrollTop);

  return (
    <Text
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
      fontSize="8xl"
      position="fixed"
      w="100%"
      bottom="70px"
      alignItems="center"
      height="20px"
      justifyContent="flex-end"
      zIndex="1"
      cursor="pointer"
      opacity="0.7"
      color="#A695A5"
      right="40px"
    >
      ↑
    </Text>
  );
};

export default ScrollArrow;
