import Link from "next/link";
import groq from "groq";
import client from "../client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Text,
  Flex,
  Box,
  Spacer,
  VStack,
  AspectRatio,
  Stack,
} from "@chakra-ui/react";

const Index = ({ posts }: any) => {
  return (
    <ChakraProvider>
      <Stack position="absolute" zIndex={1} w="100%">
        <Flex p="14">
          <Box bg="red.400">
            <Text fontSize="110px" lineHeight="110%">
              Eva <br /> Kabuya
            </Text>
          </Box>
          <Spacer />
          <VStack textAlign="right" spacing="100px">
            <Box p="4" bg="green.400" w="360px">
              <Text fontSize="3xl" lineHeight="80%">
                About Me
              </Text>
              <Text fontSize="2xl">fr | en</Text>
            </Box>
            <Box p="4" bg="blue.400" w="360px">
              <Text fontSize="4xl">Biography</Text>
              <Text fontSize="4xl">Released Works</Text>
              <Text fontSize="4xl">Timeline</Text>
              <Text fontSize="4xl">Work With Me</Text>
            </Box>
          </VStack>
        </Flex>
      </Stack>
      <Box bg="tomato" maxW="900px" height="370px" overflow="hidden" mx="auto">
        <AspectRatio maxW="900px" ratio={16 / 9} mt="-70px">
          <iframe
            title="tbd"
            src="https://player.vimeo.com/video/530984056?h=337e6011fd?autoplay=1&autopause=0&muted=1&background=1#t=0m1s"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", _updatedAt = "" }: any) =>
            slug && (
              <li key={_id}>
                <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                  {title}
                </Link>{" "}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
    </ChakraProvider>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post"] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
