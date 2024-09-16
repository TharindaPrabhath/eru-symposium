import Image from "next/image";

function About() {
  return (
    <section id="about" className="mt-36">
      <div className="container">
        <h2 className="text-6xl md:text-8xl font-bold text-center font-alumni-sans">
          About ERU Symposium
        </h2>
        <div className="flex flex-col justify-center gap-4 items-center mt-10">
          <Image src="/eru-logo.png" alt="ERU logo" width={250} height={200} />
          <p className="text-gray-600 text-lg text-center font-semibold mt-4">
            ERU Research Symposium-2024 is organized as an event parallel to the
            University of Moratuwa Research Week. ERU Symposium provides an
            excellent opportunity for academics, industry practitioners, and
            students to showcase their research.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
