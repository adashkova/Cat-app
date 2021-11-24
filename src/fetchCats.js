export const fetchCats = () => {
  return fetch('cats.json').then(res => res.json())
};
