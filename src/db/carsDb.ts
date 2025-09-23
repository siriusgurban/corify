import car1 from "../assets/images/cars/car-1.png";
import car2 from "../assets/images/cars/car-2.png";
import car3 from "../assets/images/cars/car-3.png";
import car4 from "../assets/images/cars/car-4.png";
import car5 from "../assets/images/cars/car-5.png";
import car6 from "../assets/images/cars/car-6.png";
import car7 from "../assets/images/cars/car-7.png";
import car8 from "../assets/images/cars/car-8.png";
import bmw from "../assets/images/bmw.png";
import cysler from "../assets/images/cysler.png";


interface ISliderData {
  id: number;
  edition: string;
  name: string;
  pack: string;
  packSeries: string;
  monthlyPrice: number;
  image: string;
}

export const sliderData: ISliderData[] = [
  {
    id: 1,
    edition: "LIMITED EDITION",
    name: "BMW X6",
    pack: "Cayman",
    packSeries: "S",
    monthlyPrice: 225,
    image: bmw,
  },
  {
    id: 2,
    edition: "PREMIUM EDITION",
    name: "Cysler",
    pack: "Sport",
    packSeries: "A",
    monthlyPrice: 340,
    image: cysler,
  },
];

export interface ICarsDb {
  id: number;
  title: string;
  category: CarCategory;
  price: string;
  carImg: string;
}

export enum CarCategory {
  HATCHBACK = "Hatchback",
  SEDAN = "Sedan",
  COUPE = "Coupe",
  PICKUPTRUCK = "Pickup Truck",
  SPORTCARS = "Sport Cars",
}

const carsDb: ICarsDb[] = [
  {
    id: 1,
    title: "2015 Toyota Elantra 2.5L",
    category: CarCategory.HATCHBACK,
    price: "5,500",
    carImg: car1,
  },
  {
    id: 2,
    title: "Chevrolet Camaro 2018",
    category: CarCategory.SPORTCARS,
    price: "9,500",
    carImg: car2,
  },
  {
    id: 3,
    title: "2016 Mini Couper",
    category: CarCategory.SEDAN,
    price: "33,400",
    carImg: car3,
  },
  {
    id: 4,
    title: "2013 Acura Sport Version",
    category: CarCategory.HATCHBACK,
    price: "5,600",
    carImg: car4,
  },
  {
    id: 5,
    title: "Ford Mustang",
    category: CarCategory.COUPE,
    price: "12,000",
    carImg: car5,
  },
  {
    id: 6,
    title: "2012 Chevrolet Pick Truck 3.5L",
    category: CarCategory.PICKUPTRUCK,
    price: "7,700",
    carImg: car6,
  },
  {
    id: 7,
    title: "2012 Toyota Pickup Truck i7 ",
    category: CarCategory.PICKUPTRUCK,
    price: "4,250",
    carImg: car7,
  },
  {
    id: 8,
    title: "2019 Toyota Camry SE 350 ",
    category: CarCategory.SEDAN,
    price: "5,050",
    carImg: car8,
  },
];

export default carsDb;
