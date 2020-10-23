import React, { useState } from "react";

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);

  const heartImage = hovered && <i className="ri-heart-line favorite" />;
  const cartImage = hovered && <i className="ri-add-circle-line cart" />;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" />
      {heartImage}
      {cartImage}
    </div>
  );
};

export default Image;
