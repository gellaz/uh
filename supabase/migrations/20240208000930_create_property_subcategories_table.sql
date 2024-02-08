create table property_subcategories (
    name text not null,
    category_name text not null,
    constraint property_subcategories_pkey primary key (name),
    constraint property_subcategories_category_name_fkey foreign key (category_name) references property_categories (name) on delete cascade
);