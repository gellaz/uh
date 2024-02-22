export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          birth_date: string
          email: string
          email_secondary: string | null
          first_name: string
          id: string
          last_name: string
          phone: string | null
          sex: Database["public"]["Enums"]["profile_sex_enum"] | null
          tax_id: string
        }
        Insert: {
          birth_date: string
          email: string
          email_secondary?: string | null
          first_name: string
          id: string
          last_name: string
          phone?: string | null
          sex?: Database["public"]["Enums"]["profile_sex_enum"] | null
          tax_id: string
        }
        Update: {
          birth_date?: string
          email?: string
          email_secondary?: string | null
          first_name?: string
          id?: string
          last_name?: string
          phone?: string | null
          sex?: Database["public"]["Enums"]["profile_sex_enum"] | null
          tax_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      properties_buildings: {
        Row: {
          air_conditioning:
            | Database["public"]["Enums"]["property_air_conditioning_enum"]
            | null
          air_conditioning_type:
            | Database["public"]["Enums"]["property_air_conditioning_type_enum"]
            | null
          alarm: boolean | null
          bathrooms: number
          bathrooms_wheelchair: number | null
          building_usage:
            | Database["public"]["Enums"]["building_usage_enum"][]
            | null
          cadastral_particle: string | null
          cadastral_section: string | null
          cadastral_sheet: string | null
          cadastral_subaltern: string | null
          cadestral_category:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income: number | null
          cadestral_other: string | null
          cadestral_quote: string | null
          city: string
          condition:
            | Database["public"]["Enums"]["property_condition_enum"]
            | null
          construction_year: number | null
          country: Database["public"]["Enums"]["property_country_enum"]
          description: string | null
          elevators: number | null
          energy_class_grade:
            | Database["public"]["Enums"]["property_energy_class_enum"]
            | null
          external_fixtures_glass_type:
            | Database["public"]["Enums"]["property_external_fixtures_glass_type_enum"]
            | null
          external_fixtures_material:
            | Database["public"]["Enums"]["property_external_fixtures_material_enum"]
            | null
          facing: Database["public"]["Enums"]["property_facing_enum"] | null
          free_sides:
            | Database["public"]["Enums"]["property_free_sides_enum"]
            | null
          garden: Database["public"]["Enums"]["property_garden_enum"] | null
          heating: Database["public"]["Enums"]["property_heating_enum"]
          heating_fuel:
            | Database["public"]["Enums"]["property_heating_fuel_enum"]
            | null
          heating_type:
            | Database["public"]["Enums"]["property_heating_type_enum"]
            | null
          id: string
          mq: number
          notes: string | null
          parking_spaces_external: number | null
          parking_spaces_garage: number | null
          pool: boolean | null
          property_class:
            | Database["public"]["Enums"]["property_class_enum"]
            | null
          province: string
          reception: boolean | null
          region: string
          rooms: number
          sports_facility: number | null
          street_name: string
          street_number: string
          title: string | null
          total_floors_building: number | null
          user_id: string
          wheelchair_access: boolean | null
          zip_code: string
        }
        Insert: {
          air_conditioning?:
            | Database["public"]["Enums"]["property_air_conditioning_enum"]
            | null
          air_conditioning_type?:
            | Database["public"]["Enums"]["property_air_conditioning_type_enum"]
            | null
          alarm?: boolean | null
          bathrooms: number
          bathrooms_wheelchair?: number | null
          building_usage?:
            | Database["public"]["Enums"]["building_usage_enum"][]
            | null
          cadastral_particle?: string | null
          cadastral_section?: string | null
          cadastral_sheet?: string | null
          cadastral_subaltern?: string | null
          cadestral_category?:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income?: number | null
          cadestral_other?: string | null
          cadestral_quote?: string | null
          city: string
          condition?:
            | Database["public"]["Enums"]["property_condition_enum"]
            | null
          construction_year?: number | null
          country: Database["public"]["Enums"]["property_country_enum"]
          description?: string | null
          elevators?: number | null
          energy_class_grade?:
            | Database["public"]["Enums"]["property_energy_class_enum"]
            | null
          external_fixtures_glass_type?:
            | Database["public"]["Enums"]["property_external_fixtures_glass_type_enum"]
            | null
          external_fixtures_material?:
            | Database["public"]["Enums"]["property_external_fixtures_material_enum"]
            | null
          facing?: Database["public"]["Enums"]["property_facing_enum"] | null
          free_sides?:
            | Database["public"]["Enums"]["property_free_sides_enum"]
            | null
          garden?: Database["public"]["Enums"]["property_garden_enum"] | null
          heating: Database["public"]["Enums"]["property_heating_enum"]
          heating_fuel?:
            | Database["public"]["Enums"]["property_heating_fuel_enum"]
            | null
          heating_type?:
            | Database["public"]["Enums"]["property_heating_type_enum"]
            | null
          id?: string
          mq: number
          notes?: string | null
          parking_spaces_external?: number | null
          parking_spaces_garage?: number | null
          pool?: boolean | null
          property_class?:
            | Database["public"]["Enums"]["property_class_enum"]
            | null
          province: string
          reception?: boolean | null
          region: string
          rooms: number
          sports_facility?: number | null
          street_name: string
          street_number: string
          title?: string | null
          total_floors_building?: number | null
          user_id: string
          wheelchair_access?: boolean | null
          zip_code: string
        }
        Update: {
          air_conditioning?:
            | Database["public"]["Enums"]["property_air_conditioning_enum"]
            | null
          air_conditioning_type?:
            | Database["public"]["Enums"]["property_air_conditioning_type_enum"]
            | null
          alarm?: boolean | null
          bathrooms?: number
          bathrooms_wheelchair?: number | null
          building_usage?:
            | Database["public"]["Enums"]["building_usage_enum"][]
            | null
          cadastral_particle?: string | null
          cadastral_section?: string | null
          cadastral_sheet?: string | null
          cadastral_subaltern?: string | null
          cadestral_category?:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income?: number | null
          cadestral_other?: string | null
          cadestral_quote?: string | null
          city?: string
          condition?:
            | Database["public"]["Enums"]["property_condition_enum"]
            | null
          construction_year?: number | null
          country?: Database["public"]["Enums"]["property_country_enum"]
          description?: string | null
          elevators?: number | null
          energy_class_grade?:
            | Database["public"]["Enums"]["property_energy_class_enum"]
            | null
          external_fixtures_glass_type?:
            | Database["public"]["Enums"]["property_external_fixtures_glass_type_enum"]
            | null
          external_fixtures_material?:
            | Database["public"]["Enums"]["property_external_fixtures_material_enum"]
            | null
          facing?: Database["public"]["Enums"]["property_facing_enum"] | null
          free_sides?:
            | Database["public"]["Enums"]["property_free_sides_enum"]
            | null
          garden?: Database["public"]["Enums"]["property_garden_enum"] | null
          heating?: Database["public"]["Enums"]["property_heating_enum"]
          heating_fuel?:
            | Database["public"]["Enums"]["property_heating_fuel_enum"]
            | null
          heating_type?:
            | Database["public"]["Enums"]["property_heating_type_enum"]
            | null
          id?: string
          mq?: number
          notes?: string | null
          parking_spaces_external?: number | null
          parking_spaces_garage?: number | null
          pool?: boolean | null
          property_class?:
            | Database["public"]["Enums"]["property_class_enum"]
            | null
          province?: string
          reception?: boolean | null
          region?: string
          rooms?: number
          sports_facility?: number | null
          street_name?: string
          street_number?: string
          title?: string | null
          total_floors_building?: number | null
          user_id?: string
          wheelchair_access?: boolean | null
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_buildings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      properties_garage: {
        Row: {
          alarm: boolean | null
          all_day_access: boolean | null
          cadastral_particle: string | null
          cadastral_section: string | null
          cadastral_sheet: string | null
          cadastral_subaltern: string | null
          cadestral_category:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income: number | null
          cadestral_other: string | null
          cadestral_quote: string | null
          car_parking_spaces: number | null
          city: string
          country: Database["public"]["Enums"]["property_country_enum"]
          description: string | null
          electric_car_charging_station: number | null
          electric_parking_gate: boolean | null
          floor: Database["public"]["Enums"]["property_floor_enum"] | null
          id: string
          motorcycle_parking_spaces: number | null
          mq: number
          notes: string | null
          parking_gate_width: number | null
          province: string
          region: string
          street_name: string
          street_number: string
          subcategory: Database["public"]["Enums"]["property_garage_subcategory_enum"]
          title: string | null
          user_id: string
          video_survellance: boolean | null
          wheelchair_access: boolean | null
          zip_code: string
        }
        Insert: {
          alarm?: boolean | null
          all_day_access?: boolean | null
          cadastral_particle?: string | null
          cadastral_section?: string | null
          cadastral_sheet?: string | null
          cadastral_subaltern?: string | null
          cadestral_category?:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income?: number | null
          cadestral_other?: string | null
          cadestral_quote?: string | null
          car_parking_spaces?: number | null
          city: string
          country: Database["public"]["Enums"]["property_country_enum"]
          description?: string | null
          electric_car_charging_station?: number | null
          electric_parking_gate?: boolean | null
          floor?: Database["public"]["Enums"]["property_floor_enum"] | null
          id?: string
          motorcycle_parking_spaces?: number | null
          mq: number
          notes?: string | null
          parking_gate_width?: number | null
          province: string
          region: string
          street_name: string
          street_number: string
          subcategory: Database["public"]["Enums"]["property_garage_subcategory_enum"]
          title?: string | null
          user_id: string
          video_survellance?: boolean | null
          wheelchair_access?: boolean | null
          zip_code: string
        }
        Update: {
          alarm?: boolean | null
          all_day_access?: boolean | null
          cadastral_particle?: string | null
          cadastral_section?: string | null
          cadastral_sheet?: string | null
          cadastral_subaltern?: string | null
          cadestral_category?:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income?: number | null
          cadestral_other?: string | null
          cadestral_quote?: string | null
          car_parking_spaces?: number | null
          city?: string
          country?: Database["public"]["Enums"]["property_country_enum"]
          description?: string | null
          electric_car_charging_station?: number | null
          electric_parking_gate?: boolean | null
          floor?: Database["public"]["Enums"]["property_floor_enum"] | null
          id?: string
          motorcycle_parking_spaces?: number | null
          mq?: number
          notes?: string | null
          parking_gate_width?: number | null
          province?: string
          region?: string
          street_name?: string
          street_number?: string
          subcategory?: Database["public"]["Enums"]["property_garage_subcategory_enum"]
          title?: string | null
          user_id?: string
          video_survellance?: boolean | null
          wheelchair_access?: boolean | null
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_garage_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      properties_parking_space: {
        Row: {
          alarm: boolean | null
          all_day_access: boolean | null
          cadastral_particle: string | null
          cadastral_section: string | null
          cadastral_sheet: string | null
          cadastral_subaltern: string | null
          cadestral_category:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income: number | null
          cadestral_other: string | null
          cadestral_quote: string | null
          car_parking_spaces: number | null
          city: string
          country: Database["public"]["Enums"]["property_country_enum"]
          description: string | null
          electric_car_charging_station: number | null
          floor: Database["public"]["Enums"]["property_floor_enum"] | null
          id: string
          motorcycle_parking_spaces: number | null
          mq: number
          notes: string | null
          province: string
          region: string
          street_name: string
          street_number: string
          subcategory: Database["public"]["Enums"]["property_parking_space_subcategory_enum"]
          title: string | null
          user_id: string
          video_survellance: boolean | null
          wheelchair_access: boolean | null
          zip_code: string
        }
        Insert: {
          alarm?: boolean | null
          all_day_access?: boolean | null
          cadastral_particle?: string | null
          cadastral_section?: string | null
          cadastral_sheet?: string | null
          cadastral_subaltern?: string | null
          cadestral_category?:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income?: number | null
          cadestral_other?: string | null
          cadestral_quote?: string | null
          car_parking_spaces?: number | null
          city: string
          country: Database["public"]["Enums"]["property_country_enum"]
          description?: string | null
          electric_car_charging_station?: number | null
          floor?: Database["public"]["Enums"]["property_floor_enum"] | null
          id?: string
          motorcycle_parking_spaces?: number | null
          mq: number
          notes?: string | null
          province: string
          region: string
          street_name: string
          street_number: string
          subcategory: Database["public"]["Enums"]["property_parking_space_subcategory_enum"]
          title?: string | null
          user_id: string
          video_survellance?: boolean | null
          wheelchair_access?: boolean | null
          zip_code: string
        }
        Update: {
          alarm?: boolean | null
          all_day_access?: boolean | null
          cadastral_particle?: string | null
          cadastral_section?: string | null
          cadastral_sheet?: string | null
          cadastral_subaltern?: string | null
          cadestral_category?:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income?: number | null
          cadestral_other?: string | null
          cadestral_quote?: string | null
          car_parking_spaces?: number | null
          city?: string
          country?: Database["public"]["Enums"]["property_country_enum"]
          description?: string | null
          electric_car_charging_station?: number | null
          floor?: Database["public"]["Enums"]["property_floor_enum"] | null
          id?: string
          motorcycle_parking_spaces?: number | null
          mq?: number
          notes?: string | null
          province?: string
          region?: string
          street_name?: string
          street_number?: string
          subcategory?: Database["public"]["Enums"]["property_parking_space_subcategory_enum"]
          title?: string | null
          user_id?: string
          video_survellance?: boolean | null
          wheelchair_access?: boolean | null
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_parking_space_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      properties_residential: {
        Row: {
          air_conditioning:
            | Database["public"]["Enums"]["property_air_conditioning_enum"]
            | null
          air_conditioning_type:
            | Database["public"]["Enums"]["property_air_conditioning_type_enum"]
            | null
          alarm: boolean | null
          balcony: number | null
          bathrooms: number
          cadastral_particle: string | null
          cadastral_section: string | null
          cadastral_sheet: string | null
          cadastral_subaltern: string | null
          cadestral_category:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income: number | null
          cadestral_other: string | null
          cadestral_quote: string | null
          cantina: number | null
          chimney: boolean | null
          city: string
          concierge_service:
            | Database["public"]["Enums"]["property_concierge_service_enum"]
            | null
          condition:
            | Database["public"]["Enums"]["property_condition_enum"]
            | null
          construction_year: number | null
          country: Database["public"]["Enums"]["property_country_enum"]
          description: string | null
          electric_gate: boolean | null
          elevators: number | null
          energy_class_grade:
            | Database["public"]["Enums"]["property_energy_class_enum"]
            | null
          external_fixtures_glass_type:
            | Database["public"]["Enums"]["property_external_fixtures_glass_type_enum"]
            | null
          external_fixtures_material:
            | Database["public"]["Enums"]["property_external_fixtures_material_enum"]
            | null
          facing: Database["public"]["Enums"]["property_facing_enum"] | null
          floor: Database["public"]["Enums"]["property_floor_enum"] | null
          free_sides:
            | Database["public"]["Enums"]["property_free_sides_enum"]
            | null
          furnishing:
            | Database["public"]["Enums"]["property_furnishing_enum"]
            | null
          garage: Database["public"]["Enums"]["property_garage_enum"] | null
          garden: Database["public"]["Enums"]["property_garden_enum"] | null
          heating: Database["public"]["Enums"]["property_heating_enum"]
          heating_fuel:
            | Database["public"]["Enums"]["property_heating_fuel_enum"]
            | null
          heating_type:
            | Database["public"]["Enums"]["property_heating_type_enum"]
            | null
          hot_tub: boolean | null
          id: string
          kitchens: number
          mansarda: number | null
          mq: number
          multiple_floors: boolean | null
          notes: string | null
          optic_fiber: boolean | null
          parking_spaces: number | null
          pool: boolean | null
          property_class:
            | Database["public"]["Enums"]["property_class_enum"]
            | null
          province: string
          region: string
          reinforced_door: boolean | null
          rooms: number
          sports_facility: number | null
          street_name: string
          street_number: string
          subcategory: Database["public"]["Enums"]["property_residential_subcategory_enum"]
          taverna: number | null
          terraces: number | null
          title: string | null
          total_floors_building: number | null
          tv_system:
            | Database["public"]["Enums"]["property_tv_system_enum"]
            | null
          user_id: string
          video_intercom: boolean | null
          wall_waredrobes: boolean | null
          wheelchair_access: boolean | null
          zip_code: string
        }
        Insert: {
          air_conditioning?:
            | Database["public"]["Enums"]["property_air_conditioning_enum"]
            | null
          air_conditioning_type?:
            | Database["public"]["Enums"]["property_air_conditioning_type_enum"]
            | null
          alarm?: boolean | null
          balcony?: number | null
          bathrooms: number
          cadastral_particle?: string | null
          cadastral_section?: string | null
          cadastral_sheet?: string | null
          cadastral_subaltern?: string | null
          cadestral_category?:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income?: number | null
          cadestral_other?: string | null
          cadestral_quote?: string | null
          cantina?: number | null
          chimney?: boolean | null
          city: string
          concierge_service?:
            | Database["public"]["Enums"]["property_concierge_service_enum"]
            | null
          condition?:
            | Database["public"]["Enums"]["property_condition_enum"]
            | null
          construction_year?: number | null
          country: Database["public"]["Enums"]["property_country_enum"]
          description?: string | null
          electric_gate?: boolean | null
          elevators?: number | null
          energy_class_grade?:
            | Database["public"]["Enums"]["property_energy_class_enum"]
            | null
          external_fixtures_glass_type?:
            | Database["public"]["Enums"]["property_external_fixtures_glass_type_enum"]
            | null
          external_fixtures_material?:
            | Database["public"]["Enums"]["property_external_fixtures_material_enum"]
            | null
          facing?: Database["public"]["Enums"]["property_facing_enum"] | null
          floor?: Database["public"]["Enums"]["property_floor_enum"] | null
          free_sides?:
            | Database["public"]["Enums"]["property_free_sides_enum"]
            | null
          furnishing?:
            | Database["public"]["Enums"]["property_furnishing_enum"]
            | null
          garage?: Database["public"]["Enums"]["property_garage_enum"] | null
          garden?: Database["public"]["Enums"]["property_garden_enum"] | null
          heating: Database["public"]["Enums"]["property_heating_enum"]
          heating_fuel?:
            | Database["public"]["Enums"]["property_heating_fuel_enum"]
            | null
          heating_type?:
            | Database["public"]["Enums"]["property_heating_type_enum"]
            | null
          hot_tub?: boolean | null
          id?: string
          kitchens: number
          mansarda?: number | null
          mq: number
          multiple_floors?: boolean | null
          notes?: string | null
          optic_fiber?: boolean | null
          parking_spaces?: number | null
          pool?: boolean | null
          property_class?:
            | Database["public"]["Enums"]["property_class_enum"]
            | null
          province: string
          region: string
          reinforced_door?: boolean | null
          rooms: number
          sports_facility?: number | null
          street_name: string
          street_number: string
          subcategory: Database["public"]["Enums"]["property_residential_subcategory_enum"]
          taverna?: number | null
          terraces?: number | null
          title?: string | null
          total_floors_building?: number | null
          tv_system?:
            | Database["public"]["Enums"]["property_tv_system_enum"]
            | null
          user_id: string
          video_intercom?: boolean | null
          wall_waredrobes?: boolean | null
          wheelchair_access?: boolean | null
          zip_code: string
        }
        Update: {
          air_conditioning?:
            | Database["public"]["Enums"]["property_air_conditioning_enum"]
            | null
          air_conditioning_type?:
            | Database["public"]["Enums"]["property_air_conditioning_type_enum"]
            | null
          alarm?: boolean | null
          balcony?: number | null
          bathrooms?: number
          cadastral_particle?: string | null
          cadastral_section?: string | null
          cadastral_sheet?: string | null
          cadastral_subaltern?: string | null
          cadestral_category?:
            | Database["public"]["Enums"]["property_cadestral_category_enum"]
            | null
          cadestral_income?: number | null
          cadestral_other?: string | null
          cadestral_quote?: string | null
          cantina?: number | null
          chimney?: boolean | null
          city?: string
          concierge_service?:
            | Database["public"]["Enums"]["property_concierge_service_enum"]
            | null
          condition?:
            | Database["public"]["Enums"]["property_condition_enum"]
            | null
          construction_year?: number | null
          country?: Database["public"]["Enums"]["property_country_enum"]
          description?: string | null
          electric_gate?: boolean | null
          elevators?: number | null
          energy_class_grade?:
            | Database["public"]["Enums"]["property_energy_class_enum"]
            | null
          external_fixtures_glass_type?:
            | Database["public"]["Enums"]["property_external_fixtures_glass_type_enum"]
            | null
          external_fixtures_material?:
            | Database["public"]["Enums"]["property_external_fixtures_material_enum"]
            | null
          facing?: Database["public"]["Enums"]["property_facing_enum"] | null
          floor?: Database["public"]["Enums"]["property_floor_enum"] | null
          free_sides?:
            | Database["public"]["Enums"]["property_free_sides_enum"]
            | null
          furnishing?:
            | Database["public"]["Enums"]["property_furnishing_enum"]
            | null
          garage?: Database["public"]["Enums"]["property_garage_enum"] | null
          garden?: Database["public"]["Enums"]["property_garden_enum"] | null
          heating?: Database["public"]["Enums"]["property_heating_enum"]
          heating_fuel?:
            | Database["public"]["Enums"]["property_heating_fuel_enum"]
            | null
          heating_type?:
            | Database["public"]["Enums"]["property_heating_type_enum"]
            | null
          hot_tub?: boolean | null
          id?: string
          kitchens?: number
          mansarda?: number | null
          mq?: number
          multiple_floors?: boolean | null
          notes?: string | null
          optic_fiber?: boolean | null
          parking_spaces?: number | null
          pool?: boolean | null
          property_class?:
            | Database["public"]["Enums"]["property_class_enum"]
            | null
          province?: string
          region?: string
          reinforced_door?: boolean | null
          rooms?: number
          sports_facility?: number | null
          street_name?: string
          street_number?: string
          subcategory?: Database["public"]["Enums"]["property_residential_subcategory_enum"]
          taverna?: number | null
          terraces?: number | null
          title?: string | null
          total_floors_building?: number | null
          tv_system?:
            | Database["public"]["Enums"]["property_tv_system_enum"]
            | null
          user_id?: string
          video_intercom?: boolean | null
          wall_waredrobes?: boolean | null
          wheelchair_access?: boolean | null
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      property_categories: {
        Row: {
          category: string
          subcategory: string
        }
        Insert: {
          category: string
          subcategory: string
        }
        Update: {
          category?: string
          subcategory?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      building_usage_enum:
        | "Industrial"
        | "Residential"
        | "Hotel"
        | "Other"
        | "Commercial"
        | "Castel"
        | "Office"
      profile_sex_enum: "MALE" | "FEMALE" | "OTHER"
      property_air_conditioning_enum:
        | "Autonomous"
        | "Centralized"
        | "Air conditioning system preparation"
        | "None"
      property_air_conditioning_type_enum: "Cold only" | "Hot only" | "Cold/Hot"
      property_cadestral_category_enum:
        | "A/1"
        | "A/2"
        | "A/3"
        | "A/4"
        | "A/5"
        | "A/6"
        | "A/7"
        | "A/8"
        | "A/9"
        | "A/10"
        | "A/11"
        | "B/1"
        | "B/2"
        | "B/3"
        | "B/4"
        | "B/5"
        | "B/6"
        | "B/7"
        | "B/8"
        | "C/1"
        | "C/2"
        | "C/3"
        | "C/4"
        | "C/5"
        | "C/6"
        | "C/7"
        | "D/1"
        | "D/2"
        | "D/3"
        | "D/4"
        | "D/5"
        | "D/6"
        | "D/7"
        | "D/8"
        | "D/9"
        | "D/10"
        | "D/11"
        | "D/12"
        | "E/1"
        | "E/2"
        | "E/3"
        | "E/4"
        | "E/5"
        | "E/6"
        | "E/7"
        | "E/8"
        | "E/9"
        | "F/1"
        | "F/2"
        | "F/3"
        | "F/4"
        | "F/5"
        | "F/6"
        | "T"
      property_class_enum: "Luxury" | "Elengant" | "Medium" | "Economy"
      property_concierge_service_enum: "NoneFull day" | "half day"
      property_condition_enum:
        | "New under construction"
        | "Excellent renovated"
        | "Good livable"
        | "To be renovated"
      property_country_enum: "Italy" | "Spain"
      property_energy_class_enum:
        | "Pending"
        | "Exempt"
        | "Unclassifiable"
        | "2005_A+"
        | "2005_A"
        | "2005_B"
        | "2005_C"
        | "2005_D"
        | "2005_E"
        | "2005_F"
        | "2005_G"
        | "2013_A4"
        | "2013_A3"
        | "2013_A2"
        | "2013_A1"
        | "2013_B"
        | "2013_C"
        | "2013_D"
        | "2013_E"
        | "2013_F"
        | "2013_G"
      property_exposure_enum:
        | "North"
        | "South"
        | "East"
        | "West"
        | "North South"
        | "North East"
        | "North West"
        | "South East"
        | "South West"
        | "East West"
        | "North South East"
        | "North South West"
        | "North East West"
        | "South East West"
        | "North South East West"
      property_external_fixtures_glass_type_enum: "Single" | "Double" | "Triple"
      property_external_fixtures_material_enum: "Wood" | "Metal" | "PVC"
      property_facing_enum: "Internal" | "External" | "Double"
      property_floor_enum:
        | "underground (-5)"
        | "underground (-4)"
        | "underground (-3)"
        | "underground (-2)"
        | "underground (-1)"
        | "basement"
        | "ground floor"
        | "mezzanine"
        | "raised floor"
        | "1"
        | "13"
        | "14"
        | "15"
        | "16"
        | "17"
        | "18"
        | "19"
        | "20"
        | "21"
        | "22"
        | "23"
        | "24"
        | "25"
        | "26"
        | "27"
        | "28"
        | "29"
        | "30"
        | "31"
        | "32"
        | "33"
        | "34"
        | "35"
        | "36"
        | "37"
        | "38"
        | "39"
        | "40"
        | "41"
        | "42"
        | "43"
        | "44"
        | "45"
        | "46"
        | "47"
        | "48"
        | "49"
        | "50"
        | "51"
        | "52"
        | "53"
        | "54"
        | "55"
        | "56"
        | "57"
        | "58"
        | "59"
        | "60"
      property_free_sides_enum:
        | "One"
        | "Two parallel"
        | "Two at an angle"
        | "Three"
        | "Four"
      property_furnishing_enum:
        | "Furnished"
        | "Semi-furnished"
        | "Semi-furnished with kitchen"
        | "Unfurnished"
      property_garage_enum:
        | "None"
        | "Single"
        | "Double"
        | "Triple"
        | "Quadruple"
        | "Box"
        | "Carport"
        | "Parking space"
      property_garage_subcategory_enum: "Indipendent box" | "Shared box"
      property_garden_enum: "None" | "Shared" | "Private" | "Shared and Private"
      property_heating_enum: "Independent" | "Centralized" | "None"
      property_heating_fuel_enum:
        | "Gas"
        | "Methane"
        | "LPG"
        | "Diesel"
        | "Pellets"
        | "Wood"
        | "Solar"
        | "Photovoltaic"
        | "District Heating"
        | "Heat Pump"
        | "Electric"
      property_heating_type_enum: "Floor" | "Radiator" | "Air" | "Stove"
      property_parking_space_subcategory_enum:
        | "Parking space in shared garage"
        | "External parking space covered"
        | "External parking space uncovered"
      property_residential_subcategory_enum:
        | "Apartment"
        | "Penthouse"
        | "Mansard"
        | "Single-family Townhouse"
        | "Multi-family Townhouse"
        | "Loft"
        | "Open Space"
        | "Attic"
        | "Courtyard House"
        | "Cabin"
        | "Farmhouse"
        | "Country House"
        | "Chalet"
        | "Dammuso"
        | "Farmstead"
        | "Large Farmhouse"
        | "Nuraghe"
        | "Refuge"
        | "Rustic"
        | "Stone House"
        | "Trullo"
        | "Detached Villa"
        | "Semi-detached Villa"
        | "Multi-family Villa"
        | "Row Villa"
        | "Apartment In Villa"
      property_tv_system_enum: "Single" | "Centralized" | "satellite dish"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never

