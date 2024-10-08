const imprime = (i) => {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000) + 1000; // Tempo entre 1 e 5 segundos
    setTimeout(() => {
      console.log(`Olá Mundo - ${i}`);
      resolve();
    }, delay);
  });
};

const main = async () => {
  console.log("Criando Threads...");

  const promises = [];
  for (let a = 0; a <= 9; a++) {
    promises.push(imprime(a));
  }

  await Promise.all(promises); // Aguarda todas as "threads" terminarem
};

main();
