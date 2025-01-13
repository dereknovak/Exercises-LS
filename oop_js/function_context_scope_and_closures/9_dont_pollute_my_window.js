// With a closure

const greeter = function() {
  const name = 'Naveed';
  const greeting = 'Hello';

  return {
    message: `${greeting} ${name}!`,
    sayGreetings() {
      console.log(this.message);
    }
  }
};

greeter().sayGreetings();

// With IIFE

const greeter = {
  message: (() => {
    const name = 'Naveed';
    const greeting = 'Hello';

    return `${greeting} ${name}!`;
  })(),

  sayGreetings() {
    console.log(this.message);
  }
};

greeter.sayGreetings();