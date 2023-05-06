import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";

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

const Post = ({ works }: any) => {
  const {
    title = "Missing title",
    vimeoUrl,
    yearReleased,
    longSummary
  } = works;
  return (
    <article>
      <h1>{title}</h1>
      <h2>{vimeoUrl}</h2>
      <h2>{yearReleased}</h2>
      <PortableText value={longSummary} components={ptComponents} />

    </article>
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

export default Post;
