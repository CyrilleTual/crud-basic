"use client";
import {
  QueryClient,
  QueryClientProvider as InitialProvider,
} from "react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5minutes
    },
  },
});

export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <InitialProvider client={queryClient}>
      {children}
     
    </InitialProvider>
  );
}