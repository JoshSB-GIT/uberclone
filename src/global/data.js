export const filterData = [
  { name: "Ride", image: require("../../assets/ride.png"), id: "0" },
  { name: "Food", image: require("../../assets/food.png"), id: "1" },
  { name: "Package", image: require("../../assets/package.png"), id: "2" },
  { name: "Reserve", image: require("../../assets/reserve.png"), id: "3" },
];

export const rideData = [
  { street: "32 Olivia Rd", area: "Klipfontein 83-Ir,Boksburg", id: "0" },
  { street: "Hughes Industrial Park", area: "Hughes,Boksburg", id: "1" },
  {
    street: "32 Olivia Road",
    area: " East Rand,Ekurhuleni,Gauteng,1459",
    id: "2",
  },
  { street: "Total Boksburg", area: "35 Atlas Rd,Anderbolt,Boksburg", id: "3" },
  { street: "179 8th Ave", area: "Bezuidenhout Valley,Johannesburg", id: "4" },
];

export const carTypeData = [
  {
    title: "Popular",
    data: [
      {
        name: "Uber Go",
        group: 2,
        price: 7,
        image: require("../../assets/uberGo.png"),
        note: "Affordable.compact rides",
        promotion: 5,
        time: "20:19",
        id: "0",
      },
      {
        name: "UberX",
        group: 3,
        price: 5.5,
        image: require("../../assets/uberX.png"),
        note: "Affordable everyday trips",
        promotion: 0,
        time: "20:20",
        id: "1",
      },
      {
        name: "Connect",
        group: 0,
        price: 12.6,
        image: require("../../assets/uberConnect.png"),
        note: "Send and receive packages",
        promotion: 10,
        time: "20:33",
        id: "2",
      },
    ],
  },

  {
    title: "Premium",
    data: [
      {
        name: "Black",
        group: 3,
        price: 17.4,
        image: require("../../assets/uberBlack.png"),
        note: "Premium trips in luxury cars",
        promotion: 0,
        time: "20:31",
        id: "3",
      },
      {
        name: "Van",
        group: 6,
        price: 22.3,
        image: require("../../assets/uberVan.png"),
        note: "Rides for groups up to 6",
        promotion: 12,
        time: "20:31",
        id: "4",
      },
    ],
  },

  {
    title: "More",
    data: [
      {
        name: "Assist",
        group: 3,
        price: 35.3,
        image: require("../../assets/uberAssist.png"),
        note: "Special assistance from certified drivers",
        promotion: 26,
        time: "20:25",
        id: "5",
      },
    ],
  },
];

export const requestData = [
  {
    name: "For Me",
    id: 0,
  },
  {
    name: "For Someone",
    id: 1,
  },
];

export const rideOptions = [
  { name: "Personal", icon: "account", id: "0" },
  { name: "Business", icon: "briefcase", id: "1" },
];

export const paymentOptions = [
  { image: require("../../assets/visaIcon.png"), text: "Visa ...0476" },
  { image: require("../../assets/cashIcon.png"), text: "Cash" },
];

export const availableServices = [
  "Uber Go",
  "UberX",
  "Uber connect",
  "Uber Black",
  "Uber Van",
  "Uber Assist",
];

export const carsAround = [
  { latitude: 10.991591953213012, longitude: -74.81013567479854 },
  { latitude: 10.992129085602276, longitude: -74.80976016555515 },
  { latitude: 10.991634081278898, longitude: -74.81087596444972 },
  { latitude: 10.991433972912398, longitude: -74.80962069069334 },
  { latitude: 10.992603025133509, longitude: -74.8103073361669 },
];
