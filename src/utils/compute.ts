const longCompute = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  };
  return sum;
}

process.on('message', (msg) => {
  if (msg == 'start') {
    const sum = longCompute();
    process.send(sum);
  }
})
