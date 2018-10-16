function stringMinglilog(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    return "";
  }
  if (str1.length !== str2.length) {
    return "";
  }
  return (
    str1.charAt(0) +
    str2.charAt(0) +
    stringMinglilog(str1.substring(1), str2.substring(1))
  );
}

console.log(stringMinglilog("cat", "dog"));
