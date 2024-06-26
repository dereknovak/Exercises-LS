ALTER TABLE stars
 DROP CONSTRAINT stars_spectral_type_check;

CREATE TYPE spectral_type_enum
    AS ENUM ('O', 'A', 'F', 'G', 'K', 'M');

ALTER TABLE stars
ALTER COLUMN spectral_type
 TYPE spectral_type_enum
USING spectral_type::spectral_type_enum;