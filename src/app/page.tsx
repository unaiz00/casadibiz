import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "CASA DI BIZ | Luxury Packaging & Gifting Solutions",
  description: "Custom luxury packaging, boxes, bags, pouches, wraps, and ribbons crafted for premium brands across the Gulf.",
};

export default function Page() {
  return <HomeClient />;
}