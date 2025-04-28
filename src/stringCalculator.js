class StringCalculator {
    add(numbers) {
      if (!numbers) return 0;
  
      let delimiter = /,|\n/; 
  
      if (numbers.startsWith('//')) {
        const delimiterLineEnd = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterLineEnd);
        numbers = numbers.substring(delimiterLineEnd + 1);
  
        // Create a regex: match either the custom delimiter OR \n
        delimiter = new RegExp(`[${delimiter}\n]`);
      }
  
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