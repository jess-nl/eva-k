import client from "../client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { Text } from "@chakra-ui/react";

function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

const Image = ({ children }: any) => {
  if (!children?.asset?._ref) {
    return null;
  }
  return (
    <img
      alt={children.alt || " "}
      loading="lazy"
      src={urlFor(children)
        .width(320)
        .height(240)
        .fit("max")
        .auto("format")
        .url()}
    />
  );
};

const PortableTextComponent = ({
  content,
  fontSize = null,
  color = null,
}: any) => {
  let componentUsed = {
    types: {
      image: Image,
    },
    block: {
      normal: ({ children }: any) => (
        <Text fontSize={fontSize} color={color}>
          {children}
        </Text>
      ),
    },
  };
  return <PortableText value={content} components={componentUsed} />;
};

export default PortableTextComponent;
