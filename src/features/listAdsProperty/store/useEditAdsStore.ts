import { create } from 'zustand';

type useEditAdsStoreType = {
  successEditAds: boolean;
  setSuccessEditAds: (successEditAds: boolean) => void;
};

const useEditAdsStore = create<useEditAdsStoreType>((set) => ({
  successEditAds: false,
  setSuccessEditAds: (successEditAds) => set({ successEditAds }),
}));

export default useEditAdsStore;
