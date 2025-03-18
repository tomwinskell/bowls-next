import { useQuery } from '@tanstack/react-query';

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
      <h1>Fixtures</h1>
      <div>
        {status === 'pending' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <table>
              <tbody>
                {data.map((row) => (
                  <tr key={row.key}>
                    <td>{row.date}</td>
                    <td>{row.day}</td>
                    <td>{row.local}</td>
                    <td>{row.ha}</td>
                    <td>{row.misc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  );
}
