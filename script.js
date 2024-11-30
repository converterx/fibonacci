const fibonacciSequence = [1, 1];

// Fibonacci dizisini genişletme
const generateFibonacci = (n) => {
  while (fibonacciSequence.length < n) {
    const length = fibonacciSequence.length;
    fibonacciSequence.push(fibonacciSequence[length - 1] + fibonacciSequence[length - 2]);
  }
};

// Metni Fibonacci dizisine çevirme
const convertToFibonacci = () => {
  const inputText = document.getElementById('inputText').value.toUpperCase();
  const fibonacciOutput = document.getElementById('fibonacciOutput');

  if (inputText.trim() === "") {
    fibonacciOutput.textContent = "Waiting for text...";
    return;
  }

  let output = [];
  for (let char of inputText) {
    if (char >= 'A' && char <= 'Z') {
      const position = char.charCodeAt(0) - 65 + 1; // A = 1
      generateFibonacci(position);
      output.push(fibonacciSequence[position - 1]);
    }
  }

  fibonacciOutput.textContent = output.join(', ');
};
