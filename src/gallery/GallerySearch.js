import { useState } from "react";
import { ImgSearch } from "./GalleryStyle";

function GallerySearch({ onSearch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;
    onSearch(text);
  };
  return (
    <ImgSearch onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">검색</button>
    </ImgSearch>
  );
}

export default GallerySearch;
