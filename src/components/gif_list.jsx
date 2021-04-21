import React from "react";
import Gif from "./gif";

const GifList = ({ gifs }) => {
  return (
    <div className="gif-list">
      {
        gifs.map((gif) => {
          return <Gif gif={gif.gif} />;
        })
      }
    </div>
  );
};

export default GifList;
