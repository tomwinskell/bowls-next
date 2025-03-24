import Slider from "../components/slider/Slider";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <p>
        Mundesley Haig Bowls Club is an outdoor only bowls club in Mundesley in
        North Norfolk. We have been in existence since 1929. Our green is an EBA
        size green with six rinks, all league games are played as EBF sized
        greens.
      </p>
      <p>
        We have at present over 40 members and play in a number of leagues both
        afternoons and evenings. Twice a week we have social roll-ups to which
        everyone is welcome to come, including visitors and holidaymakers. Sets
        of bowls are available for visitors to use and for new members to try
        out.
      </p>
      <p>
        Our present fees are £30 per person per annum for bowling members and £5
        for social members. We currently have a pavilion adjacent to the green
        and a large car park.
      </p>
      <p>
        We are open for bowling from the end of April to the end of September.
        Our social roll-ups are on Tuesday afternoon’s from 2pm to 4 pm and
        Sundays from 10am to 12 noon and cost £1 per member and £2.50 for
        visitors Again all welcome.
      </p>
      <Slider />
    </div>
  );
}
