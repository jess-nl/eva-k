import Link from "next/link";
import urlFor from "../hooks/image";
import handleClickScroll from "@/hooks/handleClickScroll";
import {
  Text,
  Flex,
  Box,
  Spacer,
  VStack,
  AspectRatio,
  Stack,
} from "@chakra-ui/react";

const Header = ({ header }: any) => {
  const { title, mainImage, vimeoUrl } = header[0];
  const splittedTitle = title.split(" ");

  return (
    <Stack display="block" h="900px">
      <Stack position="absolute" w="100%">
        <Flex p="14">
          <Box>
            {splittedTitle.map((titlePiece: any, id: any) => (
              <Text fontSize="110px" lineHeight="110%" key={id}>
                {titlePiece}
                <br />
              </Text>
            ))}
          </Box>
          <Spacer />
          <VStack textAlign="right" spacing="100px">
            <Box p="4" w="360px">
              <Text color="#80687F" fontSize="3xl" lineHeight="80%">
                <Link href="/about">About Me</Link>
              </Text>
              <Text color="#CFC500" fontSize="2xl">
                fr | en
              </Text>
            </Box>
            <Box p="4" w="360px">
              <Text color="#80687F" fontSize="4xl" cursor="pointer">
                <Link href="/#biography" passHref scroll={false}>
                  Biography
                </Link>
              </Text>
              <Text color="#80687F" fontSize="4xl" cursor="pointer">
                <Link href="/#works" passHref scroll={false}>
                  Released Works
                </Link>
              </Text>
              <Text color="#80687F" fontSize="4xl" cursor="pointer">
                <Link href="/#timeline" passHref scroll={false}>
                  Timeline
                </Link>
              </Text>
              <Text color="#80687F" fontSize="4xl" cursor="pointer">
                <Link href="/#contact" passHref scroll={false}>
                  Work With Me
                </Link>
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Stack>
      <Box w="100%" h="350px" />
      <Box>
        <img
          src={urlFor(mainImage).height(400).maxHeight(900).url()}
          style={{
            position: "absolute",
            left: "0",
            right: "840px",
            margin: "auto",
            marginTop: "130px",
          }}
        />
      </Box>
      <Box zIndex={-1} position="absolute" display="block" w="100%">
        <Box maxW="900px" h="370px" overflow="hidden" mx="auto">
          <AspectRatio maxW="900px" ratio={16 / 9} mt="-70px">
            <iframe
              title="tbd"
              src={`${vimeoUrl}?autoplay=1&autopause=0&muted=1&background=1#t=0m1s`}
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;
