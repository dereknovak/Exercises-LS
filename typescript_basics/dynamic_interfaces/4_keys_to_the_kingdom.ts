interface UserData {
  name: string;
  age: number;
  phone: string;
  email: string;
  isOnline: boolean;
}

type UserDataKeys = keyof UserData;

function printValue(data: UserData, key: UserDataKeys): void {
  console.log(data[key]);
}

const bob: UserData = {
  name: 'Bob',
  age: 42,
  phone: '123-456-7890',
  email: 'bob@aol.com',
  isOnline: true,
}

printValue(bob, 'email');  // bob@aol.com