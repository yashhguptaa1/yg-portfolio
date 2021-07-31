import client from "./sanity";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url,
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
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}

/*
content: Array(6)
  0:
  alt: "Dry Run"
    asset:
    assetId: "20a33f0730dd7335aff99be6b9e34840ac236618"
    extension: "png"
    metadata: {_type: "sanity.imageMetadata", dimensions: {…}, hasAlpha: false, isOpaque: true, lqip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…4NI7ju9tZvL+33263/wK66SODjvhC1QAAAABJRU5ErkJggg==", …}
  mimeType: "image/png"
  originalFilename: "friends2 (1).png"
  path: "images/d5br3u7u/production/20a33f0730dd7335aff99be6b9e34840ac236618-1920x1080.png"
  sha1hash: "20a33f0730dd7335aff99be6b9e34840ac236618"
  size: 585503
  uploadId: "pHhGDz4dgQAaOVXbOdJlxAS693mhcJzE"
  url: "https://cdn.sanity.io/images/d5br3u7u/production/20a33f0730dd7335aff99be6b9e34840ac236618-1920x1080.png"
  _createdAt: "2021-07-31T09:39:02Z"
  _id: "image-20a33f0730dd7335aff99be6b9e34840ac236618-1920x1080-png"
  _rev: "S6x59A9wfolputLJOXIucw"
  _type: "sanity.imageAsset"
  _updatedAt: "2021-07-31T09:39:02Z"
  */