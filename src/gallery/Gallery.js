import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GalleryList from "./GalleryList";
import GallerySearch from "./GallerySearch";

const Container = styled.div`
  width: ${(props) => props.width || "90vw"};
  margin: 0 auto;
  border: 1px solid #000;
`;

function Gallery() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("cat");

  useEffect(() => {
    const KEY = `32644664-2afcadb85ed505790681ee99e`;
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${text}&image_type=photo`;

    axios
      .get(URL)
      .then((json) => {
        // console.log(json.data.hits)
        setData(json.data.hits);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setData([]);
        setLoading(true);
        setError("주소 확인이 필요합니다.");
      });
  }, [text]);

  const onSearch = (txt) => {
    setText(txt);
  };

  return (
    <Container>
      <GallerySearch onSearch={onSearch} />
      <hr />
      {data && loading ? <p>점검중</p> : <GalleryList data={data} />}
      {error && error}
    </Container>
  );
}

export default Gallery;
