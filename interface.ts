interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

// wajib mengimplementasikan apapun property / method yng ada
class Asuss implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  on(): void {
    console.log("Nyala");
  }

  off(): void {
    console.log("Mati");
  }
}

const Z12 = new Asuss("Z1 pro", true);
Z12.on();
Z12.off();
