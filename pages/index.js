import { Row, Col } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import AuthorIntro from "../components/AuthorIntro";
import CardItem from "../components/CardItem";

import { getAllBlogs } from "../lib/api";

function Home({ blogs }) {
  debugger;

  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col> */}
        {blogs.map((blog) => (
          <Col key={blog.slug} md="4">
            <CardItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              image={blog.coverImage}
              slug={blog.slug}
              link={{
                href: "/blogs/[slug]", //file path
                as: `/blogs/${blog.slug}`, //to be displayed url
              }}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}

export default Home;
