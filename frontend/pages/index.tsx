import groq from "groq";
import client from "../client";
import Header from "../components/Header";
import Works from "../components/Works";
import Biography from "../components/Biography";
import Contact from "../components/Contact";
import ScrollArrow from "@/components/ScrollArrow";

const Index = (props: any) => {
  const { header, works, biography, contact } = props;
  return (
    <>
      <ScrollArrow />
      <Header header={header} />
      <Works works={works} />
      <Biography biography={biography} />
      <Contact contact={contact} />
    </>
  );
};

export async function getStaticProps() {
  const header = await client.fetch(groq`
    *[_type == "header"]
  `);
  const works = await client.fetch(groq`
  *[_type == "works"] | order(publishedAt desc)
  `);
  const biography = await client.fetch(groq`
    *[_type == "biography"]
  `);
  const contact = await client.fetch(groq`
    *[_type == "contact"]
  `);
  return {
    props: {
      header,
      works,
      biography,
      contact,
    },
  };
}

export default Index;
