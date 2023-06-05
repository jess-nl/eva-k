import groq from "groq";
import client from "../client";
import Header from "../components/Header";
import Works from "../components/Works";
import Biography from "../components/Biography";
import Contact from "../components/Contact";
import ScrollArrow from "@/components/ScrollArrow";

const Index = (props: any) => {
  const { header, biography, works, contact } = props;
  return (
    <>
      <ScrollArrow />
      <Header header={header} />
      <Biography biography={biography} />
      <Works works={works} />
      <Contact contact={contact} />
    </>
  );
};

export async function getStaticProps() {
  const header = await client.fetch(groq`
    *[_type == "header"]
  `);
  const biography = await client.fetch(groq`
    *[_type == "biography"]
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
      works,
      contact,
    },
  };
}

export default Index;
