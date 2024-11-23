import Link from "next/link";

import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section id="hero">
      <div
        className="bg-cover bg-center bg-no-repeat h-[800px] md:h-[500px]"
        style={{
          backgroundImage: "url('/group-photo.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
          <div className="container">
            <h1 className="text-7xl md:text-8xl font-bold text-white text-center font-alumni-sans">
              ERU <span className="text-yellow-600">Symposium</span> 2024
            </h1>
            <p className="text-gray-300 text-lg text-center font-semibold mt-2">
              ERU Symposium, organized by Faculty of Engineering, University of
              Moratuwa, provides a platform for researchers to showcase their
              latest research and innovations. The symposium brings academics,
              industry professionals, and students together for knowledge
              sharing and future collaboration.
            </p>
            <p className="text-gray-300 text-lg text-center font-semibold mt-6">
              December 10-11, 2024 | University of Moratuwa
            </p>
            <div className="flex flex-row justify-center gap-4 mt-8">
              {/* <Link
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FERUS2024"
                target="_blank"
              >
                <Button className="bg-red-950 text-white font-semibold py-6 px-8">
                  Submit extended abstract
                </Button>
              </Link> */}
              <Link href="#about">
                <Button className="font-semibold" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
            {/* <p className="text-gray-300 text-sm text-center mt-2">
              * You may have to create a CMT account prior to submitting the
              paper
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
