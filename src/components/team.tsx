import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Team() {
  return (
    <section id="team" className="mt-36">
      <div className="container">
        <h2 className="text-6xl md:text-8xl font-bold text-center font-alumni-sans">
          Team
        </h2>
        <div>
          <h2 className="text-xl">Chair</h2>
          <Separator className="mt-2" />
          <div className="mt-8">
            <MemberCard
              name="Dr. J.R Gamage"
              role="Chair"
              image="/team/Dr.JR_Gamage.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

function MemberCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <Card className="max-w-xs">
      <CardHeader />
      <CardContent className="flex flex-col items-center">
        <Image src={image} alt={name} width={200} height={200} />
        <p className="mt-2 font-semibold">{name}</p>
        <p>{role}</p>
      </CardContent>
    </Card>
  );
}
