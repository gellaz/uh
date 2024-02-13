CREATE TABLE public.properties(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    -- CARATTERISTICHE
    property_class property_class_enum NOT NULL,
    condition condition NOT NULL,
    construction_year smallint NULL,
    accessibility boolean NULL,
    elevators smallint NOT NULL,
    -- lati liberi: dove si trovano le finestre [uno; due, paralleli; due, ad angolo; tre; quattro]
    usage usage NOT NULL, -- può avere più valori [Industriale, Commerciale, Residenziale, albergo, Industriale, Altro, Castello, ufficio]
    facing facing_enum NOT NULL, -- [Interno, Esterno, Doppio]
    heating heating_enum NOT NULL,
    heating_type heating_type_enum NULL,
    heating_fuel heating_fuel_enum NOT NULL,
    air_conditioning air_conditioning_enum NOT NULL,
    air_conditioning_type air_conditioning_type_enum NULL, --[Solo freddo, Solo caldo, Freddo e caldo]
    -- SUPERFICIE
    -- sezione da aggiungere vedi getrix
    -- COMPOSIZIONE
    rooms smallint NOT NULL,
    bathrooms smallint NOT NULL,
    baths_handicap boolean NULL,
    terraces smallint NOT NULL,
    parking_spaces_outdoor smallint NOT NULL,
    parking_spaces_garage_box smallint NOT NULL,
    alarm boolean NULL,
    reception boolean NULL,
    external_fixtures_material external_fixtures_material_enum NOT NULL,
    external_fixtures_glass_type external_fixtures_glass_type_enum NOT NULL,
    -- CERTIFICAZIONE ENRGETICA
    energy_class_grade energy_class_enum NOT NULL,
    energy_class_renewable energy_class_renewable_enum NULL,
    -- DATI CATASTALI
    cadastral_section text NULL,
    cadastral_sheet text NULL,
    cadastral_particle text NULL,
    cadastral_subalterno text NULL,
    cadestral_category cadestral_category_enum NULL, -- to be defined
    cadestral_rendita float NULL,
    cadestral_quote text NULL,
    cadestral_other text NULL,
    -- DESCRIZIONE
    description text NULL,
    title text NULL,
    notes text NULL,
    -- INDIRIZZO
    city text NOT NULL,
    address text NOT NULL,
    zip_code text NOT NULL,
    province text NOT NULL,
    region text NOT NULL,
    country text NOT NULL,
    -- MEDIA
    -- fotografie, video, planimetrie, virtual tour, APE,
);

