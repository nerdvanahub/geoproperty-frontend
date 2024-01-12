import { create } from 'zustand';
import { Property } from '../../../types/propertyType';

interface IUseDetailStore extends Property {
  setDetail: (property: Property) => void;
}

const useDetailStore = create<IUseDetailStore>((set) => ({
  id: 0,
  uuid: '',
  user_id: 0,
  images: [
    {
      id: 0,
      image: '',
      property_id: 0,
    },
  ],
  title_ads: '',
  type_ads: '',
  type_property: '',
  address: '',
  condition: '',
  description: '',
  price: 0,
  rent_type: '',
  building_type: '',
  surface_area: 0,
  building_area: 0,
  bath_rooms: 0,
  bed_rooms: 0,
  floors: 0,
  park_area: 0,
  furniture: false,
  user: {
    Email: '',
    Name: '',
    Id: 0,
  },
  electrical_power: 0,
  oriented: '',
  certificate: '',
  facility_in_door: [''],
  facility_out_door: [''],
  full_name: '',
  phone_number: '',
  email: '',
  kelurahan: '',
  kecamatan: '',
  city: '',
  center_point: [0, 0],
  geometry: [[[0]]],
  setDetail: (property) => set({ ...property }),
}));

export default useDetailStore;
