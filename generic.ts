// Generic

function myDatas<T>(value: T) {
  return value;
}

// Generic bisa mengetahui tentang typedata apa yng dimasukkan
console.log(myDatas("Rian").length);
console.log(myDatas(121));
