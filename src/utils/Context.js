import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data))
      .catch(err => console.error(err));
  }, []);
  return <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
