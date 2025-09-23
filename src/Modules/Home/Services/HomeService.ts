import carsDb, { CarCategory } from "../../../db/carsDb";

export class HomeService {
  static getCategories() {
    const data = carsDb.map((item) => item.category);
    return Array.from(new Set(data));
  }

  static getCars(category?: CarCategory | null) {
    if (category) {
      return carsDb.filter((item) => item.category === category);
    }
    return carsDb;
  }
}


