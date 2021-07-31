import client from "./sanity";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url
`;

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
}

/*
Output 1 without referencing ->

Local
blogs: Array(1)
0:
author:
_ref: "408744f2-c014-40bd-aaa8-23fc52fb834a"
_type: "reference"
[[Prototype]]: Object
coverImage:
_ref: "image-35bf4fc77a43b4e68b5119471b1cf65b83e7f9e4-1920x1080-png"
_type: "reference"
[[Prototype]]: Object
date: "2021-07-29T20:01:00.000Z"
slug: "first-blog"
subtitle: "attempt"
title: "CrossWord Puzzle"
*/

/*
Output 2 after referencing using ->
Local
blogs: Array(1)
0:
author:
avatar: "https://cdn.sanity.io/images/d5br3u7u/production/a55d7fe1729468d39114bccca4a1ad6a898b8ad9-2592x4608.jpg"
name: "Yash Gupta"
[[Prototype]]: Object
coverImage: "https://cdn.sanity.io/images/d5br3u7u/production/35bf4fc77a43b4e68b5119471b1cf65b83e7f9e4-1920x1080.png"
date: "2021-07-29T20:01:00.000Z"
slug: "first-blog"
subtitle: "attempt"
title: "CrossWord Puzzle"

*/