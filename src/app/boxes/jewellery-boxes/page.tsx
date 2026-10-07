import type { Metadata } from "next";
import JewelleryBoxesClient from "./JewelleryBoxesClient";

export const metadata: Metadata = {
  title: "Jewellery Boxes — Bespoke Luxury Packaging | CASA DI BIZ",
  description: "Explore CASA DI BIZ curated catalogue of bespoke jewellery boxes — ring boxes, earring boxes, chain boxes, pendant boxes, bracelet boxes, necklace boxes, bangle boxes and jewellery set boxes.",
  openGraph: {
    title: "Bespoke Jewellery Packaging Catalogue | CASA DI BIZ",
    description: "A curated selection of jewellery boxes crafted in distinctive materials, finishes and configurations for luxury presentation.",
    images: [{ url: "/assets/boxim.jpeg" }],
  },
};

export default function Page() {
  return <JewelleryBoxesClient />;
}
