export const transformDocument = (doc: any) => {
  if (doc && doc._id) {
    return { id: doc._id.toString(), ...doc, _id: undefined };
  }
  return doc;
};

export const transformDocuments = (docs: any) => {
  if (docs && docs.length > 0) {
    return docs.map((doc) => transformDocument(doc));
  }

  return docs;
};
