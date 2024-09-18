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
        <div className="space-y-8">
          <div>
            <h2 className="text-xl">Chair</h2>
            <Separator className="mt-2" />
            <div className="mt-8 flex flex-col justify-center md:flex-row items-center gap-4">
              <MemberCard
                name="Dr. J.R Gamage"
                role="Chair"
                image="/team/Dr.JR_Gamage.jpg"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl">Co-Chair</h2>
            <Separator className="mt-2" />
            <div className="mt-8 flex flex-col justify-center md:flex-row items-center gap-4">
              <MemberCard
                name="Dr. Gayani"
                role="Co-Chair"
                image="/team/Dr.Gayani.jpg"
              />
              <MemberCard
                name="Dr. Kasun De Silva"
                role="Co-Chair"
                image="/team/Dr.Kasun.jpg"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl">Organizing Committee</h2>
            <Separator className="mt-2" />
            <div className="mt-8 flex flex-col justify-center md:flex-row items-center gap-4">
              <MemberCard
                name="Mr Prabhathiya Herath"
                role="Local Organizing Chair"
                image="/team/Prabhathiya.jpeg"
              />
              <MemberCard
                name="Mr Amantha Mawathage"
                role="Local Organizing Chair"
                image="/team/Amantha.jpg"
              />
              <MemberCard
                name="Mrs Ransini Gunarathna"
                role="Local Organizing Chair"
                image="/team/Ransini.jpg"
              />
              <MemberCard
                name="Tharinda Anurajeewa"
                role="Webmaster"
                image="/team/Tharinda.jpg"
              />
            </div>
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
        <Image src={image} alt={name} width={150} height={150} />
        <p className="mt-2 font-semibold">{name}</p>
        <p>{role}</p>
      </CardContent>
    </Card>
  );
}
