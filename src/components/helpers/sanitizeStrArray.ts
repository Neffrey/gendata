const sanitizeStrArray = (
  strArray: string[],
  newStr: string,
  allowDuplicates?: boolean
) => {
  // Sanitize newStr
  newStr = newStr.trim();

  // If allow duplicates then return new array
  if (newStr) {
    if (allowDuplicates) {
      return [...strArray, newStr];
    }
    // Convert to lowercase for comparison
    const LowerNewStr = newStr.toLowerCase();
    const LowerStrArray = strArray.map((str) => str.toLowerCase());
    // If newStr is not in strArray then add it and return
    if (!LowerStrArray.includes(LowerNewStr)) {
      return [...strArray, newStr];
    }
  }
  return strArray;
};

export default sanitizeStrArray;
