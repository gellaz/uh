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
      agent: {
        Row: {
          created_at: string
          email: string
          firstname: string
          id: string
          lastname: string
          phone_number: string | null
          rae_code: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string
          firstname?: string
          id?: string
          lastname?: string
          phone_number?: string | null
          rae_code?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          firstname?: string
          id?: string
          lastname?: string
          phone_number?: string | null
          rae_code?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profile: {
        Row: {
          birthdate: string | null
          email_secondary: string | null
          firstname: string
          id: string
          lastname: string | null
          sex: Database["public"]["Enums"]["sexEnum"]
          tax_id: string | null
        }
        Insert: {
          birthdate?: string | null
          email_secondary?: string | null
          firstname: string
          id?: string
          lastname?: string | null
          sex: Database["public"]["Enums"]["sexEnum"]
          tax_id?: string | null
        }
        Update: {
          birthdate?: string | null
          email_secondary?: string | null
          firstname?: string
          id?: string
          lastname?: string | null
          sex?: Database["public"]["Enums"]["sexEnum"]
          tax_id?: string | null
        }
        Relationships: []
      }
      properties: {
        Row: {
          accessibility: Json
          address: Json
          baths: number
          beds: number
          category: Database["public"]["Enums"]["propertyCategoryEnum"]
          construction_year: string | null
          contract_status: Database["public"]["Enums"]["contractType"]
          description: string | null
          features: Json
          floor: number | null
          floor_tot: number | null
          heating: Json
          id: string
          inserted_at: string
          kitchen: number
          mq: number
          name: string
          phase_status: Database["public"]["Enums"]["phaseStatus"]
          price: Json
          status: Database["public"]["Enums"]["propertyStatus"]
          sub_category: string
          updated_at: string
        }
        Insert: {
          accessibility: Json
          address: Json
          baths: number
          beds: number
          category: Database["public"]["Enums"]["propertyCategoryEnum"]
          construction_year?: string | null
          contract_status?: Database["public"]["Enums"]["contractType"]
          description?: string | null
          features: Json
          floor?: number | null
          floor_tot?: number | null
          heating: Json
          id?: string
          inserted_at?: string
          kitchen: number
          mq: number
          name: string
          phase_status?: Database["public"]["Enums"]["phaseStatus"]
          price: Json
          status?: Database["public"]["Enums"]["propertyStatus"]
          sub_category: string
          updated_at?: string
        }
        Update: {
          accessibility?: Json
          address?: Json
          baths?: number
          beds?: number
          category?: Database["public"]["Enums"]["propertyCategoryEnum"]
          construction_year?: string | null
          contract_status?: Database["public"]["Enums"]["contractType"]
          description?: string | null
          features?: Json
          floor?: number | null
          floor_tot?: number | null
          heating?: Json
          id?: string
          inserted_at?: string
          kitchen?: number
          mq?: number
          name?: string
          phase_status?: Database["public"]["Enums"]["phaseStatus"]
          price?: Json
          status?: Database["public"]["Enums"]["propertyStatus"]
          sub_category?: string
          updated_at?: string
        }
        Relationships: []
      }
      rental: {
        Row: {
          deposit: number
          id: string
          landlord_id: string
          mid: string
          payroll: number
          pd: string
          price: number
          property_id: string
          tenant_id: string | null
          type: string
        }
        Insert: {
          deposit: number
          id?: string
          landlord_id: string
          mid: string
          payroll: number
          pd: string
          price: number
          property_id: string
          tenant_id?: string | null
          type: string
        }
        Update: {
          deposit?: number
          id?: string
          landlord_id?: string
          mid?: string
          payroll?: number
          pd?: string
          price?: number
          property_id?: string
          tenant_id?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "rental_landlord_id_fkey"
            columns: ["landlord_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rental_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
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
      commercialSubcategoryEnum:
        | "Locale commerciale"
        | "Laboratorio"
        | "Attività commerciale"
      contractType: "Rent" | "Sale"
      phaseStatus:
        | "Off market"
        | "Vacant"
        | "Pending"
        | "Under contract"
        | "Rented"
        | "Sold"
      propertyCategoryEnum:
        | "Residential"
        | "Shed"
        | "Shops"
        | "Buildings"
        | "Warehouse"
        | "Garage"
        | "Office"
        | "Land"
        | "Room"
      propertyStatus: "Draft" | "Saved"
      residentialSubcategoryEnum:
        | "Loft"
        | "Open space"
        | "Soffitta"
        | "Baglio"
        | "Baita"
        | "Casa colonica"
        | "Casale"
        | "Cascina"
        | "Chalet"
        | "Dammuso"
        | "Maso"
        | "Masseria"
        | "Nuraghe"
        | "Rifugio"
        | "Rustico"
        | "Sasso"
        | "Trullo"
        | "Villa unifamiliare"
        | "Villa bifamiliare"
        | "Villa plurifamiliare"
        | "Villa a schiera"
        | "Appartamento in villa"
      sexEnum: "Male" | "Famale" | "Other"
      WarehouseSubcategory: "Capannone"
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
