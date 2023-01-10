import styled from "styled-components";

// Gallery.js
export const Container = styled.div`
  width: ${(props) => props.width || "90vw"};
  margin: 0 auto;
  border: 1px solid #000;
`;

// GallerySearch.js
export const ImgSearch = styled.form`
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

// GalleryList.js
export const GalleryListContainer = styled.div`
  .my-masonry-grid {
    display: flex;
    margin: 0; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding: 10px; /* gutter size */
    background-clip: padding-box;
  }
  /* Style your items */
  .my-masonry-grid_column > section {
    /* change div to reference your elements you put in <Masonry> */
    background: #efefef;
    margin-bottom: 30px;
  }
`;
export const breakpointColumnsObj = {
  default: 4,
  1400: 4,
  960: 3,
  414: 2,
};

// GalleryItem.js
export const GalleryItemBox = styled.section`
  border: 1px solid #222;
  padding: 10px;
  margin: 20px 10px;
  img {
    width: 100%;
  }
  h2 {
    font-size: 1.2em;
    color: maroon;
    margin: 10px;
  }
  ul {
    margin: 0;
    font-size: 0.95em;
  }
`;
