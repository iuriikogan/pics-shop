import React, { useState } from "react";

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" />
      {hovered ? <i className="ri-heart-line favorite" /> : null}
      {hovered ? <i className="ri-add-circle-line cart" /> : null}
    </div>
  );
};

export default Image;
