import Link from "next/link";

import { Button } from "@/components/ui/button";

function PastProceedings() {
  return (
    <main>
      <section id="hero">
        <div
          className="bg-cover bg-center bg-no-repeat h-[800px] md:h-[500px]"
          style={{
            backgroundImage: "url('/collage.png')",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
            <div className="container">
              <p className="text-center text-xl text-white font-semibold">
                Past Proceedings
              </p>
              <h1 className="text-7xl md:text-8xl font-bold text-white text-center font-alumni-sans">
                ERU <span className="text-yellow-600">Symposium</span> 2023
              </h1>
              <p className="text-gray-300 text-lg text-center font-semibold mt-6">
                December 06-07, 2023 | University of Moratuwa
              </p>
              <div className="mx-auto w-fit mt-6 flex flex-row items-center gap-4">
                <Link
                  href="http://dl.lib.uom.lk/handle/123/22458"
                  target="_blank"
                >
                  <Button className="bg-red-950 text-white font-semibold py-6 px-8">
                    View more
                  </Button>
                </Link>
                <Link
                  href="https://www.facebook.com/search/top/?q=ERU%20symposium"
                  target="_blank"
                >
                  <Button className="font-semibold" variant="outline">
                    View gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PastProceedings;
