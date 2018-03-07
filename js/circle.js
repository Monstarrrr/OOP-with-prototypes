var r = Number(prompt("Enter a radius for the circle"));

var Circle = {

    radius: r,
    perimeter: function () {
        return 2 * this.radius * Math.PI;
    },

    area: function () {
        return this.radius * this.radius * Math.PI;
    }
};

console.log("The perimeter of the circle is " + Circle.perimeter() + " cm and it's area is " + Circle.area());
