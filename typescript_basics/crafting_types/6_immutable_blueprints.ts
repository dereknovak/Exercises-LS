interface Account {
  username: string;
  email: string;
  readonly accountCreationDate: string;
}

const myAccount: Account = {
  username: 'dereknovak',
  email: 'dereknovak@gmail.com',
  accountCreationDate: 'May 25',
};

myAccount.username = 'dnovak';               // Ok
myAccount.email = 'dnovak@gmail.com';        // Ok
myAccount.accountCreationDate = 'April 21';  // Error