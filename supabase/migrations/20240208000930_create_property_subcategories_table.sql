CREATE TABLE public.property_subcategories(
    name text NOT NULL,
    category_name text NOT NULL,
    CONSTRAINT property_subcategories_pkey PRIMARY KEY (name),
    CONSTRAINT property_subcategories_category_name_fkey FOREIGN KEY (category_name) REFERENCES property_categories(name) ON DELETE CASCADE
);

ALTER TABLE public.property_subcategories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Property subcategories are viewable by everyone." ON property_subcategories
    FOR SELECT
        USING (TRUE);

