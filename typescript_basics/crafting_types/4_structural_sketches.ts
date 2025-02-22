type Device = {
  manufacturer: string;
  model: string;
  year: number;
};

const computer: Device = {
  manufacturer: 'Apple',
  model: 'MacBook Pro 16',
  year: 2019,
}

const smartphone = {
  manufacturer: 'Apple',
  model: 'iPhone 13 Pro',
  year: 2021,
}

const anotherSmartphone: Device = smartphone;