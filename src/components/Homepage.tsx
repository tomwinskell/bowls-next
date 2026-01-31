'use client';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';

type DocHtml = {
  html: string;
};

function extractBodyContent(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.innerHTML;
}

export const Homepage = () => {
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
  const { data } = useHomepage();
  if (!data) return null;
  const safeHtml = DOMPurify.sanitize(extractBodyContent(data.html), {
    FORBID_ATTR: ['style'],
  });
  return (
    <div
      className="flex flex-col gap-2"
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    ></div>
  );
};
