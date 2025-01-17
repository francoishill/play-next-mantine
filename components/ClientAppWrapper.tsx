'use client';

import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchIntervalInBackground: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function ClientAppWrapper({ children }: PropsWithChildren<{}>) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
