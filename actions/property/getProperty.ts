'use server'

import { supabaseClient } from "@/utils/supabase/client"

export async function getProperties(){
    const { data, error } = await supabaseClient
        .from('properties')
        .select()
        .order('created_at', {ascending: false})

    if (data) {
        console.log(data)
        return data
    }

    if (error) {
        console.error(error)
        return error
    }

}

export async function getPropertyWithId(id: string) {
    const { data, error } = await supabaseClient
        .from('properties')
        .select()
        .eq('id', id)
        .single()

    if (data) {
        console.log(data)
        return data
    }

    if (error) {
        console.error(error)
        return error
    }
}