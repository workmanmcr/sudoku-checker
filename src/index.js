export function checkRow(numbers) {
    if (numbers.length !== 9) 
        return false;
    let n = [];
    for (let i = 0; i < numbers.length; i++) {
        const value = numbers[i];
        if (value < 10 && value > 0)
            if (n.includes(value))
                return false;
            else
                n.push(value);
        else
            return false;
    }
    return true;
}

export function checkColumn(numbers) {
  if (numbers.length !== 9) 
      return false;
  let n = [];
  for (let i = 0; i < numbers.length; i++) {
      const value = numbers[i];
      if (value < 10 && value > 0)
          if (n.includes(value))
              return false;
          else
              n.push(value);
      else
        return false;
  }
    return true;
}





