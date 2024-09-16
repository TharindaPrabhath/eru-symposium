import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="mt-20 py-24">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row items-start justify-evenly">
          <div>
            <div className="flex flex-row items-center gap-4">
              <Image
                src="/logo.png"
                alt="ERU Symposium 2024"
                width={100}
                height={100}
              />
              <h2 className="text-4xl font-semibold font-alumni-sans">
                ERU Symposium
              </h2>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Engineering Research Unit (ERU) of the University of Moratuwa was
              set up in the late 80s with a view to disseminate the knowledge
              gained through research carried out at the Faculty of Engineering
              to the Scientific Community at large, and to promote research
              among Faculty members and Graduate Students.
            </p>
          </div>

          <div className="">
            <h2 className="text-2xl font-semibold font-alumni-sans">Links</h2>
            <ul className="mt-4 text-md space-y-2 text-gray-600">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#timeline">Timeline</Link>
              </li>
              <li>
                <Link href="#guidelines">Guidelines</Link>
              </li>
              <li>
                <Link href="#awards">Awards</Link>
              </li>
              <li>
                <Link href="#team">Team</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-2xl font-semibold font-alumni-sans">Contact</h2>
            <p className="mt-4 text-sm text-gray-600">
              Engineering Research Unit (ERU)
              <br />
              Faculty of Engineering
              <br />
              University of Moratuwa
              <br />
              Katubedda, Moratuwa
              <br />
              Sri Lanka
              <br />
              <br />
              Email: mawathagesa.19@uom.lk <br />
              Phone: +94 11 265 0301 <br />
              Ext: 4531 <br />
            </p>
          </div>
        </div>
        <Separator className="my-10" />
        <p className="text-center text-gray-600">
          &copy; 2024 ERU Symposium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
