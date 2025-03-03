// app/ssr/page.tsx
import React from 'react';

// Giả lập hàm fetch dữ liệu
async function fetchData(): Promise<string> {
  return 'Hello from Next.js!';
}

const SSRPage = async () => {
  const data = await fetchData(); // Fetch data từ server
  return (
    <div>
      <h1>SSR Data: {data}</h1>
    </div>
  );
};

export default SSRPage;
