import axios from "axios";
import { useEffect } from "react";

function Youtube1() {
  const key = `AIzaSyBgo5-UIE_kV_4jjiNcfq0MMTYjco7XYUU`;
  const playList = `PLpZG7TNql-ejXK_B4j3S6Lh-M_uK2NoUM`;
  const num = `3`;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;
  useEffect(() => {
    axios.get(URL).then((json) => console.log(json.data.items));
  }, []);
  return (
    <>
      <h1>Youtube1</h1>
    </>
  );
}

export default Youtube1;
