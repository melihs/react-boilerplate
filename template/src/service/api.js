/*eslint-disable*/
import axios from "axios";
import {get} from "lodash";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_DEV_API_URL
});

/*
***************  Example api request *****************
*/
export const fakeRequest = async (params) => {
  try {
    const {data} = await api.get(
      `${process.env.REACT_APP_API_URL}/${params}`,
      {
        withCredentials: true
      }
    );
    return get(data, "data");
  } catch (err) {
    return get(err, "message");
  }
};
