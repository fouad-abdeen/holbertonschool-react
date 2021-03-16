import { getIn } from "immutable";

const accessImmutableObject = (object, array) => {
  return getIn(object, array, undefined);
};

export default accessImmutableObject;
