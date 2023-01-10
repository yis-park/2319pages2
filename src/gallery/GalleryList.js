import styled from "styled-components";
import Masonry from "react-masonry-css";
import GalleryItem from "./GalleryItem";

const GalleryListContainer = styled.div`
  .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
  /* Style your items */
  .my-masonry-grid_column > section {
    /* change div to reference your elements you put in <Masonry> */
    background: #efefef;
    margin-bottom: 30px;
  }
`;

const breakpointColumnsObj = {
  default: 4,
  1400: 4,
  960: 3,
  414: 2,
};

function GalleryList({ data }) {
  return (
    <GalleryListContainer>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </Masonry>
    </GalleryListContainer>
  );
}

export default GalleryList;
