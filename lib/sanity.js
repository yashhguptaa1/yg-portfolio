import sanityClient from '@sanity/client';

const options = {
  dataset: "production",
  projectId: "d5br3u7u",
  apiVersion: '2021-07-30',
  useCdn: process.env.NODE_ENV === 'production'
  // useCdn === true, gives you fast response, it will get you
  // cached data
  // useCdn === false, give you little bit slower response, but
  // latest data
}

export default sanityClient(options);