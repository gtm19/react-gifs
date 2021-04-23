import React from "react";

const Gif = ({ gif }) => {
  const src = `https://media2.giphy.com/media/${gif}/200.gif`;
  return (
    <img src={src} if={gif} key={gif} className="gif"/>
  );
};

export default Gif;