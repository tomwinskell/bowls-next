'use client';
import { useQuery } from '@tanstack/react-query';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
} from '@/components/fixtures.list/table';
import { Skeleton } from '../ui/skeleton';
import { AlertDestructive } from '../AlertDestructive';

type Fixture = {
  key: number;
  date: string;
  day: string;
  local: string;
  ha: string;
  misc: string;
  wld: string;
  shots: string;
  points: string;
};

function useFixtures() {
  return useQuery({
    queryKey: ['fixtures'],
    queryFn: async (): Promise<Array<Fixture>> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/getSheet?id=1Na64TAv6HYIs-PnIdu4RtJuITZ21lthhM0iXaQV2Sms&range=Sheet1`,
      );
      return await response.json();
    },
  });
}

export function FixtureList() {
  const { status, data, error } = useFixtures();
  let year = new Date().getFullYear();
  if (data) {
    const y = data[1].date.split('/')[2];
    year = 2000 + Number(y);
  }
  const isWld = data && data.some((row) => row.wld?.length);
  const isShots = data && data.some((row) => row.shots?.length);
  const isPoints = data && data.some((row) => row.points?.length);
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {`Fixtures ${year}`}
      </h2>
      <div>
        {status === 'pending' ? (
          <Skeleton className="h-[600px] w-full" />
        ) : status === 'error' ? (
          <AlertDestructive message={error.message} />
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell className="font-bold">Date</TableCell>
                  <TableCell className="font-bold">Day</TableCell>
                  <TableCell className="font-bold">Local</TableCell>
                  <TableCell className="font-bold">Home/Away</TableCell>
                  <TableCell className="font-bold">Misc</TableCell>
                  {isWld && <TableCell className="font-bold">W/L/D</TableCell>}
                  {isShots && (
                    <TableCell className="font-bold">Shots</TableCell>
                  )}
                  {isPoints && (
                    <TableCell className="font-bold">Points</TableCell>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.key}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.day}</TableCell>
                    <TableCell>{row.local}</TableCell>
                    <TableCell>{row.ha}</TableCell>
                    <TableCell>{row.misc}</TableCell>
                    {isWld && <TableCell>{row.wld}</TableCell>}
                    {isShots && <TableCell>{row.shots}</TableCell>}
                    {isPoints && <TableCell>{row.points}</TableCell>}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </div>
    </div>
  );
}
