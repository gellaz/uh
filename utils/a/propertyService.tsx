// import { PropertyType } from '@/models/property/type'
import { Database, Tables } from '@/types/supabase';
import { TokenService } from "./tokenService";
import { supabaseClient } from '@/utils/supabase/client';
import { Property } from '@/types/properties';

export class PropertiesService {

    // GET API - fetch all the user properties [PROPERTIES TABLE]
    static async getUserProperties() {
        await TokenService.refreshSession();
        const { data, error } = await supabaseClient.from('properties').select();

        if (data) {
            if (data.length > 0) {
                console.log('data: ' + data)
                return data
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
            .from('properties')
            .select()
            .eq('id', property_id)
            .single()

        if (data) {
            return data
        }

        console.error('Error occurred - getPropertyWithId:' + error)
        return error
    }


}


