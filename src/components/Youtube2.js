import axios from "axios";
import { useEffect, useState } from "react";

function Youtube2() {
  const [video, setVideo] = useState([]);

  const key = `AIzaSyBgo5-UIE_kV_4jjiNcfq0MMTYjco7XYUU`;
  const playList = `PLpZG7TNql-ejXK_B4j3S6Lh-M_uK2NoUM`;
  const num = `4`;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;
  useEffect(() => {
    axios.get(URL).then((json) => setVideo(json.data.items));
  }, []);

  return (
    <>
      {video.map((vid, idx) => {
        return (
          <figure
            key={vid.snippet.position}
            style={{ borderBottom: "1px solid #000" }}
          >
            <strong style={{ display: "block" }}>{vid.snippet.title}</strong>
            <img
              src={vid.snippet.thumbnails.medium.url}
              alt={vid.snippet.title}
            />
            <iframe
              src={`https://www.youtube.com/embed/${video[idx].snippet.resourceId.videoId}?controls=0`}
              frameborder="0"
              title={vid.snippet.title}
            ></iframe>

            <figcaption>
              {vid.snippet.description.substr(0, 100) + "..."}
            </figcaption>
          </figure>
        );
      })}
    </>
  );
}

export default Youtube2;
