export function calculate(expression) {
  try {
 
    const cleaned = expression.replace(/--/g, "+");
    let result = eval(cleaned);
    result = Number.parseFloat(result.toFixed(10));

    return result;
  } catch (err) {
    return "Error";
  }
}