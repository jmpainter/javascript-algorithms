const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

async function run() {
  await sleep(500);
  console.log("hello");
  await sleep(500);
  console.log("world");
}

run();
