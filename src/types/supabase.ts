export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
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
          tax_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      properties: {
        Row: {
          bathrooms: number
          bedrooms: number
          category: string
          city: string
          condition: Database["public"]["Enums"]["condition"]
          construction_year: number | null
          country: string
          created_at: string
          elevator: boolean
          energy_class: Database["public"]["Enums"]["energy_class"]
          exposure: Database["public"]["Enums"]["exposure"]
          external_fixtures: Database["public"]["Enums"]["external_fixtures"]
          floor: number | null
          furnishing: Database["public"]["Enums"]["furnishing"]
          heating: Database["public"]["Enums"]["heating"]
          id: string
          kitchens: number
          mq: number
          pool: boolean | null
          postal_code: string
          rooms: number
          state: string | null
          street_name: string
          street_number: string
          sub_category: string
          total_floors: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          bathrooms: number
          bedrooms: number
          category: string
          city: string
          condition: Database["public"]["Enums"]["condition"]
          construction_year?: number | null
          country: string
          created_at?: string
          elevator: boolean
          energy_class: Database["public"]["Enums"]["energy_class"]
          exposure: Database["public"]["Enums"]["exposure"]
          external_fixtures: Database["public"]["Enums"]["external_fixtures"]
          floor?: number | null
          furnishing: Database["public"]["Enums"]["furnishing"]
          heating: Database["public"]["Enums"]["heating"]
          id?: string
          kitchens: number
          mq: number
          pool?: boolean | null
          postal_code: string
          rooms: number
          state?: string | null
          street_name: string
          street_number: string
          sub_category: string
          total_floors?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          bathrooms?: number
          bedrooms?: number
          category?: string
          city?: string
          condition?: Database["public"]["Enums"]["condition"]
          construction_year?: number | null
          country?: string
          created_at?: string
          elevator?: boolean
          energy_class?: Database["public"]["Enums"]["energy_class"]
          exposure?: Database["public"]["Enums"]["exposure"]
          external_fixtures?: Database["public"]["Enums"]["external_fixtures"]
          floor?: number | null
          furnishing?: Database["public"]["Enums"]["furnishing"]
          heating?: Database["public"]["Enums"]["heating"]
          id?: string
          kitchens?: number
          mq?: number
          pool?: boolean | null
          postal_code?: string
          rooms?: number
          state?: string | null
          street_name?: string
          street_number?: string
          sub_category?: string
          total_floors?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "property_categories"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "properties_sub_category_fkey"
            columns: ["sub_category"]
            isOneToOne: false
            referencedRelation: "property_subcategories"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "properties_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      property_categories: {
        Row: {
          name: string
        }
        Insert: {
          name: string
        }
        Update: {
          name?: string
        }
        Relationships: []
      }
      property_subcategories: {
        Row: {
          category_name: string
          name: string
        }
        Insert: {
          category_name: string
          name: string
        }
        Update: {
          category_name?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_subcategories_category_name_fkey"
            columns: ["category_name"]
            isOneToOne: false
            referencedRelation: "property_categories"
            referencedColumns: ["name"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      air_conditioning: "Cold only" | "Hot only" | "Cold and hot" | "None"
      condition:
        | "New under construction"
        | "Excellent renovated"
        | "Good livable"
        | "To be renovated"
      energy_class:
        | "Pending"
        | "Exempt"
        | "Unclassifiable"
        | "A4"
        | "A3"
        | "A2"
        | "A1"
        | "A+"
        | "A"
        | "B"
        | "C"
        | "D"
        | "E"
        | "F"
        | "G"
      exposure:
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
      external_fixtures:
        | "Glass wood"
        | "Double glass wood"
        | "Triple glass wood"
        | "Glass metal"
        | "Double glass metal"
        | "Triple glass metal"
        | "Glass PVC"
        | "Double glass PVC"
        | "Triple glass PVC"
      furnishing:
        | "Furnished"
        | "Unfurnished"
        | "Partially furnished"
        | "Kitchen only"
      heating: "Independent" | "Centralized" | "None"
      sex: "Male" | "Female" | "Other"
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
    : never = never
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
    : never = never
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
    : never = never
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
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

