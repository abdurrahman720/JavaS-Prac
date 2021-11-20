class Garage{
    constructor(name){
        this.name=name;
        this.vehicles=[]; //we need to add vehicle object in this Queue Array
        this.customers={}; //all the vehicles should have it ownername-currentdue in dictionary
    }
    addVehicle(vehicle){
        this.vehicles.push(vehicle); 
        console.log("Vehicle added", vehicle);
        console.log("It will be released afetr", vehicle.repairTime,"day")
        var isExisting= this.customers[vehicle.owner]; //after adding vehicle, we should put the currentDue as Zero if the vehicle is new in our garage
        if (!isExisting){
            this.customers[vehicle.owner] = 0;
        }
    }

    releaseVehicle(){
        var vehicle= this.vehicles.shift(); //shift command takes the first element from Queue data structure Array and store this separately
        var currentDue= this.customers[vehicle.owner]; //vehicle released but we need to calculate the due: line 18 to 20
        var totalDue= currentDue+vehicle.repaircost;
        this.customers[vehicle.owner]=totalDue;
        console.log("released", vehicle);
        console.log("due from owner", totalDue);

    }
}

 //we could add vehicle as a single variable but the smarter way is to add this as object so that we can have multiple properties of multiple vehicles
class Vehicles {
    constructor(owner,repaircost,repairTime){
        this.owner=owner;
        this.repaircost=repaircost;
        this.repairTime=repairTime;
    }
}

//the next two class is not required for Garage but to add different types of vehicles we should extend this class as Bus and Trcuk. However we could also use Vehicle class since the properties are same
class Bus extends Vehicles{
    constructor(owner,repaircost,seats,repairTime){
        super(owner,repaircost,repairTime);
        this.seats=seats;
    }
}
class Truck extends Vehicles{
    constructor(owner,repaircost,seats,repairTime){
        super(owner,repaircost,repairTime);
        this.seats=seats;
        
    }
}

//everything fine! it's time to decalre object as vehicles
var habluGarage= new Garage ("Bolod Garage Ltd");
var khulna= new Bus("hanif",40000,45,7);
var dhaka= new Truck("Najim",2500,5,10);
//now use those methods to perform your programming!
habluGarage.addVehicle(khulna);
habluGarage.addVehicle(dhaka);

habluGarage.releaseVehicle(dhaka);

//Good Job!