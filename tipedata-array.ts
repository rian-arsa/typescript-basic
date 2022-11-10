// 1. Array
let names: string[] = ["Rian", "Ari", "sasono"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

// Mengakses Array
console.log(names[0]);
console.log(numbers[1]);

// Mengubah Array
names[0] = "cristiano";

// Menambah Array
names.push("Messi");

// Menghapus Array
delete names[2];

console.log(names);

// 2. Tuple
let student: [string, string, number] = ["Rian", "IPA 2", 120000];
let product: [string, number] = ["Adidas", 12111];
