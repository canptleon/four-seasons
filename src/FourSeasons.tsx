import React, { PropsWithChildren } from "react";
import { Spring } from "./components/Spring";
import { Winter } from "./components/Winter";
import { Autumn } from "./components/Autumn";
import { Summer } from "./components/Summer";
import "./index.css";

interface FourSeasonsProps extends PropsWithChildren {
  season: "Spring" | "Winter" | "Autumn" | "Summer" | null;
}

export const FourSeasons: React.FC<FourSeasonsProps> = ({ season, children }) => {
  return (
    <div className="four-seasons-container">
      {children}
      {season === "Spring" && <Spring />}
      {season === "Winter" && <Winter />}
      {season === "Autumn" && <Autumn />}
      {season === "Summer" && <Summer />}
    </div>
  );
};
