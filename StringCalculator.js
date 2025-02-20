class StringCalculator {
    add(numbers) {
      if (!numbers) return 0; // Empty string returns 0
  
      let delimiter = /,|\n/; // Default delimiters (comma and newline)
      
      if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
        numbers = parts.slice(1).join("\n"); // Remove the delimiter definition part
      }
  
      const numArray = numbers.split(delimiter).map(Number);
      const negatives = numArray.filter(n => n < 0);
      
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
      }
  
      return numArray.reduce((sum, num) => sum + num, 0);
    }
  }
  
  
  module.exports = StringCalculator; // Export the class for testing