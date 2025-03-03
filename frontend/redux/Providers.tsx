"use client"; // Quan trọng: Chỉ định đây là Client Component

import { Provider } from "react-redux";
import store from "./store"; // Import store từ file store.ts

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
