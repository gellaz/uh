CREATE TABLE public.properties id uuid NOT NULL DEFAULT gen_random_uuid(),
-- COMPOSIZIONE
rooms smallint NOT NULL,
bathrooms smallint NOT NULL, -- può essere di vari tipi lo gestiamo con jsonb?
kitchens smallint NOT NULL, -- può essere di vari tipi lo gestiamo con jsonb?
furnishing furnishing_enum NULL,
garden garden_enum NULL,
garage garage_enum NULL,
parking_spaces smallint NULL,
terraces smallint NULL,
balcony smallint NULL,
wall_waredrobes boolean NULL, -- armadi a muro
cantina boolean NULL, -- cantina
mansarda boolean NULL, -- mansarda
taverna boolean NULL, -- taverna
external_fixtures_material external_fixtures_material_enum NOT NULL,
external_fixtures_glass_type external_fixtures_glass_type_enum NOT NULL,
impianto_tv impianto_tv_enum NULL,
servizio_portineria servizio_portineria_enum NULL,
portablindata boolean NULL,
alarm boolean NULL,
cancello_elettrico boolean NULL,
video_citofono boolean NULL,
fibra_ottica boolean NULL,
caminetto boolean NULL,
idromassaggio boolean NULL,
piscina boolean NULL,
campo_tennis boolean NULL,
-- CARATTERISTICHE
construction_year smallint NULL,
property_class property_class_enum NOT NULL,
condition condition NOT NULL,
floor florr_enum NOT NULL,
total_floors smallint NULL,
multiple_floors boolean NULL,
elevators smallint NOT NULL,
accessibility boolean NULL,
-- lati liberi: dove si trovano le finestre [uno; due, paralleli; due, ad angolo; tre; quattro]
facing facing_enum NOT NULL, -- [Interno, Esterno, Doppio]
heating heating_enum NOT NULL,
heating_type heating_type_enum NULL,
heating_fuel heating_fuel_enum NOT NULL,
air_conditioning air_conditioning_enum NOT NULL,
air_conditioning_type air_conditioning_type_enum NULL, --[Solo freddo, Solo caldo, Freddo e caldo]
-- SUPERFICIE: sezione da aggiungere vedi getrix
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
;

-- category text NOT NULL,
-- subcategory text NOT NULL,
-- street_name text NOT NULL,
-- street_number text NOT NULL,
-- postal_code text NOT NULL,
-- city text NOT NULL,
-- state text NULL,
-- country text NOT NULL,
-- mq smallint NOT NULL,
-- floor smallint NULL,
-- total_floors smallint NULL,
-- rooms smallint NOT NULL,
-- kitchens smallint NOT NULL,
-- bathrooms smallint NOT NULL,
-- heating heating NOT NULL,
-- heating_type heating_type NULL,
-- heating_fuel heating_fuel NOT NULL,
-- air_conditioning air_conditioning NOT NULL,
-- energy_class energy_class NOT NULL,
-- external_fixtures_material external_fixtures_material NOT NULL,
-- external_fixtures_glass_type external_fixtures_glass_type NOT NULL,
-- condition condition NOT NULL,
-- exposure exposure NOT NULL,
-- elevator elevator NOT NULL,
-- pool boolean NULL,
-- construction_year smallint NULL,
-- created_at timestamp with time zone NOT NULL DEFAULT now(),
-- updated_at timestamp with time zone NOT NULL DEFAULT now(),
-- user_id uuid NOT NULL,
-- CONSTRAINT properties_pkey PRIMARY KEY (id),
-- CONSTRAINT properties_category_fkey FOREIGN KEY (category, subcategory) REFERENCES property_categories(category, subcategory),
-- CONSTRAINT properties_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
