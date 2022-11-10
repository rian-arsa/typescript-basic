// Harus mengembalikan string
function getName(): string {
  return "Rian Arsa";
}

console.log(getName());

// Harus mengembalikan string dan harus ada parameter
function hello(name: string): string {
  return `Hello ${name}`;
}

console.log(hello("Rian"));

// Tidak boleh mengembalikan sesuatu
function coba(): void {
  console.log("My Name is Rian");
}

coba();
