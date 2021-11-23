export const getUniqueCats = data => {
  const cats = data.filter(cat => cat && Object.keys(cat).length !== 0);
  return [...new Map(cats.map(cat => [cat['name'], cat])).values()];
};
