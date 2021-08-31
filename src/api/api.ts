import { Itodo } from "../types";
import fakeData from "./data.json";

export const BASE_URL = "http://dummy-server.io/";

export interface CreateResponse {
  status: number;
  msg: string;
}

export interface ReadResponse {
  status: number;
  count: number;
  todoList: Itodo[];
}

// const get = (url: string) => {
//   return async (): Promise<ReadResponse> => {
//     try {
//       const data = await fakeData;
//       const { count, todoList } = data;
//       return { status: 200, count, todoList };
//     } catch {
//       return { status: 400, count: null, todoList: null };
//     }
//   };
// };

const get = async (url: string) => {
  const getUrl = await url;
  const response = {
    status: 200,
    count: fakeData.count,
    todoList: fakeData.todoList,
  };
  console.log("응답", response);
  return response;
};

// const get = (url: string): Promise<ReadResponse> => {
//   return new Promise((resolve, reject) => {
//     if (url)
//       return resolve({
//         status: 200,
//         count: fakeData.count,
//         todoList: fakeData.todoList,
//       });
//     else return reject(new Error("url을 입력해주세요."));
//   });
// };

export interface PostObj {
  url: string;
  content: string;
}

const post = (obj: PostObj): Promise<CreateResponse> => {
  return new Promise((resove, reject) => {
    if (obj.url && obj.content)
      return resove({ status: 200, msg: obj.content });
    else return reject(new Error("url, content가 있는지 확인해주세요."));
  });
};

// const post = (url: string, content: string) => {
//   return async (): Promise<CreateResponse> => {
//     try {
//       const msg = await content;
//       return { status: 200, msg };
//     } catch {
//       if (!content) return { status: 204, msg: null };
//       else return { status: 400, msg: null };
//     }
//   };
// };

export const api = {
  get,
  post,
};
