import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const statements = [
  {
    do: "Respect all players, coaches, officials, volunteers and spectators",
    dont: "Participate under the influence of drugs or alcohol",
  },
  {
    do: "Participate in the right spirit – the sport should be fun at all levels",
    dont: "Use foul, abusive, threatening or discriminatory language or gestures",
  },
  {
    do: "Take reasonable measures to keep yourself and others safe",
    dont: "Show dissent towards officials and their decisions",
  },
  {
    do: "Promote the sport in the best possible light through your actions and behaviour",
    dont: "Discriminate on the grounds of any of the protected characteristics identified in the Equality Act 2010",
  },
  {
    do: "Abide by the rules/regulations of the sport, and any additional competition rules",
    dont: "Publicly criticise or engage in demeaning descriptions of others, including online",
  },
  {
    do: "Abide by the policies of the sport and its National Governing Bodies",
    dont: "Engage in any behaviour that constitutes abuse as identified in the Safeguarding in Bowls Policies",
  },
  {
    do: "Speak to someone if you are concerned",
    dont: "Keep your concerns about abuse or poor practice that any of this code is being broken secret",
  },
];

export const ConductTable = () => {
  return (
    // Outer div wrapper prevents layout breaking on small mobile viewports
    <div className="w-full overflow-x-auto rounded-md border bg-background">
      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow>
            {/* Split the page width exactly 50/50 for each column */}
            <TableHead className="w-1/2">Do</TableHead>
            <TableHead className="w-1/2">Don&apos;t</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statements.map((statement, index) => (
            <TableRow key={`${statement.do}-${index}`}>
              <TableCell className="align-top whitespace-normal break-words py-3">
                {statement.do}
              </TableCell>
              <TableCell className="align-top whitespace-normal break-words py-3">
                {statement.dont}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
