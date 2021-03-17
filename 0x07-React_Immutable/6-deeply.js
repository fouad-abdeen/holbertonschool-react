import { List, Map, mergeDeep } from 'immutable';

const mergeDeeplyElements = (page1, page2) => List(mergeDeep(Map(page1), Map(page2)));

export default mergeDeeplyElements;
