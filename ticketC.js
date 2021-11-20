class ticketCounter{
    constructor(){
        this.buses=[];
        this.names={};
        this.fares={};
        this.seats={};

    }
    addBus(bus){
        this.buses.push(bus.name);
        this.names[bus.name]=bus.name;
        this.fares[bus.name]=bus.fare;
        this.seats[bus.name]=bus.seat;
        console.log("Alloted bus successfuly.",bus)
        console.log("Seats registered",bus.seat)
    }
    
    isBusAvailable(name){
         var busIndex=this.buses.indexOf(name);
         if(busIndex==-1){
             return false;
         } 
         else{
             return true;
         }
    }

    getDetails(name){
        var isAvailable=this.isBusAvailable(name);
        console.log(isAvailable);
       
        if (isAvailable==false){
            console.log("We do not provide this bus service");
        }
        else{
            var Busfare=this.fares[name]
            console.log("The fare of this bus is",Busfare,"taka")
            //console.log("total seats of this bus is",seat)
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
FultalaT.isBusAvailable("Shohag")
FultalaT.getDetails("Shohag")
FultalaT.bookTicket("Hanif",5)