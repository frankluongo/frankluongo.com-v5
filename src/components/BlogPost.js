import React from "react";

import * as css from "./BlogPost.module.css";

export const BlogPost = (props) => {
  return <article className={css.BlogPost} {...props} />;
};