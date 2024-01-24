import React from "react";
import { Carousel } from "../../components/Carousel";
import { DateCard } from "../../components/DateCard";
import { RedesCard } from "../../components/RedesCard";

export default function Home() {
  return (
    <div>
      <RedesCard />
      <Carousel />
      <DateCard />
    </div>
  );
}
