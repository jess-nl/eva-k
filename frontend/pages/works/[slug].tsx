import groq from "groq";
import client from "../../client";
import Post from "@/components/Post";
import { ChakraProvider } from "@chakra-ui/react";

const PostWorks = ({ works }: any) => {
  return (
    <ChakraProvider>
      <Post post={works} />
    </ChakraProvider>
  );
};

const query = groq`*[_type == "works" && slug.current == $slug][0]{
  title,
  yearReleased,
  vimeoUrl,
  longSummary
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "works" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const works = await client.fetch(query, { slug });
  return {
    props: {
      works,
    },
  };
}

export default PostWorks;
