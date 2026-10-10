import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Do</TableHead>
          <TableHead>Don&apos;t</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {statements.map((statement, index) => (
          <TableRow key={`${statement.do}-${index}`}>
            <TableCell>{statement.do}</TableCell>
            <TableCell>{statement.dont}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
