export type AddPhotoType = {
  photos: File[];
  addPhotos: (photos: File[]) => void;
  removePhoto: (photo: File) => void;
  resetPhotos: () => void;
};
