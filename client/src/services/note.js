import Axios from "axios";

export const getNotes = () => Axios.get("/api/note");