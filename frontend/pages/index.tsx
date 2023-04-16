import Link from "next/link";
import groq from "groq";
import client from "../client";
import { ChakraProvider } from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Header from "../components/Header";

function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)
            .width(320)
            .height(240)
            .fit("max")
            .auto("format")
            .url()}
        />
      );
    },
  },
};

const Index = ({ posts }: any) => {
  return (
    <ChakraProvider>
      <Header />
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", _updatedAt = "", body = [] }: any) =>
            slug && (
              <li key={_id}>
                <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                  {title}
                </Link>{" "}
                ({new Date(_updatedAt).toDateString()})
                <PortableText value={body} components={ptComponents} />
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
