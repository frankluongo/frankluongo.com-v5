import React from "react";

import * as css from "#styles/components/Logo.module.css";

export const Logo = ({ type }) => {
  return (
    <svg
      className={css.Logo}
      style={{ fill: `var(--${type})` }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1298 384"
    >
      <path d="M60,21.74h0M1267.16,30,1239.3,346.18a8.57,8.57,0,0,1-8.54,7.82H40.2a8.56,8.56,0,0,1-8.53-9.32l27-306.86A8.57,8.57,0,0,1,67.24,30H1267.16m9.1-30H51.74A21.74,21.74,0,0,0,30,21.74L0,362.26A21.74,21.74,0,0,0,21.74,384H1246.26A21.74,21.74,0,0,0,1268,362.26l30-340.52A21.74,21.74,0,0,0,1276.26,0Z" />
      <path d="M319.69,66.82q16,0,14.39,10.5L326,122.52c-1,6.65-6.92,10.5-17.57,10.5H230.2c-10.11,0-16.5,3.5-17.56,10.5l-3.84,24.2c-1,6.65,4.26,10.5,14.38,10.5h47q16,0,14.39,10.5l-5.93,37.2c-1,6.65-6.91,10.5-17.56,10.5h-47c-10.12,0-16.51,3.5-17.57,10.5l-8.64,54.4c-1,6.65-6.91,10.5-17.56,10.5H98.86c-10.12,0-15.39-3.85-14.39-10.5l33.88-224c1.06-7,7.45-10.5,17.57-10.5Z" />
      <path d="M460.44,66.82q16,0,14.39,10.5l-24.77,155.8c-1,6.65,4.27,10.5,14.38,10.5H552q16,0,14.39,10.5l-5.93,47.2q-1.59,10.5-17.56,10.5H348.68c-10.11,0-15.39-3.85-14.38-10.5l33.88-224c1.05-7,7.44-10.5,17.56-10.5Z" />
      <path d="M774.72,66.82c100.11,0,129.1,26.6,120.42,84l-11.59,76.65c-8.68,57.4-45.77,84.35-145.88,84.35H618.92c-10.12,0-15.39-3.85-14.39-10.5L638.36,77.67c1.06-7,6.91-10.5,17.61-10.85Zm-26.35,184.8c25.56,0,38.76-2.8,41.94-23.8.05-.35,11.59-76.65,11.64-77,3.29-21.7-9.18-23.8-34.74-23.8H738.46c-10.12,0-16.5,3.5-17.56,10.5l-15.67,103.6c-1,6.65,4.27,10.5,14.38,10.5Z" />
      <path d="M939.15,145.57c3.5-23.1,20.32-85,146.52-85,113.42,0,123.42,59,121.48,86-.21,4.9-5.59,8.75-13.2,9.8l-60.43-.25c-11.39,1.4-19.17-3.5-19.66-10.85-.33-15.4-8.54-24.5-37.29-24.5-39.41,0-44.56,16.45-48.64,43.4l-7.62,50.4c-4.07,26.95-3.9,43.4,35.5,43.4,29.29,0,38.66-9.1,44.29-25.2,2.7-7.35,11.91-11.9,22.3-10.15l58.85.75c7.29,1.05,11.5,4.9,10.18,10.15-6.16,26.6-31.3,84.65-144.72,84.65-126.2,0-124.29-61.95-120.79-85.05Z" />
    </svg>
  );
};

/*

export const Logo = ({ type }) => {
  return (
    <div className={css.Logo}>
      <span
        className={css.Heading}
        style={{ color: `var(--theme-color-text-${type})` }}
      >
        Frank Luongo
      </span>
      <span className={css.Subheading}>Design Co.</span>
    </div>
  );
};

*/

Logo.defaultProps = {
  type: "default",
};
