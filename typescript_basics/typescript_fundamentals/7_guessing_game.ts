let userID = 9;

/* 
If we attempt to assign a string to `userID`, the TypeScript compiler will
throw an error. This is because `userID` uses *type inference* to determine
that its type defintion is `number`. A string is not assignable to type `number`.
*/