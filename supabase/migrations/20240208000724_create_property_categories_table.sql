CREATE TABLE public.property_categories(
    name text NOT NULL,
    CONSTRAINT property_categories_pkey PRIMARY KEY (name)
);

ALTER TABLE public.property_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Property categories are viewable by everyone." ON property_categories
    FOR SELECT
        USING (TRUE);

