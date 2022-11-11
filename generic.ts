// Generic

function myData<T>(value: T) {
  return value;
}

// Generic bisa mengetahui tentang typedata apa yng dimasukkan
console.log(myData("Rian").length);
console.log(myData(121));
