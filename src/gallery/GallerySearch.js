import styled from "styled-components";
import { useState } from "react";

const ImgSearch = styled.form`
  text-align: center;
  padding: 30px;
  input[type="text"] {
    width: 160px;
    padding: 2px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid tomato;
  }
  button {
    cursor: pointer;
    width: 50px;
    background-color: tomato;
    color: #fff;
    border: none;
    padding: 2px;
    vertical-align: middle;
    &:hover {
      background-color: #000;
    }
  }
`;

function GallerySearch({ onSearch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDeault();

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
