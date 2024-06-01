ALTER TABLE stars
ALTER COLUMN name
 TYPE varchar(50);

/*
By increasing the number of characters allowed, no error will be thrown as none
of the current characters pose an issue. If, however, you were to lessen the
amount of characters and one star exceeds the new length, an error will be thrown.
*/