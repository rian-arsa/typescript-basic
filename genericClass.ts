class List<T> {
  private data: T[];

  constructor(...data: T[]) {
    this.data = data;
  }

  add(data: T): void {
    this.data.push(data);
  }

  addMultiple(...data: T[]): void {
    this.data.push(...data);
  }

  getAll(): T[] {
    return this.data;
  }
}

// Type number hanya bisa menginputkan number
// const dataList = new List<number>(1, 2, 3, 4);
// dataList.add(1);
// dataList.addMultiple(2, 3, 4);
// console.log(dataList.getAll());

// Multiple Type
const dataList = new List<number | string>();
dataList.add(1);
dataList.addMultiple("2", 3, "4");
console.log(dataList.getAll());
