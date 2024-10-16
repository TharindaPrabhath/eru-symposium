const Blocks = [
  {
    date: "15th October 2024",
    extendedDate: "22nd October 2024",
    title: "Extended Abstract Submission",
  },
  {
    date: "15th November 2024",
    title: "Acceptance Notification",
  },
  {
    date: "28th November 2024",
    title: "Final Submission & Registration",
  },
  {
    date: "10th - 11th December 2024",
    title: "Symposium ",
  },
];

function Timeline() {
  return (
    <section id="timeline" className="mt-36">
      <div className="container">
        <h2 className="text-6xl md:text-8xl font-bold text-center font-alumni-sans">
          Timeline
        </h2>
        <div className="flex flex-col justify-center gap-4 items-center mt-10">
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 grid gap-10">
            {Blocks.map((block) => (
              <Block key={block.date} {...block} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

function Block({
  date,
  title,
  extendedDate,
}: {
  date: string;
  title: string;
  extendedDate?: string;
}) {
  return (
    <div className="grid gap-1 text-sm relative">
      <div className="aspect-square w-5 bg-primary rounded-full absolute left-0 translate-x-[-33.5px] z-10 top-1" />
      {extendedDate ? (
        <div className="text-teal-700 font-semibold">
          <span className="mr-2 line-through opacity-70">{date}</span>
          {extendedDate}
        </div>
      ) : (
        <div className="text-teal-700 font-semibold">{date}</div>
      )}
      <div className="font-semibold text-lg text-yellow-600">{title}</div>
    </div>
  );
}
