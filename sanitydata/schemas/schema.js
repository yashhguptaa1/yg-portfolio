// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    //dataset 1 : to store authors
    {
      name: "author",
      type: "document",
      title: "Author",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "avatar",
          title: "Avatar",
          type: "image",
        },
      ],
    },
    //dataset 2 :  to store blogs
    {
      name: "blog",
      type: "document",
      title: "Blog",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "coverImage",
          title: "Cover Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Description",
            },
          ],
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
                {
                  title: "Position",
                  name: "position",
                  type: "string",
                  options: {
                    list: [
                      { title: "Center", value: "center" },
                      { title: "Left", value: "left" },
                      { title: "Right", value: "right" },
                    ],
                    layout: "radio",
                    isHighlighted: true,
                  },
                },
                {
                  type: "text",
                  name: "alt",
                  title: "Description",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true, //option to edit image to be given
              },
            },
            {
              type: "code",
              options: {
                withFilename: true,
              },
            },
          ],
        },
        {
          name: "date",
          title: "Date",
          type: "datetime",
        },
        //referencing dataset 1 in dataset 2
        {
          name: "author",
          title: "Author",
          type: "reference",
          to: [{ type: "author" }],
        },
        {
          name: "slug",
          type: "slug",
          title: "Slug",
        },
      ],
    },
  ]),
});
