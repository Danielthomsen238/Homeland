import { create } from "zustand";
import axios from "axios";

export interface Property {
  address: string;
  city: string;
  cost: string;
  energy_label_name: string;
  floor_space: string;
  id: string;
  images: PropertyImage[];
  num_clicks: string;
  num_rooms: string;
  payout: string;
  price: number;
  type: string;
  year_construction: string;
  zipcode: string;
}

export interface PropertyImage {
  id: string;
  author: string;
  description: string;
  file: string;
  is_main: string;
  filename: {
    medium: string;
    large: string;
  };
}

export interface PropertyState {
  type: string[];
  homes: Property[];
  getHomes: () => Promise<void>;
}

export const useHomes = create(
  (set): PropertyState => ({
    type: [],
    homes: [],
    getHomes: async () => {
      const items = await axios.get(`https://api.mediehuset.net/homelands/homes`);
      const sortedItems = items.data.items.sort((a: Property, b: Property) => {
        return a.price - b.price;
      });
      const types = Array.from(new Set(sortedItems.map((item: any) => item.type)));
      set({ homes: sortedItems, type: types });
    },
  })
);
