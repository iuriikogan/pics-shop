import React, { useContext } from "react";
import { Context } from "../utils/Context";
import Image from "../components/Image";
import { getClass } from "../utils/utils";

function Photos() {
  const { allPhotos } = useContext(Context);
  console.log(allPhotos);

  const photoElements = allPhotos.map((img, i) => {
    return <Image key={img.id} img={img} className={getClass(i)} />;
  });

  return (
    <main className="photos">
      {photoElements}
    </main>)
}

export default Photos;
