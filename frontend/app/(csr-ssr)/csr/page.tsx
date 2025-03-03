// app/sg/page.tsx
'use client'; // Chỉ định component này là Client Component

import React, { useState, useEffect } from 'react';

// Giả lập hàm fetch dữ liệu (có thể gọi API ở đây nếu cần)
async function fetchData(): Promise<string> {
  return 'Hello from Next.js!';
}

// Client-side logic sử dụng hooks (state, useEffect)
const CSRPage = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>CSR Data: {data}</h1>
    </div>
  );
};

export default CSRPage;
