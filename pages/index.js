import { useState } from "react";

import { Row, Col } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import AuthorIntro from "../components/AuthorIntro";
import CardItem from "../components/CardItem";
import CardListItem from "../components/CardListItem";
import FilteringMenu from "../components/FilteringMenu";

import { getAllBlogs } from "../lib/api";

function Home({ blogs }) {
  //changing view between card and list
  const [filter, setFilter] = useState({
    view: { list: 1 },
  });

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        onChange={() => {
          alert("Alert from index");
        }}
      />
      <hr />
      <Row className="mb-5">
        {blogs.map((blog) =>
          filter.view.list === 1 ? (
            <Col md="9">
              <CardListItem />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              <CardItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          )
        )}
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
