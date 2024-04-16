// const client = axios.create({
//   baseURL: "http://54.237.124.13:8000",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const API = {
//   get(payload, config = {}) {
//     return client.get("/path", {
//       headers: {
//         Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//         ...config,
//       },
//     });
//   },
//   post(data) {
//     return client.post("/path", data);
//   },
//   put(data) {
//     return client.put("/path", data);
//   },
//   delete() {
//     return client.delete("/path");
//   },
// };

// export default API;
import React from "react";
import { axios } from "axios";

const API = () => {};

export default axios.create({
  baseURL: "http://54.237.124.13:8000",
});
