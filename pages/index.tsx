import Button from "components/Button";
import Container from "components/Container";
import Navbar from "components/Navbar";
import { skills } from "data/skills";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <div className="border px-16 py-10 rounded bg-gray-50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="order-2 md:order-1">
                <h1 className="text-4xl text-center md:text-left font-bold leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-primary-500">Ashik Chapagain</span>
                </h1>
                <p className="mt-4 text-center md:text-left text-lg leading-relaxed">
                  I&apos;m a{" "}
                  <span className="text-primary-500 font-bold tracking-wide">
                    full stack
                  </span>{" "}
                  web developer.
                </p>
                <div className=" justify-center md:justify-start flex items-center mt-4 space-x-3">
                  <Button href="https://fiverr.com">Hire Me</Button>
                  <Link href="/projects">
                    <a className="underline flex items-center space-x-2 text-primary-500">
                      <span>View my projects</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className="justify-center md:justify-start mt-4 flex space-x-3">
                  <a
                    href="https://facebook.com"
                    className="text-gray-600 transition-colors hover:text-blue-400 text-xl"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    href="https://twitter.com/ChapagainAshik"
                    className="text-gray-600 transition-colors hover:text-blue-400 text-xl"
                  >
                    <BsTwitter />
                  </a>
                  <a
                    href="https://github.com/projectashik"
                    className="text-gray-600 transition-colors hover:text-gray-900 text-xl"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
              <span className="order-1 mb-4 md:order-2 inline-flex justify-center rounded-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Ashik Chapagain"
                  width={200}
                  className="rounded-full"
                  height={200}
                />
              </span>
            </div>
          </div>
        </Container>
      </main>
      <section>
        <Container>
          <span className="uppercase mt-5 text-primary-500 tracking-wider text-sm font-bold">
            Skills
          </span>
          <h2 className="text-2xl font-semibold">What I know?</h2>
          <div className="grid grid-cols-6 gap-6 my-5">
            {skills.map((skill, index) => {
              return (
                <a
                  className="inline-flex flex-col hover:scale-125 hover:transform transition-all hover:border rounded hover:p-2 bg-white"
                  href={skill.link}
                  key={index}
                >
                  <Image
                    src={skill.image}
                    width={200}
                    height={200}
                    alt={skill.title}
                  />
                </a>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
