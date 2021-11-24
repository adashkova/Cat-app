import { useEffect, useState } from 'react';
import Cat from '../Cat';
import { fetchCats } from '../../fetchCats';
import { getUniqueCats } from '../../helpers';

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats().then(result => {
      const cats = getUniqueCats(result);
      setCats(cats);
    });
  }, []);

  return (
    <div className="cats-container">
      {cats.length > 0 && cats.map(cat => <Cat key={cat.name} cat={cat} />)}
    </div>
  );
}

export default App;
