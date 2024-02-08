-- Insert property categories
INSERT INTO property_categories(name)
    VALUES ('Residential'),
('Shed'),
('Shops'),
('Buildings'),
('Warehouse'),
('Garage'),
('Office'),
('Land');

-- Insert property subcategories of 'Residential' category
INSERT INTO property_subcategories(name, category_name)
    VALUES ('Appartamento', 'Residential'),
('Attico', 'Residential'),
('Mansarda', 'Residential'),
('Terratetto unifamiliare', 'Residential'),
('Terratetto plurifamiliare', 'Residential'),
('Loft', 'Residential'),
('Openspace', 'Residential'),
('Soffitta', 'Residential'),
('Baglio', 'Residential'),
('Baita', 'Residential'),
('Casa colonica', 'Residential'),
('Casale', 'Residential'),
('Chalet', 'Residential'),
('Dammuso', 'Residential'),
('Maso', 'Residential'),
('Masseria', 'Residential'),
('Nuraghe', 'Residential'),
('Rifugio', 'Residential'),
('Rustico', 'Residential'),
('Sasso', 'Residential'),
('Trullo', 'Residential'),
('Villa unifamiliare', 'Residential'),
('Villa bifamiliare', 'Residential'),
('Villa a schiera', 'Residential'),
('Appartamento in villa', 'Residential');

-- Insert property subcategories of 'Shed' category
INSERT INTO property_subcategories(name, category_name)
    VALUES ('Capannone', 'Shed');

-- Insert property subcategories of 'Shops' category
INSERT INTO property_subcategories(name, category_name)
    VALUES ('Locale Commerciale', 'Shops'),
('Laboratorio', 'Shops'),
('Attività Commerciale', 'Shops');

-- Insert property subcategories of 'Buildings' category
INSERT INTO property_subcategories(name, category_name)
    VALUES ('Palazzo/Edificio', 'Buildings');

-- Insert property subcategories of 'Warehouse' category
INSERT INTO property_subcategories(name, category_name)
    VALUES ('Magazzino/Deposito', 'Warehouse');

-- Insert property subcategories of 'Garage' category
INSERT INTO property_subcategories(name, category_name)
    VALUES ('Garage/Box', 'Garage'),
('Posto auto', 'Garage');

-- Insert property subcategories of 'Office' category
INSERT INTO property_subcategories(name, category_name)
    VALUES ('Ufficio/Studio', 'Office');

-- Insert property subcategories of 'Land' category
INSERT INTO property_subcategories(name, category_name)
    VALUES ('Terreno agricolo', 'Land'),
('Terreno edificabile', 'Land'),
('Terreno non edificabile', 'Land');

