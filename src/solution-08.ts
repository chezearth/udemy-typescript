interface mapItem<T> {
  [key: string]: T;
}

class MyMap<T> {

  // private map: Array<any> = [];
  private map: mapItem<T> = {}

  setItem(key: string, item: T) {
    this.map[key] = item
  }// should create a new key-value pair

  getItem(key: string) {
    return this.map[key];
  }// should retrieve the value of the provided key

  clear() {
    this.map = {};
  }// should remove all key-value pairs

  printMap() {
    Object.keys(this.map).forEach(e => {
      console.log(e, this.map[e]);
    });
  }

}// should output key-value pairs


const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.setItem('apples', 11);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
