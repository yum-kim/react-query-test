## react-query

### 사용방법

```
$ npm i @tanstack/react-query
$ yarn add @tanstack/react-query
```

1. 상위 컴포넌트에 queryProvider 설정
```
import React from 'react';
import './App.css';
import MainProducts from './components/MainProducts';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />
    </QueryClientProvider>
  )
}
```

2. 컴포넌트 내에서 useQuery 사용

```
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  const { isLoading, error, data: products } = useQuery(['products'], async () => {
    //데이터를 가져올 로직
    console.log('react-query fetching,,,');
    return fetch(`data/products.json`)
      .then((res) => res.json()
      );
  })

  return (
    <>
        ...    
    </>
  );
}
```