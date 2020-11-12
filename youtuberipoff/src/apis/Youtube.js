import axios from "axios";

const KEY = "AIzaSyB77Efm40KMPpHXBDTDVouzydjlMz0gVKE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
