import React from "react";

const imageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} alt="images" />;
  });
  return <div>{images}</div>;
};

export default imageList;
