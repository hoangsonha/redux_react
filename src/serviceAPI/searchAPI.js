import * as request from "../utils/request";

export const search = async (query, tyle = "less") => {
  try {
    const response = await request.get("/users/search", {
      params: {
        q: query,
        type: tyle,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error " + error);
  }
};

// tạo hàm để viết async
// await luôn đứng trước Promise
// để chuyển đổi đoạn code dưới cung từ Promise qua async
//

// const fAPI = async () => {
//   try {
//     const response = await request.get("/users/search", {
//       params: {
//         q: "hoa",
//         type: "less",
//       },
//     });
//   } catch (error) {}
// };

// request
//     .get("/users/search", {
//       params: {
//         q: "hoa",
//         type: "less",
//       },
//     })
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(() => {});
