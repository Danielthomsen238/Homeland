import { create } from "zustand";
import axios from "axios";

export interface FavoriteState {
  favorites: [];
  setFavorites: (home_id: any, token: any) => void;
  deleteFavorites: (home_id: any, token: any) => void;
  getFavorites: (token: any) => Promise<void>;
}

export const useFavorite = create(
  (set): FavoriteState => ({
    favorites: [],
    setFavorites: (home_id, token) =>
      set(async (state: any) => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axios.post(`https://api.mediehuset.net/homelands/favorites`, { home_id }, payload);
        return state.getFavorites(token);
      }),
    deleteFavorites: (home_id, token) =>
      set(async (state: any) => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axios.delete(`https://api.mediehuset.net/homelands/favorites/${home_id}`, payload);
        return state.getFavorites(token);
      }),
    getFavorites: async (token: any) => {
      const payload = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const items = await axios.get(`https://api.mediehuset.net/homelands/favorites`, payload);

      set({ favorites: items.data.items });
    },
  })
);
