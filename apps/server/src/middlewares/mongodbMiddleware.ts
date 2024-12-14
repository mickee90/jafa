import { transformDocument } from '../graphql/utils/transform';

const transformResults = (results: any[]) => {
  return results.map(transformDocument);
};

export const wrapCollection = async (collection) => {
  // const originalFind = collection.find.bind(collection);
  // const originalFindOne = collection.findOne.bind(collection);
  // const originalAggregate = collection.aggregate.bind(collection);

  // collection.find = async (...args) => {
  //   try {
  //     const results = await originalFind(...args).toArray();
  //     return transformResults(results);
  //   } catch (error) {
  //     console.error('Error in find:', error);
  //     throw new Error('Database find operation failed');
  //   }
  // };

  // collection.findOne = async (...args) => {
  //   try {
  //     const result = await originalFindOne(...args);
  //     return transformDocument(result);
  //   } catch (error) {
  //     console.error('Error in findOne:', error);
  //     throw new Error('Database findOne operation failed');
  //   }
  // };

  // collection.aggregate = async (...args) => {
  //   try {
  //     const results = await originalAggregate(...args).toArray();
  //     return transformResults(results);
  //   } catch (error) {
  //     console.error('Error in aggregate:', error);
  //     throw new Error('Database aggregate operation failed');
  //   }
  // };

  return collection;
};
