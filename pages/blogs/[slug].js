//domain : http://localhost:3000/blogs/:slug
//ex : http://localhost:3000/blogs/first-blog

import PageLayout from "../../components/PageLayout";
import { getBlogBySlug, getAllBlogs } from "../../lib/api";

const BlogDetail = ({ blog }) => {
  //console.log(blog);

  return (
    <PageLayout>
      <h1>Hello Detail Page - {blog?.slug}</h1>
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
