//class syntax
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;             
    return area;
  }

  paint() {
    return this.color;
  }
}

const rect = new Rectangle(2, 4, 'red');
const area = rect.area();
console.log(area);
const paint = rect.paint();
console.log('painting with color', paint);


//map class
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));

//date class
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format