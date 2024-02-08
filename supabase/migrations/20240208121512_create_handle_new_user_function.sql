-- inserts a row into public.profiles
CREATE FUNCTION public.handle_new_user()
    RETURNS TRIGGER
    LANGUAGE plpgsql
    SECURITY DEFINER
    SET search_path = public
    AS $$
BEGIN
    INSERT INTO public.profiles(id, email, first_name, last_name, birth_date, tax_id, phone, email_secondary)
        VALUES(NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'first_name', NEW.raw_user_meta_data ->> 'last_name', NEW.raw_user_meta_data['birth_date']::date, NEW.raw_user_meta_data ->> 'tax_id', NEW.raw_user_meta_data ->> 'phone', NEW.raw_user_meta_data ->> 'email_secondary');
    RETURN new;
END;
$$;

-- trigger the function every time a user is created
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users FOR EACH ROW
    EXECUTE PROCEDURE public.handle_new_user();

