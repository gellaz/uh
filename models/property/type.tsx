export type PropertyType = {
    id: string,
    inserted_at: string,
    updated_at: string,
    contract_status: string,
    phase_status: string,
    status: string,
    category: number,
    subcategory: number,
    name: string,
    mq: number,
    beds: number,
    baths: number,
    kitchen: number,
    description: string | null,
    floor: number | null,
    floor_tot: number | null,
    construction_yaer: string | null,
    price: {
        price: number,
        price_mq: number,
        price_mq_rea_min: number,
        price_mq_rea_max: number,
        condo_expenses: number,
    }
    address: {
        street: string,
        street_number: string,
        city: string,
        zipcode: string,
        region: string,
        country: string,
    },
    features: {
        [x: string]: any
        parking: number | null,
        garden: boolean | null,
        terrace: boolean | null,
        fireplace: boolean | null,
        pool: boolean | null,
    },
    heating: {
        type: number | null,
        fuel_source: number | null,
        energy_class: number | null,
        ipe: number | null,
    }
    accessibility: {
        wheelchair_friendly: boolean | null,
        elevator: boolean | null,
    },


}


