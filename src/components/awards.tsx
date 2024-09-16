import Image from "next/image";

function Awards() {
  return (
    <section id="awards" className="relative mt-36 bg-yellow-600 py-24">
      <Image
        src="/medal.svg"
        alt="Medal"
        width={500}
        height={500}
        className="absolute top-0 right-0 z-0 opacity-25"
      />
      <div className="container ">
        <h2 className="text-6xl md:text-8xl font-bold text-center font-alumni-sans">
          Awards
        </h2>
        <div className="flex flex-col gap-4 text-lg text-center mt-10 font-semibold">
          <p>Proceedings will be published with ISSN: 3051-4894</p>
          <p>
            The abstracts will be published with a DOI in the University of
            Moratuwa Library Website
          </p>
          <p>
            Best Extended Abstract Award will be presented for the best extended
            abstract in each track
          </p>
          <p>
            Best Poster Award will be presented for the best poster in each
            track
          </p>
          <p>Certificates will be awarded for all the presenters</p>
        </div>
      </div>
    </section>
  );
}

export default Awards;
