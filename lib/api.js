import client from "./sanity";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url
`;

//getting the blogs database
export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
}

//getting a single blog BY slug name of each blog
//in this we get array in result
export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
    }`, {slug})
    .then(res => res?.[0])

  return result;

}

