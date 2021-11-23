import { useEffect, useState } from 'react';
import Cat from '../Cat';
import { fetchCats } from '../../fetchCats';
import { getUniqueCats } from '../../helpers';

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats()
      .then(res => res.json())
      .then(result => {
        const cats = getUniqueCats(result);
        setCats(cats);
      });
  }, []);

  return (
    <div className="cats-container">
      {cats && cats.map(cat => <Cat key={cat.name} cat={cat} />)}
    </div>
  );
}

export default App;
