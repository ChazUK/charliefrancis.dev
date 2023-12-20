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
        src="/green-oil.mp4"
      />
      <main className="flex h-dvh w-full flex-col items-center justify-center gap-8 bg-black mix-blend-darken">
        <h1 className="text-9xl text-white">
          Charlie
          <br />
          Francis
        </h1>
        <Scramble lines={adjectives} pause={2000} />
      </main>
    </Fragment>
  );
}
