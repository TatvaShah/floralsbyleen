import type { Brand } from "./types";

export const brand: Brand = {
  slug: "floralsbyleen",
  name: "Florals by Leen",
  handle: "@floralsbyleen",
  instagram: "https://www.instagram.com/floralsbyleen/",
  location: "Brampton",
  region: "Ontario",
  country: "CA",
  variant: "event",
  eyebrow: "Brampton · GTA",
  headline: "Fresh flowers, forever roses, and a bloom bar for the party.",
  subhead:
    "Florals by Leen is Gurleen’s Brampton studio. Fresh and eternal bouquets, gift baskets, flower boxes, boutonnières, corsages, and bridal work. DM to order. The Bloom Bar is the interactive add-on for events around the GTA.",
  orderNote:
    "Brampton florist. Fresh and eternal bouquets, gift baskets, flower boxes, boutonnières, corsages, and bridal bouquets. DM @floralsbyleen to order.",
  stats: [
    { value: "3K", label: "Instagram followers" },
    { value: "207", label: "posts on the feed" },
    { value: "Fresh", label: "and eternal bouquets" },
    { value: "Bloom Bar", label: "for GTA events" },
  ],
  styles: [
    { id: "fresh", name: "Fresh bouquet", blurb: "A handheld bunch for her, a grad, or a Tuesday." },
    { id: "eternal", name: "Eternal roses", blurb: "Preserved roses, including the wrapped forever bouquets clients post." },
    { id: "box", name: "Flower box", blurb: "A box instead of a wrap." },
    { id: "basket", name: "Gift basket", blurb: "Flowers with the extra gift." },
    { id: "bridal", name: "Bridal bouquet", blurb: "Wedding flowers, boutonnières, and corsages." },
    { id: "bar", name: "Bloom Bar", blurb: "Guests pick stems and build a bouquet at the event." },
    { id: "describe", name: "I will describe it", blurb: "Send the reference. Say fresh or eternal." },
  ],
  wraps: [
    { id: "pink", name: "Pink", blurb: "The bright wrap the feed leans on." },
    { id: "black", name: "Black", blurb: "Sharp contrast for pale roses." },
    { id: "designer", name: "Designer wrap", blurb: "A fashion-house style wrap when the occasion is a grad or a gift." },
    { id: "cream", name: "Cream", blurb: "Softer paper for bridal whites." },
  ],
  details: [
    { id: "forher", name: "For her", blurb: "The For Her highlight. No holiday required." },
    { id: "grad", name: "Graduation", blurb: "Eternal or fresh. Say the date." },
    { id: "wedding", name: "Wedding", blurb: "Bouquet, boutonnière, corsage." },
    { id: "event", name: "Bloom Bar", blurb: "An event in the GTA. Share the date and guest count." },
  ],
  fulfillments: [
    { id: "pickup", name: "Pickup in Brampton", blurb: "Ask for the pickup detail in the DM." },
    { id: "delivery", name: "GTA delivery", blurb: "Share the city. Delivery is arranged in the chat." },
    { id: "event", name: "Event setup", blurb: "The Bloom Bar comes to the party." },
  ],
  gallery: [
    {
      title: "Fresh bouquets",
      note: "Everyday and occasion bunches. Mood photo — the grid has the real wraps.",
      image: "/media/pink.jpg",
      href: "https://www.instagram.com/floralsbyleen/",
    },
    {
      title: "Eternal roses",
      note: "Forever roses, including designer wraps clients have posted.",
      image: "/media/roses.jpg",
      href: "https://www.tiktok.com/@muskaanaujla/video/7655132842804022546",
    },
    {
      title: "Bloom Bar",
      note: "Guests build a bouquet at the event. The reel is the real setup.",
      image: "/media/sun.jpg",
      href: "https://www.instagram.com/reel/DcmfjvuOqUH/",
    },
    {
      title: "Wedding pieces",
      note: "Bridal bouquets, boutonnières, and corsages.",
      image: "/media/wedding.jpg",
      href: "https://www.instagram.com/floralsbyleen/",
    },
  ],
  occasions: [
    { name: "For her", note: "A bouquet because she is her.", image: "/media/blush.jpg" },
    { name: "Graduation", note: "Fresh or eternal, with a wrap that feels like the day.", image: "/media/peony.jpg" },
    { name: "The Bloom Bar", note: "A flower bar for a GTA event. Guests leave with a bunch they made.", image: "/media/garden.jpg" },
  ],
  faqs: [
    {
      q: "How do I order?",
      a: "DM @floralsbyleen. The bio says DM to order. This site copies a note and opens that chat.",
    },
    {
      q: "Who is the florist?",
      a: "Gurleen, @k_gurleennnn. The studio name is Florals by Leen, in Brampton.",
    },
    {
      q: "What is the Bloom Bar?",
      a: "An interactive flower bar for events. Guests choose stems and build a bouquet. It has been popping up around the GTA.",
    },
    {
      q: "Fresh or eternal?",
      a: "Both. Say which you want. Eternal roses are preserved. Fresh bouquets are the everyday and event work.",
    },
    {
      q: "Do you list prices here?",
      a: "No. Size, flower type, and whether it is an event change the quote. That conversation stays in the DM.",
    },
  ],
  about: [
    "Florals by Leen is Gurleen’s Brampton studio: fresh bouquets, eternal roses, gift baskets, flower boxes, boutonnières, corsages, and bridal bouquets.",
    "The Bloom Bar is the event piece. Guests pick flowers and leave with a bouquet they wrapped themselves. It has shown up across the GTA, including coverage from local Peel accounts.",
    "Orders start in Instagram messages to @floralsbyleen. This website does not check out and does not invent a price list.",
  ],
  policies: [
    "DM to order. No payment on this site.",
    "Brampton studio, GTA delivery and events by arrangement.",
    "Fresh and eternal are different products. Say which you mean.",
  ],
  quote: {
    text: "Add a Bloom Bar. Let the room make the bouquets.",
    by: "Brampton · DM @floralsbyleen",
  },
  photoCredit: "Mood photographs are stock florals. Finished work and the Bloom Bar are on the public Instagram account.",
};
