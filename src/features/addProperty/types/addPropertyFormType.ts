export type TAddAboutPropertyForm = {
  judulIklan: string;
  tipeIklan: string;
  kondisiProperti: string;
  tipeProperti: string;
  deskirpsi: string;
};

export type TBaseProperty = {
  luasBangunan: string;
  kamarMandi: string;
  kamarTidur: string;
  jumlahLantai: string;
  lahanParkir: string;
  tipeParabot: string;
  dayaListrik: string;
  fasilitasProperty: string[];
  fasilitaLuarProperty: string[];
  photos: File[];
};

export type TPropertyJualRumah = TBaseProperty & {
  hargaJual: string;
  tipeRumah: string;
  luasTanah: string;
  orientasiBangunan: string;
  tipeSertifikat: string;
};

export type TPropertySewaRumah = TBaseProperty & {
  hargaSewa: string;
  tipeRumah: string;
  tipeSewa: string;
  luasTanah: string;
  orientasiBangunan: string;
};

export type TPropertyJualApartement = TBaseProperty & {
  hargaJual: string;
  tipeApartement: string;
  tipeSertifikat: string;
};

export type TPropertySewaApartement = TBaseProperty & {
  hargaSewa: string;
  tipeApartement: string;
};

export type TAddPropertyForm = TPropertySewaRumah &
  TPropertyJualRumah &
  TPropertySewaApartement &
  TPropertyJualApartement;

export type TAddContactPropertyForm = {
  nama: string;
  email: string;
  nomorHp: string;
};

export type TSetAddress = {
  latLng: [number, number];
  geometry: number[][][];
  address: string;
};

export type TSetPhotos = {
  photos: File[];
};

export type TAddPropertyAction = {
  setAddress: ({ latLng, address, geometry }: TSetAddress) => void;
  setAboutProperty: ({
    deskirpsi,
    judulIklan,
    kondisiProperti,
    tipeIklan,
    tipeProperti,
  }: TAddAboutPropertyForm) => void;
  setDetailProperty: (detailProperty: TAddPropertyForm) => void;
  setPhotos: (photos: File[]) => void;
  setContactProperty: (contactProperty: TAddContactPropertyForm) => void;
};
