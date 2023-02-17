export interface ListItemsProps {
  src: string;
  alt: string;
  address: string;
  type: string;
  price: string;
  size: string;
  city: string;
  energy: string;
  home_id: string;
}

export interface PropertyDetails {
  address: string;
  basement_space: string;
  city: string;
  cost: string;
  date_friendly: string;
  date_stamp: string;
  description: string;
  energy_label_name: string;
  floor_space: string;
  floorplan: string;
  gross: string;
  ground_space: string;
  id: string;
  images: Array<{
    author: string;
    description: string;
    file: string;
    filename: {
      large: string;
      medium: string;
    };
    id: string;
    is_main: string;
    large: string;
    medium: string;
  }>;
  net: string;
  num_clicks: string;
  num_floors: string;
  num_rooms: string;
  payout: string;
  price: string;
  staff: {
    email: string;
    firstname: string;
    id: string;
    image: string;
    lastname: string;
    phone: string;
    position: string;
  };
  staff_id: string;
  type: string;
  year_construction: string;
  year_rebuilt: string;
  zipcode: string;
}
