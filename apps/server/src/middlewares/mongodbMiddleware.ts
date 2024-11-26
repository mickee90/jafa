import { transformDocument } from '../graphql/utils/transform';

const transformResults = (results: any[]) => {
  return results.map(transformDocument);
};

export const wrapCollection = (collection) => {
  const originalFind = collection.find.bind(collection);
  const originalFindOne = collection.findOne.bind(collection);
  const originalAggregate = collection.aggregate.bind(collection);

  collection.find = async (...args) => {
    const results = await originalFind(...args).toArray();
    return transformResults(results);
  };

  collection.findOne = async (...args) => {
    const result = await originalFindOne(...args);
    return transformDocument(result);
  };

  collection.aggregate = async (...args) => {
    const results = await originalAggregate(...args).toArray();
    return transformResults(results);
  };

  return collection;
};
