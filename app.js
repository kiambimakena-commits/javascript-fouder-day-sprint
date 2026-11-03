const itemName = "Notebook";
const price = 12.5;
const quantity = 3;

const subtotal = price * quantity;
const taxRate = 0.08;
const tax = subtotal * taxRate;
const total = subtotal + tax;

console.log("Item:", itemName);
console.log("Subtotal:", subtotal.toFixed(2));
console.log("Tax:", tax.toFixed(2));
console.log("Total:", total.toFixed(2));
const score = 75;

if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}
console.log("Counting from 1 to 5:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

const result = calculateTotal(100, 3);
console.log("Total price:", result);

function printReceipt(item, price, quantity) {
    const subtotal = price * quantity;
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    console.log("----- SHOPPING RECEIPT -----");
    console.log("Item:", item);
    console.log("Price:", price.toFixed(2));
    console.log("Quantity:", quantity);
    console.log("Subtotal:", subtotal.toFixed(2));
    console.log("Tax:", tax.toFixed(2));
    console.log("Total:", total.toFixed(2));

    if (total >= 100) {
        console.log("Message: Large purchase!");
    } else {
        console.log("Message: Thank you for shopping!");
    }
}

printReceipt("Notebook", 20, 3);
const products = ["Notebook", "Pen", "Bag", "Pencil"];

console.log("My products:");
console.log(products);

console.log("First product:", products[0]);
console.log("Second product:", products[1]);

products.push("Ruler");

console.log("After adding a product:");
console.log(products);

const product = {
    name: "Notebook",
    price: 20,
    quantity: 3,
    category: "Stationery"
};

console.log("Product name:", product.name);
console.log("Price:", product.price);
console.log("Quantity:", product.quantity);
console.log("Category:", product.category);

const producttotal = product.price * product.quantity;
console.log("Total cost:", producttotal);

const shopProducts = [
    { name: "Notebook", price: 20 },
    { name: "Pen", price: 5 },
    { name: "School Bag", price: 50 }
];

console.log("Shop Products:");

shopProducts.forEach(function(product) {
    console.log(product.name + " costs " + product.price);
});

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(this.name + " costs " + this.price);
    }
}

const product1 = new Product("Notebook", 20);
const product2 = new Product("School Bag", 50);

product1.displayInfo();
product2.displayInfo();
const student = {
    name: "Gloria",
    course: "Digital Design and Applied AI",
    completed: true
};

document.getElementById("studentName").textContent =
    "Name: " + student.name;

document.getElementById("studentCourse").textContent =
    "Course: " + student.course;

if (student.completed) {
    document.getElementById("studentStatus").textContent =
        "Status: Learning successfully!";
} else {
    document.getElementById("studentStatus").textContent =
        "Status: Still learning";
}
