// Harus mengembalikan string
function getName(): string {
  return "Rian Arsa";
}

console.log(getName());

// Tidak boleh mengembalikan sesuatu
function coba(): void {
  console.log("My Name is Rian");
}

coba();

// Harus mengembalikan string dan harus ada parameter
function hello(name: string): string {
  return `Hello ${name}`;
}

console.log(hello("Rian"));

// Function sebagai type
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = function tambahValue(
  value1: number,
  value2: number
): number {
  return value1 + value2;
};

console.log(Add(1, 2));
