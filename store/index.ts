import { create } from "zustand";
import { LocationStore, DriverStore, MarkerData } from "@/types/type";

export const useLocationStore = create<LocationStore>((set) => ({
  userLocation: null,
  userLongitude: null,
  userLatitude: null,
  userAddress: null,
  destinationLongitude: null,
  destinationLatitude: null,
  destinationAddress: null,
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set((state) => ({
      ...state,
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }));
  },
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set((state) => ({
      ...state,
      destinationLatitude: latitude,
      destinationLongitude: longitude,
      destinationAddress: address,
    }));
  },
}));

export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [],
  selectedDriver: null,
  setSelectedDriver: (driverId: number) => {
    set(() => ({ selectedDriver: driverId }));
  },
  setDrivers: (drivers: MarkerData[]) => {
    set(() => ({ drivers }));
  },
  clearSelectedDriver: () => {
    set(() => ({ selectedDriver: null }));
  },
}));
