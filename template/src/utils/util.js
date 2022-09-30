import {get, last, split} from "lodash";

export const currentRoute = (location) => {
  return last(split(get(location, "pathname"), "/"));
};
