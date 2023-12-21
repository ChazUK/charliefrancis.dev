import Scramble from "@/components/Scramble";
import { Fragment } from "react";

export default function Home() {
  const adjectives = ["Developer", "Engineer", "Creative"];

  return (
    <Fragment>
      <main className="flex h-dvh w-full items-center justify-center gap-8 bg-black selection:bg-white selection:text-black">
        <div className="relative w-fit">
          <video
            className="absolute left-0 top-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/green-oil.mp4"
          />
          <div className="flex flex-col items-center justify-center gap-8 bg-black mix-blend-darken">
            <h1 className="text-5xl text-white md:text-9xl">
              Charlie
              <br />
              Francis
            </h1>
            <Scramble lines={adjectives} pause={2000} />
          </div>
        </div>
      </main>
    </Fragment>
  );
}
