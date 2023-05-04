import groq from "groq";
import client from "../client";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import Timeline from "./post/timeline"
import Works from "./post/works";

const Index = (props: any) => {
  return (
    <ChakraProvider>
      <Header />
      <Timeline timeline={props.timeline} />
      <Works works={props.works} />
    </ChakraProvider>
  );
};

export async function getStaticProps() {
  const timeline = await client.fetch(groq`
    *[_type == "timeline"] | order(publishedAt desc)
  `);
  const works = await client.fetch(groq`
    *[_type == "works"] | order(publishedAt desc)
  `);
  return {
    props: {
      timeline,
      works,
    },
  };
}

export default Index;
