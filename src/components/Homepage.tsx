'use client';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { Skeleton } from './ui/skeleton';
import { AlertDestructive } from './AlertDestructive';
import { JSX } from 'react';

type DocHtml = {
  html: string;
};

function extractBodyContent(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.innerHTML;
}
function useHomepage() {
  return useQuery({
    queryKey: ['homepage'],
    queryFn: async (): Promise<DocHtml> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/getDoc?id=1tdiTMN9azxLnAOxh7DcJT_5g5A8QkHF8yuAjeOMqzKw`,
      );
      return await response.json();
    },
  });
}

const HomepageError = ({ error }: { error: Error | null }) => (
  <AlertDestructive
    message={error?.message ?? 'Unknown error fetching page content'}
  />
);

export const Homepage = () => {
  const { data, status, error } = useHomepage();
  let safeHtml: JSX.Element | string = <HomepageError error={error} />;
  if (data) {
    safeHtml = DOMPurify.sanitize(extractBodyContent(data.html), {
      FORBID_ATTR: ['style'],
    });
  }
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Mundesley Haig Lawn Bowls Club
      </h2>
      <>
        {status === 'pending' ? (
          <Skeleton className="h-[600px] w-full" />
        ) : status === 'error' ? (
          <AlertDestructive message={error.message} />
        ) : typeof safeHtml === 'string' ? (
          <div
            className="flex flex-col gap-2"
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          ></div>
        ) : (
          safeHtml
        )}
      </>
    </>
  );
};
