import { ConductTable } from "@/components/conduct/conduct.table";

export default function ConductPage(): React.JSX.Element {
  return (
    <>
      <div className="mb-5 space-y-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Code of Conduct
        </h2>
        <p>
          The BDA have, in conjunction with the National Governing Bodies of
          Bowls, set these standards that apply to everyone involved in the
          sport including staff, club officials, coaches volunteers, players and
          spectators. This Code of Conduct has been produced to protect everyone
          in the sport and to ensure that everyone can enjoy the sport of bowls
          in a safe and inclusive environment.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          R.E.S.P.E.C.T.
        </h3>
        <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-foreground">
          <li className="leading-relaxed">
            Respect all participants and decisions
          </li>
          <li className="leading-relaxed">Encourage everyone Sportsmanship</li>
          <li className="leading-relaxed">
            Play for enjoyment Educate and be knowledgeable
          </li>
          <li className="leading-relaxed">Conduct yourself courteously</li>
          <li className="leading-relaxed">Treat everyone fairly</li>
        </ul>

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Key Principles of Respectful Behaviour
        </h3>
        <ConductTable />
        <p className="leading-7">
          <span>You can also </span>
          <a
            href="/conduct.pdf"
            target="_blank"
            className="font-semibold underline"
          >
            click this link
          </a>{" "}
          <span> to download a PDF copy of the code of conduct.</span>
        </p>
      </div>
    </>
  );
}
