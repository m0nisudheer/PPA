// import { create } from "zustand";

// interface DonationState {
//   amount: string;
//   title: string;
//   description: string;

//   setDonation: (data: {
//     amount: string;
//     title: string;
//     description: string;
//   }) => void;

//   clearDonation: () => void;
// }

// export const useDonationStore = create<DonationState>((set) => ({
//   amount: "",
//   title: "",
//   description: "",

//   setDonation: (data) =>
//     set({
//       amount: data.amount,
//       title: data.title,
//       description: data.description,
//     }),

//   clearDonation: () =>
//     set({
//       amount: "",
//       title: "",
//       description: "",
//     }),
// }));

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DonationState {
  amount: string;
  title: string;
  description: string;

  setDonation: (data: {
    amount: string;
    title: string;
    description: string;
  }) => void;

  clearDonation: () => void;
}

export const useDonationStore = create<DonationState>()(
  persist(
    (set) => ({
      amount: "",
      title: "",
      description: "",

      setDonation: (data) =>
        set({
          amount: data.amount,
          title: data.title,
          description: data.description,
        }),

      clearDonation: () =>
        set({
          amount: "",
          title: "",
          description: "",
        }),
    }),
    {
      name: "donation-store", 
    }
  )
);