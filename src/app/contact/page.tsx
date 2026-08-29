import type { Metadata } from "next";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact CASA DI BIZ — Luxury Packaging Enquiries & Quotes",
  description: "Request a quotation for luxury boxes, bags, pouches, wraps and ribbons. Call, email or WhatsApp the CASA DI BIZ packaging team in Dubai.",
  openGraph: {
    title: "Contact CASA DI BIZ — Luxury Packaging Enquiries",
    description: "Share your packaging requirements and our team will build a quotation around your brand.",
  },
};

export default function Page() {
  return <ContactPage />;
}
