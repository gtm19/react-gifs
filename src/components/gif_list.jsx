import React from "react";
import Gif from "./gif";

const GifList = (props) => {
  const { gifs, updateFunction } = props;
  return (
    <div className="gif-list">
      {
        gifs.map((gif) => {
          return <Gif gif={gif.id} key={gif.id} updateFunction={updateFunction} />;
        })
      }
    </div>
  );
};

export default GifList;
