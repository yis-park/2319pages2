import styled from "styled-components";

const GalleryItemBox = styled.section`
  border: 1px solid #222;
  padding: 10px;
  margin: 20px 10px;
  img {
    width: 100%;
  }
  h2 {
    font-size: 1.2em;
    color: royalblue;
    margin: 10px;
    color: maroon;
  }
  ul {
    margin: 0;
    font-size: 0.95em;
  }
`;

function GalleryItem({ item }) {
  const { user, previewURL, views, tags, type } = item;

  return (
    <GalleryItemBox>
      <img src={previewURL} alt={tags} />
      <h2># {user}</h2>
      <ul>
        <li>태그: {tags}</li>
        <li>뷰어: {views}</li>
        <li>종류: {type}</li>
      </ul>
    </GalleryItemBox>
  );
}

export default GalleryItem;
