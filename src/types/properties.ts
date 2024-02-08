import { Database } from "./supabase";

export type Property = Database["public"]["Tables"]["properties"]["Row"];

export type Address = {
  city: string;
  region: string;
  street: string;
  street_number: string;
  country: string;
  zipcode: string;
};

export type Features = {
  pool?: string;
  garden?: string;
  parking?: string;
  terrace?: string;
  fireplace?: string;
};

export type Heating = {
  ipe: null;
  type: null;
  fuel_source: null;
  energy_class: null;
};

export type Accessibility = {
  elevator: null;
  wheelchair_friendly: null;
};

export type Price = {
  price: number;
  price_mq: number;
  price_mq_rea_min?: number;
  price_mq_rea_max?: number;
  condo_expenses?: number;
};
