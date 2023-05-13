import groq from "groq";
import client from "../client";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import Works from "../components/Works";
import Biography from "../components/Biography";
import Contact from "../components/Contact";
import ScrollArrow from "@/components/ScrollArrow";

const Index = (props: any) => {
  const { header, biography, timeline, works, contact } = props;
  return (
    <ChakraProvider>
      <ScrollArrow />
      <Header header={header} />
      <Biography biography={biography} />
      <Works works={works} />
      <Timeline timeline={timeline} />
      <Contact contact={contact} />
    </ChakraProvider>
  );
};

export async function getStaticProps() {
  const header = await client.fetch(groq`
    *[_type == "header"]
  `);
  const biography = await client.fetch(groq`
    *[_type == "biography"]
  `);
  const timeline = await client.fetch(groq`
    *[_type == "timeline"] | order(publishedAt desc)
  `);
  const works = await client.fetch(groq`
    *[_type == "works"] | order(publishedAt desc)
  `);
  const contact = await client.fetch(groq`
    *[_type == "contact"]
  `);
  return {
    props: {
      header,
      biography,
      timeline,
      works,
      contact,
    },
  };
}

export default Index;
