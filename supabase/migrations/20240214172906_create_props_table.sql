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
    'None', -- Assente
    'Furnished', -- Arredato
    'Semi-furnished', -- Semi-arredato
    'Unfurnished' -- Non arredato
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
-- Condizioni immobile
--
CREATE TYPE property_condition_enum AS enum(
    'New under construction', -- Nuovo in costruzione
    'Excellent renovated', -- Ottimo ristrutturato
    'Good livable', -- Buono abitabile
    'To be renovated' -- Da ristrutturare
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

