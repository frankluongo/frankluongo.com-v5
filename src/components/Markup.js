import React from "react";

import * as css from "./Markup.module.css";

export const Markup = ({ Tag, content }) => {
  return (
    <Tag className={css.Markup} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

Markup.defaultProps = {
  Tag: "div",
};
