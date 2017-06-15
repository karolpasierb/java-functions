var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(7, 8);
var triangle3Area = getTriangleArea(5, 10);

function getTriangleArea(a, h) {    
	if (a <= 0 || h <= 0) {
    	return "Nieprawidłowe dane";
	}

    return a * h / 2;
}


console.log("ogólny wynik funkcji wynosi " + getTriangleArea(10, 6) ); 
console.log("a triangle1Area wynosi " + triangle1Area);
console.log("z kolei triangle2Area wynosi " + triangle2Area);
console.log("natomiast triangle3Area wynosi " + triangle3Area);