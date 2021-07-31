//domain : http://localhost:3000/blogs/:slug
//ex : http://localhost:3000/blogs/first-blog

import PageLayout from "../../components/PageLayout";
import { useRouter } from "next/router";

const BlogDetail = () => {
  
    const { query } = useRouter();

  return (
    <PageLayout>
      <h1>Hello Detail Page - {query?.slug}</h1>
    </PageLayout>
  );
};

export default BlogDetail;

/*

const router = useRouter();
  debugger;
  

router:
    asPath: "/blogs/first-blog"
    back: ƒ ()
    basePath: ""
    beforePopState: ƒ ()
    components: {/blogs/[slug]: {…}, /_app: {…}}
    defaultLocale: undefined
    domainLocales: undefined
    events: {on: ƒ, off: ƒ, emit: ƒ}
    isFallback: false
    isLocaleDomain: false
    isPreview: false
    isReady: true
    locale: undefined
    locales: undefined
    pathname: "/blogs/[slug]"
    prefetch: ƒ ()
    push: ƒ ()
    query:
        slug: "first-blog"
*/