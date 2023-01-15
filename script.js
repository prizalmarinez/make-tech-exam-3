function reorder(array) {
  let longestChain = [];

  function findCombinations(remainingWords, currentChain) {
    if (remainingWords.length === 0) {
      return currentChain;
    }

    // Iterate over the remaining words
    for (let i = 0; i < remainingWords.length; i++) {
      let lastLetter, firstLetter;

      if (currentChain.length > 0) {
        lastLetter =
          currentChain[currentChain.length - 1][
            currentChain[currentChain.length - 1].length - 1
          ];
      }
      firstLetter = remainingWords[i][0];
      // If the first letter of the current word is the same as the last letter of the last word in the current chain
      if (!lastLetter || firstLetter === lastLetter) {
        // Copy the remaining words and current chain arrays, so that we don't modify the original arrays
        let remainingWordsCopy = [...remainingWords];
        let currentChainCopy = [...currentChain];
        // Remove the current word from the remaining words array
        remainingWordsCopy.splice(i, 1);
        // Add the current word to the current chain array
        currentChainCopy.push(remainingWords[i]);
        // Recursively call the findCombinations function to find more possible chains
        let tempChain = findCombinations(remainingWordsCopy, currentChainCopy);

        if (tempChain && tempChain.length > longestChain.length) {
          longestChain = tempChain;
        }
      }
    }
  }

  findCombinations(array, []);

  return longestChain;
}
// console.log("OUTPUT", reorder(["team", "cat"]));
console.log(
  "OUTPUT",
  reorder([
    "extra",
    "arch",
    "team",
    "hen",
    "lamp",
    "cat",
    "price",
    "mall",
    "need",
  ])
);
