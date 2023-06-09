//Quiz: Building Classes and Subclasses (2-3)

/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.wheels,this.horn);
	}
}

class Bicycle extends Vehicle{
  constructor(color= 'blue', wheels = 2, horn= 'honk honk' ){
    super(color, wheels , horn)

    

  }
  
	}

const MyVehicle = new Vehicle();
MyVehicle.honkHorn(); // beep beep
const MyBicycle = new Bicycle();
MyBicycle.honkHorn();


// your code goes here

/* tests
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk
*/
