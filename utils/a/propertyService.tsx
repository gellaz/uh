import { PropertyType } from '@/models/property/type'
// import supabase from '@/utils/supabase/client';
// import { createServerClient } from '@supabase/ssr';
import { TokenService } from "./tokenService";
import { supabaseClient } from '@/utils/supabase/client';

export class PropertiesService {
    static tableName = 'properties'


    // GET API - fetch all the user properties [PROPERTIES TABLE]
    static async getUserProperties() {
        await TokenService.refreshSession();
        const { data, error } = await supabaseClient.from(this.tableName).select();

        if (data) {
            if (data.length > 0) {
                console.log('data: ' + data)
                return data as PropertyType[]
            }

            console.log('data null')
            return null
        }

        console.error('error')
        return error
    }

    // GET API - fetch all property with id 
    static async getPropertyWithId(property_id: string) {
        await TokenService.refreshSession();
        const { data, error } = await supabaseClient
            .from(this.tableName)
            .select()
            .eq('id', property_id)
            .single()

        if (data) {
            return data as PropertyType
        }

        console.error('Error occurred - getPropertyWithId:' + error)
        return error
    }


}


