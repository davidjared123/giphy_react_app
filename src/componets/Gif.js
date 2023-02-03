import React from "react";

export default function Gif({ url, title, id }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>this is a url: {url}</p>
      <img alt={title} src={url} />;
    </div>
  );
}
