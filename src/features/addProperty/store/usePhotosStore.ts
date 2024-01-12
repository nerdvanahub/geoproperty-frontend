import { create } from 'zustand';
import { AddPhotoType } from '../types/addPhotoType';

const usePhotoStore = create<AddPhotoType>((set) => ({
  photos: [],
  addPhotos: (photos) =>
    set((state) => ({ photos: [...state.photos, ...photos] })),
  removePhoto: (photo) =>
    set((state) => ({
      photos: state.photos.filter((item) => item !== photo),
    })),
  resetPhotos: () => set({ photos: [] }),
}));

export default usePhotoStore;
