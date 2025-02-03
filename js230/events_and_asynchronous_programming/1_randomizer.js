function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function randomizer(...callbacks) {
  const min = 0;
  const max = (arguments.length * 2) * 1000;
  let secondsElapsed = 0;

  const counterId = setInterval(() => {
    secondsElapsed++;
    console.log(secondsElapsed);

    if (secondsElapsed * 1000 >= max) {
      clearInterval(counterId);
    }
  }, 1000);

  for (callback of callbacks) {
    const duration = getRandom(min, max);
    setTimeout(callback, duration);
  }
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6