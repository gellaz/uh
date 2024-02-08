-- Insert property categories
insert into
    property_categories(name)
values
    ('Residential'),
    ('Shed'),
    ('Shops'),
    ('Buildings'),
    ('Warehouse'),
    ('Garage'),
    ('Office'),
    ('Land');

-- Insert property subcategories of 'Residential' category
insert into
    property_subcategories(name, category_name)
values
    ('Appartamento', 'Residential'),
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
insert into
    property_subcategories(name, category_name)
values
    ('Capannone', 'Shed');

-- Insert property subcategories of 'Shops' category
insert into
    property_subcategories(name, category_name)
values
    ('Locale Commerciale', 'Shops'),
    ('Laboratorio', 'Shops'),
    ('Attività Commerciale', 'Shops');

-- Insert property subcategories of 'Buildings' category
insert into
    property_subcategories(name, category_name)
values
    ('Palazzo/Edificio', 'Buildings');

-- Insert property subcategories of 'Warehouse' category
insert into
    property_subcategories(name, category_name)
values
    ('Magazzino/Deposito', 'Warehouse');

-- Insert property subcategories of 'Garage' category
insert into
    property_subcategories(name, category_name)
values
    ('Garage/Box', 'Garage'),
    ('Posto auto', 'Garage');

-- Insert property subcategories of 'Office' category
insert into
    property_subcategories(name, category_name)
values
    ('Ufficio/Studio', 'Office');

-- Insert property subcategories of 'Land' category
insert into
    property_subcategories(name, category_name)
values
    ('Terreno agricolo', 'Land'),
    ('Terreno edificabile', 'Land'),
    ('Terreno non edificabile', 'Land');