import { getIn, Map } from "immutable";

let result;

const accessImmutableObject = (object, array) => {
  result = getIn(object, array, undefined);
  return typeof result === "object" ? Map(result) : result;
};

export default accessImmutableObject;
