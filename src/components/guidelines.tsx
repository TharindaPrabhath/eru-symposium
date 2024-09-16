import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Guidelines() {
  return (
    <section id="guidelines" className="mt-36">
      <div className="container">
        <h2 className="text-6xl md:text-8xl font-bold text-center font-alumni-sans">
          Guidelines
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-3">
          <GuidelineCard
            title="Extended Abstract"
            description="The extended abstracts should be of A4 size - Two (2) pages, prepared according to this template"
            link="https://dms.uom.lk/s/As6TSFRQoABWmTR"
          />
          <GuidelineCard
            title="Poster"
            description="The posters should be of A1 size - Portrait, adhering to the given guidelines and the template"
            link="https://dms.uom.lk/s/As6TSFRQoABWmTR"
          />
          <GuidelineCard
            title="Sample Poster Design"
            description="You can also refer to the, sample poster design"
            link="https://dms.uom.lk/s/As6TSFRQoABWmTR"
          />
        </div>

        <div className="mt-10 flex flex-col justify-center items-center">
          <p className="text-lg font-semibold">
            ERU 2024 accepts extended abstracts of research under following
            tracks
          </p>
          <ul className="list-disc list-inside mt-4 text-lg space-y-4">
            <li>Chemical and Process Engineering</li>
            <li>Civil Engineering</li>
            <li>Computer Science and Engineering</li>
            <li>Earth Resources Engineering</li>
            <li>Electrical Engineering</li>
            <li>Electronic and Telecommunication Engineering</li>
            <li>Material Science and Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Supply Chain Management and Logistics</li>
            <li>Textile and Apparel Engineering</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Guidelines;

function GuidelineCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter>
        <Link href={link} target="_blank">
          <Button variant="outline">Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
