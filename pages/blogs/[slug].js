//domain : http://localhost:3000/blogs/:slug
//ex : http://localhost:3000/blogs/first-blog

import PageLayout from "../../components/PageLayout";
import BlogHeader from "../../components/BlogHeader";
import { getBlogBySlug, getAllBlogs } from "../../lib/api";

import { Row, Col } from "react-bootstrap";

const BlogDetail = ({ blog }) => {
  //console.log(blog);

  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={blog.coverImage}
            author={blog.author}
            date={blog.date}
          />
          <hr />
          {/* Blog Content Here */}
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  //console.log("Fetching blog by", params.slug);
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs?.map((b) => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}

export default BlogDetail;

/*
Server Error
Error: getStaticPaths is required for dynamic SSG pages and is 
missing for '/blogs/[slug]'.

*/
