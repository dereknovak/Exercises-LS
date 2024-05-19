ALTER TABLE birds
    ADD CONSTRAINT positive_age CHECK (age > 0);

INSERT INTO birds
    VALUES
    (DEFAULT, 'Donald', -2, 'Duck'); -- Should throw an Check constraint error

INSERT INTO birds
    VALUES
    (DEFAULT, 'Donald', 2, 'Duck');