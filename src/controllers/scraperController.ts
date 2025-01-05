import { Request, Response, NextFunction } from "express";
import { scrapeProperties } from "../services/scrapy";

export const scrapePropertiesForSale = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const urls = ["https://nigeriapropertycentre.com/for-sale/houses/lagos/victoria-island?selectedLoc=1&q=for-sale+houses+lagos+victoria-island", "https://nigeriapropertycentre.com/for-sale/houses/lagos/lekki?selectedLoc=1&q=for-sale+houses+lagos+lekki"];

    const properties = await scrapeProperties(urls);

    res.status(200).json({ message: "Successfully scrape properties for sale and saved to database", data: properties });
  } catch (error) {
    next(error);
  }
};
