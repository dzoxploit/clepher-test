"use client";

import Image from "next/image";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="text-blue-gray mb-4 lg:text-5xl leading-tight text-3xl">
            Welcome to Intraday Stock Monitoring <br />
          </h1>
        </div>
        <div className="h-full">
          <Image
            width={1024}
            height={1024}
            alt="team work"
            src="/bar_graph_005.jpg"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
