import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "./HighlightCode";
import { urlFor } from "../lib/api";

import { Image } from "react-bootstrap";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt, position} }) => {
      debugger
      return (
        <div className={`blog-image blog-image-${position}`}>
          {/* <h1>Here will be image</h1> */}
          <Image src={urlFor(asset).height(300).fit("max").url()} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => (
  <BlockContent serializers={serializers} blocks={content} />
);

export default BlogContent;

/*
 image: (props) => {
        debugger

        props:
            children: Array(0)
            length: 0
            [[Prototype]]: Array(0)
            isInline: undefined
            node:
              alt: "Dry Run"
              asset:
                assetId: "20a33f0730dd7335aff99be6b9e34840ac236618"
                extension: "png"
*/
