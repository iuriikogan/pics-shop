import React, { useState, useContext } from "react";
import { Context } from "../utils/Context";

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  const heartImage = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}
    />
  );
  const cartImage = hovered && <i className="ri-add-circle-line cart" />;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" alt={img.id} />
      {heartImage}
      {cartImage}
    </div>
  );
};

export default Image;
