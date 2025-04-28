class StringCalculator {
    add(numbers) {
      if (!numbers) return 0;

      let delimiter = /,|\n/;

      const numList = numbers
        .split(delimiter)
        .filter(n => n !== '')
        .map(Number);      

        const negatives = numList.filter(n => n < 0);
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
      }
  
      return numList.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;