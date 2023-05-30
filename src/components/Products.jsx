import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  const [checked, setChecked] = useState(false);
  const { isLoading, error, data: products } = useQuery(['products', checked], async () => {
    //데이터를 가져올 로직
    console.log('react-query fetching,,,');
    return fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json()
      );
  }, {
    staleTime: 5000
  });

  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <label>
        <input type='checkbox' checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
