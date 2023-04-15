import Link from "next/link";
import groq from "groq";
import client from "../client";

const Index = ({ posts }: any) => {
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", _updatedAt = "" }: any) =>
            slug && (
              <li key={_id}>
                <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                  {title}
                </Link>{" "}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
    </div>
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
