import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const GIFTING_CATEGORIES: Record<
  string,
  { title: string; short: string; long: string; image: string }
> = {
  "gift-cards": {
    title: "Gift Cards",
    short: "Foiled cards, thank-you notes and message inserts in your brand stock.",
    long: "Thick, tactile card stock printed with your message and monogram — folded notes, flat inserts and gift cards that make the box feel personal.",
    image: "/assets/cats/giftings.png",
  },
  "tissue-paper": {
    title: "Tissue Paper",
    short: "Acid-free tissue in solid colours, prints and custom logo repeats.",
    long: "Soft, acid-free tissue in your palette — plain, printed or logo-repeat — the whisper-quiet first layer every premium unboxing needs.",
    image: "/assets/cats/giftings.png",
  },
  "stickers-seals": {
    title: "Stickers & Seals",
    short: "Wax-look seals, foiled labels and branded stickers that close the story.",
    long: "Die-cut stickers, embossed seals and foiled labels in any shape — the finishing detail that holds tissue in place and signs off your packaging.",
    image: "/assets/allllllimm.jpeg",
  },
  "fillers-accessories": {
    title: "Fillers & Accessories",
    short: "Shreds, inserts, wool fill and the small parts that hold a gift together.",
    long: "Paper shred, crinkle fill, foam and card inserts, tags, twine and ribbon accessories — practical protection presented as part of the design.",
    image: "/assets/giftim.jpeg",
  },
};

export const metadata: Metadata = {
  title: "Gifting Essentials — Cards, Tissue, Seals & Fillers | CASA DI BIZ",
  description: "Premium gifting essentials from CASA DI BIZ — gift cards, tissue paper, stickers & seals and fillers that complete a luxury unboxing.",
};

export default function GiftingPage() {
  redirect("/collections/corporate-collection");
}
