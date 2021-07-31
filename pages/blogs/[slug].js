//domain : http://localhost:3000/blogs/:slug
//ex : http://localhost:3000/blogs/first-blog

import PageLayout from "../../components/PageLayout";
import { getBlogBySlug } from "../../lib/api";

const BlogDetail = ({ blog }) => {

  console.log(blog);

  return (
    <PageLayout>
      <h1>Hello Detail Page - {blog?.slug}</h1>
    </PageLayout>
  );
};

export async function getServerSideProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export default BlogDetail;
/*
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
The context parameter is an object containing the following keys:

params: If this page uses a dynamic route, params contains the route parameters. 
If the page name is [id].js , then params will look like { id: ... }. To learn more,
take a look at the Dynamic Routing documentation.

getServerSideProps should return an object with:
  props - An optional object with the props that will be received by the page component.
  It should be a serializable object
*/