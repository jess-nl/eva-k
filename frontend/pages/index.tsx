import Link from "next/link";
import groq from "groq";
import client from "../client";
import { ChakraProvider } from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { AspectRatio, Grid, GridItem, Text, Box } from "@chakra-ui/react";
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

const Index = ({ timeline }: any) => {
  return (
    <ChakraProvider>
      <Header />
      <Box bg="#80687F" paddingTop="150px" paddingBottom="100px">
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          marginX="100px"
          marginBottom="10px"
        >
          <GridItem w="100%" h="100%">
            <Text color="#DBD47D" fontSize="lg">
              YEAR(S) OF RELEASE
            </Text>
          </GridItem>
          <GridItem w="100%" h="100%">
            <Text color="#DBD47D" fontSize="lg">
              TITLE
            </Text>
          </GridItem>
          <GridItem w="100%" h="100%">
            <Text color="#DBD47D" fontSize="lg">
              SUMMARY
            </Text>
          </GridItem>
          <GridItem w="100%" h="100%"></GridItem>
        </Grid>
        {timeline.length > 0 &&
          timeline.map(
            ({
              _id,
              _type,
              title = "",
              yearReleased = "",
              summary = [],
              vimeoUrl = "",
            }: any) => (
              <div key={_id}>
                <Grid
                  templateColumns="repeat(4, 1fr)"
                  gap={6}
                  marginX="100px"
                  borderTop="4px"
                  borderColor="#DBD47D"
                  borderTopStyle="solid"
                >
                  <GridItem w="100%" h="100%" marginTop="12px">
                    <Text color="#DBD47D" fontSize="6xl">
                      {yearReleased}
                    </Text>
                  </GridItem>
                  <GridItem w="100%" h="100%" marginTop="12px">
                    <Text color="#DBD47D" fontSize="lg">
                      {title}
                    </Text>
                  </GridItem>
                  <GridItem w="100%" h="100%" marginTop="12px">
                    <PortableText value={summary} components={ptComponents} />
                  </GridItem>
                  <GridItem w="100%" h="100%" marginTop="12px">
                    <AspectRatio maxW="480px" ratio={16 / 9}>
                      <iframe
                        title="tbd"
                        src={`${vimeoUrl}?autoplay=1&autopause=0&muted=1&background=1`}
                        allowFullScreen
                      />
                    </AspectRatio>
                  </GridItem>
                </Grid>
              </div>
            )
          )}
      </Box>
    </ChakraProvider>
  );
};

export async function getStaticProps() {
  const timeline = await client.fetch(groq`
    *[_type == "timeline"] | order(publishedAt desc)
  `);
  return {
    props: {
      timeline,
    },
  };
}

export default Index;
