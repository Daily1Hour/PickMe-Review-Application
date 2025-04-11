import axios from "axios";

import { idToken, accessToken } from "./tokens";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export default axios.create({
    baseURL: SERVER_URL,
    headers: {
        Authorization: `Bearer ${idToken}`,
        "X-Access-Token": `Bearer ${accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
