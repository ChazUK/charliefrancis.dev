import Scramble from "@/components/Scramble";
import { Fragment } from "react";

export default function Home() {
  const adjectives = ["Developer", "Engineer", "Creative"];

  return (
    <Fragment>
      <video
        className="fixed left-0 top-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/green-oil.mp4"
      />
      <main className="flex h-dvh w-full flex-col items-center justify-center gap-8 bg-black mix-blend-darken selection:bg-white selection:text-black">
        <h1 className="text-5xl text-white md:text-9xl">
          Charlie
          <br />
          Francis
        </h1>
        <Scramble lines={adjectives} pause={2000} />
      </main>
    </Fragment>
  );
}
