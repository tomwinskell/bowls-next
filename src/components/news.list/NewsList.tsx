'use client';
import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';
import { AlertDestructive } from '../AlertDestructive';

type NewsArticle = {
  key: string;
  date: string;
  title: string;
  text: string;
  image?: string;
  linkText?: string;
  link?: string;
};

function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: async (): Promise<Array<NewsArticle>> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/getSheet?id=1ps_CcRfDeXYJs3p0KTRX_td0JoVYXPS-0XIUrISnr_M&range=Sheet1`,
      );
      return await response.json();
    },
  });
}

export function NewsList() {
  const { status, data, error } = useNews();
  const firstFiveArticles = data
    ?.map((article, index) => {
      if (index >= 5) return null;
      return article;
    })
    .filter((article) => article !== null);
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        News
      </h2>
      <>
        {status === 'pending' ? (
          <Skeleton className="h-[600px] w-full" />
        ) : status === 'error' ? (
          <AlertDestructive message={error.message} />
        ) : (
          <div className="flex flex-col gap-4">
            {firstFiveArticles?.map((article) => (
              <Card
                key={article.key}
                className={cn(
                  article.image && 'pt-0',
                  'relative mx-auto w-full',
                )}
              >
                {article.image && (
                  <div className="relative aspect-video w-full h-50">
                    <div className="absolute inset-0 z-30 bg-blue-950/35" />
                    <Image
                      src={article.image}
                      alt="Event cover"
                      fill
                      className="relative z-20 object-cover brightness-60 grayscale dark:brightness-40"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <div className="font-semibold text-sm italic text-muted-foreground">
                    {article.date}
                  </div>
                  <CardDescription>{article.text}</CardDescription>
                </CardHeader>
                {article.link && article.linkText && (
                  <CardFooter>
                    <Link href={article.link}>
                      <Button className="w-full" type="button">
                        {article.linkText}
                      </Button>
                    </Link>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        )}
      </>
    </>
  );
}
