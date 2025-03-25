import { useQuery } from '@tanstack/react-query';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/fixtures.list/table';

type Fixture = {
  key: number;
  date: string;
  day: string;
  local: string;
  ha: string;
  misc: string;
};

function useFixtures() {
  return useQuery({
    queryKey: ['fixtures'],
    queryFn: async (): Promise<Array<Fixture>> => {
      const response = await fetch(
        `https://bowls-next.web.app/v1/getSheet?id=1Na64TAv6HYIs-PnIdu4RtJuITZ21lthhM0iXaQV2Sms&range=Sheet1`
      );
      return await response.json();
    },
  });
}

export function FixtureList() {
  const { status, data, error, isFetching } = useFixtures();
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Fixtures 2025
      </h2>
      <div>
        {status === 'pending' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <Table>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.key}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.day}</TableCell>
                    <TableCell>{row.local}</TableCell>
                    <TableCell>{row.ha}</TableCell>
                    <TableCell>{row.misc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  );
}
