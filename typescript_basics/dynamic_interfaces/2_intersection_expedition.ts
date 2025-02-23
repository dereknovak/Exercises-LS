interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

type Pet = Dog & Cat;

const catDog: Pet = {
  bark() {
    console.log('Woof!');
  },

  meow() {
    console.log('Meow!');
  }
};

catDog.bark();
catDog.meow();