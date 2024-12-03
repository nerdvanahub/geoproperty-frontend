import { create } from 'zustand';
import { IOverlapsAreaStore } from '../types/overlapsAreaType';

const useOverlapStore = create<IOverlapsAreaStore>((set) => ({
  overlaps: false,
  setOverlaps: (overlaps) => set({ overlaps }),
}));

export default useOverlapStore;
