interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

// wajib mengimplementasikan apapun property / method yng ada di interface
class Asus implements Laptop {
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

const Z1 = new Asus("Z1 pro", true);
Z1.on();
Z1.off();
