export const transformDocument = (doc: any) => {
  if (doc && doc._id) {
    return { id: doc._id.toString(), ...doc, _id: undefined };
  }
  return doc;
};
