'use client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { Persister, PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { FixtureList } from '../ui/components/FixtureList';
import { useEffect, useState } from 'react';

export default function FixturesPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 15, // 5 minutes (prevents refetching)
        gcTime: 1000 * 60 * 60 * 24, // 24 hours (keeps inactive data)
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
      },
    },
  });

  const [persister, setPersister] = useState<Persister | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStoragePersister = createSyncStoragePersister({
        storage: window.localStorage,
      });
      setPersister(localStoragePersister);
    }
  }, []);

  if (!persister) {
    return <div>Loading...</div>;  // Render loading state until persister is ready
  }
  
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <FixtureList />
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}
