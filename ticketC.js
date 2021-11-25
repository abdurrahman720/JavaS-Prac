class ticketCounter{
    constructor(){
        this.buses=[];
        this.busName=[];
        this.fares={};
        this.seats={};

    }
    addBus(bus){
        this.buses.push(bus.name);
        this.busName.push(bus);
        this.fares[bus.name]=bus.fare;
        this.seats[bus.name]=bus.seat;
        console.log("Alloted bus successfuly.",bus)
        console.log("Seats registered",bus.seat)
    }
    
    getDetails(name){
        var isAvailable=this.buses.indexOf(name);
       
        if (isAvailable==-1){
            console.log("We do not provide this bus service");
        }
        else{
            var Busfare=this.fares[name];
            var BusSeats=this.seats[name];
            console.log("The fare of this bus is",Busfare,"taka")
            console.log("total seats of this bus is",BusSeats)
        }
    }
    bookTicket(name,seatNo){
        var availableSeats=this.seats[name]-seatNo;
        console.log("booked successfullly",name)
        console.log("now available seats",availableSeats)
    }
    
}

class bus{
    constructor(name,fare,seat){
        this.name=name;
        this.fare=fare;
        this.seat=seat;
    }
}
var Bus1=new bus("Hanif",2000,45);
var Bus2=new bus("Shohag",1500,55);
var Bus3=new bus ("Eagle",1000,60);
var FultalaT= new ticketCounter();

FultalaT.addBus(Bus1);
FultalaT.addBus(Bus2);

FultalaT.getDetails("Shohag")
FultalaT.bookTicket("Hanif",5)