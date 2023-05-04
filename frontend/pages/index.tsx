import groq from "groq";
import client from "../client";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import Timeline from "./post/timeline";

const Index = (props: any) => {
  return (
    <ChakraProvider>
      <Header />
      <Timeline timeline={props.timeline} />
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
