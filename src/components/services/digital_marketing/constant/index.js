import { shieldTick, support, truckFast } from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  // customer1,
  // customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Digital Marketing Strategy",
    price:
      "Crafting tailored plans to enhance your online presence and drive growth.",
    list: [
      { id: 0, content: "Social Media Marketing" },
      { id: 1, content: "SEO & SEM" },
      { id: 2, content: "PPC" },
    ],
  },
  {
    imgURL: shoe5,
    name: "Telemarketing & WhatsApp Marketing",
    price:
      "Leveraging direct communication channels to boost engagement and conversions.",
  },
  {
    imgURL: shoe6,
    name: "Google Ads & Analytics",
    price: "Optimizing ad spend and tracking performance for maximum ROI.",
  },
  {
    imgURL: shoe7,
    name: "Google My Business Optimization",
    price:
      "Improving your local search visibility and attracting more customers.",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Startups",
    subtext:
      "Tailored strategies to get your business off the ground and attract your first customers.",
  },
  {
    imgURL: shieldTick,
    label: "SMEs",
    subtext:
      "Scalable solutions to enhance your digital footprint and drive growth.",
  },
  {
    imgURL: support,
    label: "Solopreneurs",
    subtext:
      "Personalized services to maximize your reach and streamline your digital efforts.",
  },
];

// export const reviews = [
//   {
//     imgURL: customer1,
//     customerName: "Morich Brown",
//     rating: 4.5,
//     feedback:
//       "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
//   },
//   {
//     imgURL: customer2,
//     customerName: "Lota Mongeskar",
//     rating: 4.5,
//     feedback:
//       "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
//   },
// ];
