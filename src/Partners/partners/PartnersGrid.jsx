import * as React from "react";
import { PartnerCard } from "./components/PartnerCard";
import { partnersData } from "./data/partnersData";

export function PartnersGrid() {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-start rounded-2xl">
      {partnersData.map((partner, index) => (
        <PartnerCard
          key={index}
          category={partner.category}
          title={partner.title}
          description={partner.description}
          imageSrc={partner.imageSrc}
          iconSrc={partner.iconSrc}
        />
      ))}
    </div>
  );
}
