--
-- SOTTO CATEGORIA RESIDENZIALE
--
CREATE TYPE property_residential_subcategory_enum AS enum(
    'Apartment', -- Appartamento
    'Penthouse', -- Attico
    'Mansard', -- Mansarda
    'Single-family Townhouse', -- Terratetto unifamiliare
    'Multi-family Townhouse', -- Terratetto plurifamiliare
    'Loft', -- Loft
    'Open Space', -- Open space
    'Attic', -- Soffitta
    'Courtyard House', -- Baglio
    'Cabin', -- Baita
    'Farmhouse', -- Casa colonica
    'Country House', -- Casale
    'Chalet', -- Chalet
    'Dammuso', -- Dammuso (specific type of house found in Sicily)
    'Farmstead', -- Maso (specific type of farm found in South Tyrol)
    'Large Farmhouse', -- Masseria (large farmhouses in Puglia)
    'Nuraghe', -- Nuraghe (ancient megalithic edifice found in Sardinia)
    'Refuge', -- Rifugio
    'Rustic', -- Rustico
    'Stone House', -- Sasso
    'Trullo', -- Trullo (a traditional Apulian stone dwelling with a conical roof)
    'Detached Villa', -- Villa unifamiliare
    'Semi-detached Villa', -- Villa bifamiliare
    'Multi-family Villa', -- Villa plurifamiliare
    'Row Villa', -- Villa a schiera
    'Apartment In Villa' -- Appartamento in villa
);

--
-- Stato/Condizioni immobile
--
CREATE TYPE property_condition_enum AS enum(
    'New under construction', -- Nuovo in costruzione
    'Excellent renovated', -- Ottimo ristrutturato
    'Good livable', -- Buono abitabile
    'To be renovated' -- Da ristrutturare
);


--
-- Stato/Condizioni immobile
--
CREATE TYPE property_floor_enum AS enum(
    'underground (-5)', -- interrato (-5)
    'underground (-4)', -- interrato (-4)
    'underground (-3)', -- interrato (-3)
    'underground (-2)', -- interrato (-2)
    'underground (-1)', -- interrato (-1)
    'basement', -- seminterrato 
    'ground floor', -- piano terra
    'mezzanine', -- ammezzato
    'raised floor', -- piano rialzato
    '1', -- 1
    '13', -- '13' 
    '14', -- '14' 
    '15', -- '15' 
    '16', -- '16' 
    '17', -- '17' 
    '18', -- '18' 
    '19', -- '19'
    '20', -- '20'
    '21', -- '21'
    '22', -- '22' 
    '23', -- '23' 
    '24', -- '24' 
    '25', -- '25' 
    '26', -- '26' 
    '27', -- '27' 
    '28', -- '28' 
    '29', -- '29'
    '30', -- '30'
    '31', -- '31'
    '32', -- '32' 
    '33', -- '33' 
    '34', -- '34' 
    '35', -- '35' 
    '36', -- '36' 
    '37', -- '37' 
    '38', -- '38' 
    '39', -- '39'
    '40', -- '40'
    '41', -- '41'
    '42', -- '42' 
    '43', -- '43' 
    '44', -- '44' 
    '45', -- '45' 
    '46', -- '46' 
    '47', -- '47' 
    '48', -- '48' 
    '49', -- '49'
    '50', -- '50'
    '51', -- '51'
    '52', -- '52' 
    '53', -- '53' 
    '54', -- '54' 
    '55', -- '55' 
    '56', -- '56' 
    '57', -- '57' 
    '58', -- '58' 
    '59', -- '59'
    '60' -- '60'
);

--
-- Giardino
--
CREATE TYPE property_garden_enum AS enum(
    'None', -- Assente
    'Shared', -- Condominiale
    'Private', -- Privato
    'Shared and Private' -- Condominiale e privato
);

--
-- Parcheggio
--
CREATE TYPE property_garage_enum AS enum(
    'None', -- Assente
    'Single', -- Singolo
    'Double', -- Doppio
    'Triple', -- Triplo
    'Quadruple', -- Quadruplo
    'Box', -- Box
    'Carport', -- Posto auto coperto
    'Parking space' -- Posto auto scoperto
);

--
-- Arredamento
--
CREATE TYPE property_furnishing_enum AS enum(
    'Furnished', -- Arredato
    'Semi-furnished', -- Semi-arredato
    'Semi-furnished with kitchen', -- Semi-arredato
    'Unfurnished' -- Non arredato,
);

-- 
-- Classe immobili
-- 
CREATE TYPE property_class_enum AS enum(
    'Luxury', -- Di lusso
    'Elengant', -- Signorile
    'Medium', -- Media
    'Economy' -- Economica
);

--
-- Materiale infissi esterni
--
CREATE TYPE property_external_fixtures_material_enum AS enum(
    'Wood', -- Legno
    'Metal', -- Metallo
    'PVC' -- PVC
);


--
-- Vetro infissi esterni
--
CREATE TYPE property_external_fixtures_glass_type_enum AS enum(
    'Single',
    'Double',
    'Triple'
);


--
-- Impianto TV
--
CREATE TYPE property_tv_system_enum AS enum(
    'Single', -- Singolo
    'Centralized', -- centralizzato
    'satellite dish' -- parabola satellitare
);

--
-- servizio portineria 
--
CREATE TYPE property_concierge_service_enum AS enum(
    'None' -- assente
    'Full day', -- intera giornata
    'half day' -- mezza giornata 
);

--
-- Lati liberi
-- pareti o lati dell'appartamento che non sono adiacenti ad altri appartamenti, scale, muri portanti dell'edificio
--
CREATE TYPE property_free_sides_enum AS enum(
    'One', -- Uno
    'Two parallel', -- Due paralleli
    'Two at an angle', -- Due ad angolo
    'Three', -- Tre 
    'Four' -- Quattro
);

--
-- Affaccio
--
CREATE TYPE property_facing_enum AS enum(
    'Internal', -- Interno 
    'External', -- Esterno
    'Double' -- Doppio

);

--
-- Esposizione
--
CREATE TYPE property_exposure_enum AS enum(
    'North', -- Nord
    'South', -- Sud
    'East', -- Est
    'West', -- Ovest
    'North South', -- Nord Sud
    'North East', -- Nord Est
    'North West', -- Nord Ovest
    'South East', -- Sud Est
    'South West', -- Sud Ovest
    'East West', -- Est Ovest
    'North South East', -- Nord Sud Est
    'North South West', -- Nord Sud Ovest
    'North East West', -- Nord Est Ovest
    'South East West', -- Sud Est Ovest
    'North South East West' -- Nord Sud Est Ovest
);

--
-- PAESI
--
CREATE TYPE property_country_enum AS enum(
    'Italy', -- Italia
    'Spain' -- Spagna
);

--
-- RISCALDAMENTO
--
CREATE TYPE property_heating_enum AS enum(
    'Independent', -- autonomo
    'Centralized', -- centralizzato
    'None' -- nessuno
);

--
-- TIPO RISCALDAMENTO
--
CREATE TYPE property_heating_type_enum AS enum(
    'Floor', -- A pavimento
    'Radiator', -- A radiatori
    'Air', -- Ad Aria
    'Stove' -- A Stufa
);

--
-- IMPIANTO DI CLIMATIZZAZIONE
--
CREATE TYPE property_air_conditioning_enum AS enum(
    'Autonomous', -- Autonomo
    'Centralized', -- Centralizzato
    'Air conditioning system preparation', -- Predisposizione impianto
    'None' -- Assente
);

--
-- TIPO IMPIANTO DI CLIMATIZZAZIONE
--
CREATE TYPE property_air_conditioning_type_enum AS enum(
    'Cold only', -- Solo freddo
    'Hot only', -- Solo caldo
    'Cold/Hot' -- Freddo e caldo
);

--
-- CLASSE ENERGETICA
--
CREATE TYPE property_energy_class_enum AS enum(
    'Pending',
    'Exempt',
    'Unclassifiable',
    -- DL 192 DEL 19/08/2005
    '2005_A+',
    '2005_A',
    '2005_B',
    '2005_C',
    '2005_D',
    '2005_E',
    '2005_F',
    '2005_G',
    -- Legge 90/2013
    '2013_A4',
    '2013_A3',
    '2013_A2',
    '2013_A1',
    '2013_B',
    '2013_C',
    '2013_D',
    '2013_E',
    '2013_F',
    '2013_G'
);


--
-- ALIMENTAZIONE RISCALDAMENTO
--
CREATE TYPE property_heating_fuel_enum AS enum(
    'Gas', -- Gas
    'Methane', -- Metano
    'LPG', -- GPL
    'Diesel', -- Gasolio
    'Pellets', -- Pellet
    'Wood', -- Legna
    'Solar', -- Solare
    'Photovoltaic', -- Fotovoltaico
    'District Heating', -- Teleriscaldamento
    'Heat Pump', -- Pompa di calore
    'Electric' -- Elettrico
);

--
-- CATEGORIA CATASTALE
--
CREATE TYPE property_cadestral_category_enum AS enum(
    'A/1', -- Residenziale
    'A/2', -- Residenziale
    'A/3', -- Residenziale
    'A/4', -- Residenziale
    'A/5', -- Residenziale
    'A/6', -- Residenziale
    'A/7', -- Residenziale
    'A/8', -- Residenziale
    'A/9', -- Residenziale
    'A/10', -- Residenziale
    'A/11', -- Residenziale
    'B/1', -- Residenziale
    'B/2', -- Residenziale
    'B/3', -- Residenziale
    'B/4', -- Residenziale
    'B/5', -- Residenziale
    'B/6', -- Residenziale
    'B/7', -- Residenziale
    'B/8', -- Residenziale
    'C/1', -- Residenziale
    'C/2', -- Residenziale
    'C/3', -- Residenziale
    'C/4', -- Residenziale
    'C/5', -- Residenziale
    'C/6', -- Residenziale
    'C/7', -- Residenziale
    'D/1', -- Residenziale
    'D/2', -- Residenziale
    'D/3', -- Residenziale
    'D/4', -- Residenziale
    'D/5', -- Residenziale
    'D/6', -- Residenziale
    'D/7', -- Residenziale
    'D/8', -- Residenziale
    'D/9', -- Residenziale
    'D/10', -- Residenziale
    'D/11', -- Residenziale
    'D/12', -- Residenziale
    'E/1', -- Residenziale
    'E/2', -- Residenziale
    'E/3', -- Residenziale
    'E/4', -- Residenziale
    'E/5', -- Residenziale
    'E/6', -- Residenziale
    'E/7', -- Residenziale
    'E/8', -- Residenziale
    'E/9',
    'F/1', -- Residenziale
    'F/2', -- Residenziale
    'F/3', -- Residenziale
    'F/4', -- Residenziale
    'F/5', -- Residenziale
    'F/6', -- Residenziale
    'T' -- Residenziale
);
    
-- #############################################################
--
-- PROPRIETÀ RESIDENZIALE
--
CREATE TABLE public.properties_residential(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL,
    subcategory property_residential_subcategory_enum NOT NULL,
    -- SUPERFICIE: sezione da aggiungere vedi getrix
    -- COMPOSIZIONE
    mq smallint NOT NULL,
    rooms smallint NOT NULL,
    bathrooms smallint NOT NULL, -- può essere di vari tipi lo gestiamo con jsonb?
    kitchens smallint NOT NULL, -- può essere di vari tipi lo gestiamo con jsonb?
    garden property_garden_enum NULL,
    garage property_garage_enum NULL,
    parking_spaces smallint NULL,
    terraces smallint NULL,
    balcony smallint NULL,
    cantina smallint NULL, -- cantina
    mansarda smallint NULL, -- mansarda
    taverna smallint NULL, -- taverna
    -- INDIRIZZO
    street_name text NOT NULL,
    street_number text NOT NULL,
    city text NOT NULL,
    zip_code text NOT NULL,
    province text NOT NULL,
    region text NOT NULL,
    country property_country_enum NOT NULL,
    -- AMENITIES / COMODITA'
    furnishing property_furnishing_enum NULL,
    wall_waredrobes boolean NULL, -- armadi a muro
    external_fixtures_material property_external_fixtures_material_enum NULL,
    external_fixtures_glass_type property_external_fixtures_glass_type_enum NULL,
    tv_system property_tv_system_enum NULL,
    concierge_service property_concierge_service_enum NULL,
    reinforced_door boolean NULL,
    alarm boolean NULL,
    electric_gate boolean NULL,
    video_intercom boolean NULL,
    optic_fiber boolean NULL,
    chimney boolean NULL,
    hot_tub boolean NULL,
    pool boolean NULL,
    sports_facility smallint NULL, -- [Tennis, Calcetto, Pallavolo, Basket, Paddle, Altro]
    -- BUILDING CARATTERISTICHE
    construction_year smallint NULL,
    property_class property_class_enum NULL,
    condition property_condition_enum NULL,
    floor property_floor_enum NULL,
    multiple_floors boolean NULL,
    total_floors_building smallint NULL,
    elevators smallint NULL,
    wheelchair_access boolean NULL,
    free_sides property_free_sides_enum NULL, 
    facing property_facing_enum NULL,
    -- RISCALDAMENTO E CLIMATIZZAZIONE
    heating property_heating_enum NOT NULL,
    heating_type property_heating_type_enum NULL,
    heating_fuel property_heating_fuel_enum NULL,
    air_conditioning property_air_conditioning_enum NULL,
    air_conditioning_type property_air_conditioning_type_enum NULL,
    -- CERTIFICAZIONE ENRGETICA
    energy_class_grade property_energy_class_enum NULL,
    -- DATI CATASTALI
    cadastral_section text NULL,
    cadastral_sheet text NULL,
    cadastral_particle text NULL,
    cadastral_subaltern text NULL,
    cadestral_category property_cadestral_category_enum NULL,
    cadestral_income float NULL,
    cadestral_quote text NULL,
    cadestral_other text NULL,
    -- DESCRIZIONE
    description text NULL,
    title text NULL,
    notes text NULL,
    -- MEDIA
    -- fotografie, video, planimetrie, virtual tour, APE,
    CONSTRAINT properties_pkey PRIMARY KEY (id),
    CONSTRAINT properties_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);


CREATE TYPE building_usage_enum AS enum(
    'Industrial', -- industriale
    'Residential', -- residenziale
    'Hotel', -- Hotel
    'Other', -- Altri
    'Commercial', -- Commerciali
    'Castel', -- Castelli
    'Office' -- Ufficio
);

-- #############################################################
--
-- PROPRIETÀ EDIFICI
--
CREATE TABLE public.properties_buildings(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL,
    -- SUPERFICIE: sezione da aggiungere vedi getrix
    -- COMPOSIZIONE
    mq smallint NOT NULL,
    rooms smallint NOT NULL,
    bathrooms smallint NOT NULL, -- può essere di vari tipi lo gestiamo con jsonb?
    bathrooms_wheelchair smallint NULL,
    garden property_garden_enum NULL,
    parking_spaces_external smallint NULL,
    parking_spaces_garage smallint NULL,
    -- INDIRIZZO
    street_name text NOT NULL,
    street_number text NOT NULL,
    city text NOT NULL,
    zip_code text NOT NULL,
    province text NOT NULL,
    region text NOT NULL,
    country property_country_enum NOT NULL,
    -- AMENITIES / COMODITA'
    external_fixtures_material property_external_fixtures_material_enum NULL,
    external_fixtures_glass_type property_external_fixtures_glass_type_enum NULL,
    reception boolean NULL,
    alarm boolean NULL,
    pool boolean NULL,
    sports_facility smallint NULL, -- [Tennis, Calcetto, Pallavolo, Basket, Paddle, Altro]
    -- BUILDING CARATTERISTICHE
    construction_year smallint NULL,
    property_class property_class_enum NULL,
    condition property_condition_enum NULL,
    building_usage building_usage_enum[] NULL,
    total_floors_building smallint NULL,
    elevators smallint NULL,
    wheelchair_access boolean NULL,
    free_sides property_free_sides_enum NULL, 
    facing property_facing_enum NULL,
    -- RISCALDAMENTO E CLIMATIZZAZIONE
    heating property_heating_enum NOT NULL,
    heating_type property_heating_type_enum NULL,
    heating_fuel property_heating_fuel_enum NULL,
    air_conditioning property_air_conditioning_enum NULL,
    air_conditioning_type property_air_conditioning_type_enum NULL,
    -- CERTIFICAZIONE ENRGETICA
    energy_class_grade property_energy_class_enum NULL,
    -- DATI CATASTALI
    cadastral_section text NULL,
    cadastral_sheet text NULL,
    cadastral_particle text NULL,
    cadastral_subaltern text NULL,
    cadestral_category property_cadestral_category_enum NULL,
    cadestral_income float NULL,
    cadestral_quote text NULL,
    cadestral_other text NULL,
    -- DESCRIZIONE
    description text NULL,
    title text NULL,
    notes text NULL,
    -- MEDIA
    -- fotografie, video, planimetrie, virtual tour, APE,
    CONSTRAINT properties_buildings_pkey PRIMARY KEY (id),
    CONSTRAINT properties_buildings_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- #############################################################

CREATE TYPE property_garage_subcategory_enum AS enum(
    'Indipendent box', -- box indipendente
    'Shared box' -- box in garage comune 
);

--
-- GARAGE
--
CREATE TABLE public.properties_garage(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL,
    subcategory property_garage_subcategory_enum NOT NULL,
    -- COMPOSIZIONE
    mq smallint NOT NULL,
    floor property_floor_enum NULL,
    parking_gate_width smallint NULL,
    car_parking_spaces smallint NULL,
    motorcycle_parking_spaces smallint NULL,
    -- INDIRIZZO
    street_name text NOT NULL,
    street_number text NOT NULL,
    city text NOT NULL,
    zip_code text NOT NULL,
    province text NOT NULL,
    region text NOT NULL,
    country property_country_enum NOT NULL,
    -- BUILDING CARATTERISTICHE
    wheelchair_access boolean NULL,
    all_day_access boolean NULL,
    electric_parking_gate boolean NULL,
    electric_car_charging_station smallint NULL,
    video_survellance boolean NULL, 
    alarm boolean NULL,
    -- DATI CATASTALI
    cadastral_section text NULL,
    cadastral_sheet text NULL,
    cadastral_particle text NULL,
    cadastral_subaltern text NULL,
    cadestral_category property_cadestral_category_enum NULL,
    cadestral_income float NULL,
    cadestral_quote text NULL,
    cadestral_other text NULL,
    -- DESCRIZIONE
    description text NULL,
    title text NULL,
    notes text NULL,
    -- MEDIA
    -- fotografie, video, planimetrie, virtual tour, APE,
    CONSTRAINT properties_garage_pkey PRIMARY KEY (id),
    CONSTRAINT properties_garage_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- #############################################################

CREATE TYPE property_parking_space_subcategory_enum AS enum(
    'Parking space in shared garage', -- Posto in garage comune
    'External parking space covered', -- Posto esterno coperto
    'External parking space uncovered' -- Posto esterno scoperto

);

--
-- GARAGE
--
CREATE TABLE public.properties_parking_space(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL,
    subcategory property_parking_space_subcategory_enum NOT NULL,
    -- COMPOSIZIONE
    mq smallint NOT NULL,
    floor property_floor_enum NULL,
    car_parking_spaces smallint NULL,
    motorcycle_parking_spaces smallint NULL,
    -- INDIRIZZO
    street_name text NOT NULL,
    street_number text NOT NULL,
    city text NOT NULL,
    zip_code text NOT NULL,
    province text NOT NULL,
    region text NOT NULL,
    country property_country_enum NOT NULL,
    -- BUILDING CARATTERISTICHE
    wheelchair_access boolean NULL,
    all_day_access boolean NULL,
    electric_car_charging_station smallint NULL,
    video_survellance boolean NULL, 
    alarm boolean NULL,
    -- DATI CATASTALI
    cadastral_section text NULL,
    cadastral_sheet text NULL,
    cadastral_particle text NULL,
    cadastral_subaltern text NULL,
    cadestral_category property_cadestral_category_enum NULL,
    cadestral_income float NULL,
    cadestral_quote text NULL,
    cadestral_other text NULL,
    -- DESCRIZIONE
    description text NULL,
    title text NULL,
    notes text NULL,
    -- MEDIA
    -- fotografie, video, planimetrie, virtual tour, APE,
    CONSTRAINT properties_parking_space_pkey PRIMARY KEY (id),
    CONSTRAINT properties_parking_space_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
