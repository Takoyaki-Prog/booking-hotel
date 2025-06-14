import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <HeaderSection title="About Us" subTitle="Lorem ipsum dolor sit amet." />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image src="/about.svg" width={650} height={579} alt="About image" />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who we Are
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              adipisci facere quas quisquam rem aut labore doloribus sit
              possimus a.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi mollitia ipsum non! Veniam, sit. Ut.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Amet, fugiat? Dolorum recusandae autem voluptas enim cum
                    quod consectetur, numquam beatae?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
