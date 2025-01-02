import axios from "axios";

const SERVER_URL = "http://localhost:8080";
const TOKEN =
    "eyJraWQiOiIyTVRUdXcwaWlBUnJRODN6WW5JVWs5bVlUUzNtcjV3Qm5JMXBnSGhMRllVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3NDQ4OGRmYy1lMGYxLTcwYmEtYTMyOS0yYzBmZGI4YTU0ZDYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTJfUkZ4VENWeHR6IiwiY2xpZW50X2lkIjoiNjAwMTFidDBldjQ2bHBiNTFwYm5wdWdwbjciLCJvcmlnaW5fanRpIjoiZTNmYWIwN2EtZmY4Yi00YmJlLWFhMWItOGY5MTNlMGJiYjNlIiwiZXZlbnRfaWQiOiIxYzhiNjk3Zi0wNGNmLTQ0ZGMtYWNmYi1mOGIyZWFjNjI3MGMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNzM1ODA1OTYwLCJleHAiOjE3MzU4MDk1NjAsImlhdCI6MTczNTgwNTk2MCwianRpIjoiZmNkNjgzYzktNmIwYy00ZjVjLTkxZjAtMTI2NTllMzRhYjZjIiwidXNlcm5hbWUiOiJ0ZXN0dXNlciJ9.kR3KgMau4E37_19gaaKBp8SrZlqDJQxqjCl0Ba886uFIhZjx0UbQu62p8C2xpJK0WCVbc9k-SZ5a0UQzLGh1cdZHQN-7ml6pKK_MvUSSQhZiOlOCg55qXQri8njFMzu4ejXBsRX_LOYUNu2PhOf-zJmkkVdxsU9qAwmtF6EDaNfLbRRav-K9TjORnCtAn3wgzQ9-P9OGUhX--1WsqJtVUA-Sa_FBI8qG3vIl6-2WpT33xMbliSkwKFn4h1eXK5Pb9PrIAh52DnyR4oP0wwukiXdyhABUFHG9HvzrcPR32gvkiZvot9YXMxfu3yRj9X7ancl5_vVAs177j5l-Simuhg";

const client = axios.create({
    baseURL: `${SERVER_URL}/review`,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
    },
});

export const getSideData = async () => {
    const response = await client.get("/interview");
    return response.data;
};
