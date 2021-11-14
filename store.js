//core feature depelopment start
class store {
    constructor(name){
        this.name=name;
        this.items=[];
        this.prices={};
        this.stock={};
        this.totalSales=0;
    }
    //defining a method of searching a product
    isItemAvailable(name){
        var itemIndex= this.items.indexOf(name);
        if (itemIndex == -1){
            return false;
        }
        else{
            return true;
        }
    }
     //defining a method of searching a product price
    getPrices(name){
        var isAvailable= this.isItemAvailable(name);
        if (isAvailable==true){
            var itemPrice= this.prices[name];
            return itemPrice;
        }
        else{
            console.log("Sorry, We do not have this item");
        }
    }
    getTotalSales(){
        return this.totalSales;
    }
    //defining how to sell items and calculate total sales, remaining stocks etc
    sellItems(name,quantity){
        var availableI= this.isItemAvailable(name);
        var availableS= this.stock[name];

        if ( availableI==false || availableS < quantity){
            console.log("Sorry, We do not have enough");
            return;
        }
        else{
            var itemPrice= this.getPrices(name);
            var currentSales= itemPrice*quantity;
            this.totalSales= this.totalSales+currentSales;
            var remaining = availableS - quantity;
            this.stock[name]= remaining;
            console.log("Thank you for the purchase");
            return;
        }
    }

    //payrent 
    payRent(money){
        if (this.totalSales< money/2 ){
            console.log("Sorry, Taka nei");
            return;
        }
        if(this.totalSales > money/2 && this.totalSales!= money ){
            console.log("ei mashe ordhek dilam, pore sob dibo");
            return;
        }
        else{
            console.log("eije taka. samner mashe vara komay raikhen");
        }
    }

     //defining a method of adding product,quantity and price
    addItems(name,price,quantity){
        var isExisting = this.isItemAvailable(name);
        if (isExisting == true){
            var available=this.stock[name];
            this.stock[name]=available+quantity;
        }
        else{
            this.items.push(name);
            this.prices[name]=price;
            this.stock[name]=quantity;
        }
        
        
        
    }
}
//core feature depelopment end

//input and output section
var habluStore = new store ("Bolod Fashion House");
habluStore.addItems("shirt",300,5);
habluStore.addItems("pant",500,8);

var sold= habluStore.sellItems("shirt",3);
var vara= habluStore.payRent(20000);
//var second= habluStore.getPrices("juta");
//var amount= habluStore.gettotalSales;

console.log(sold);
console.log(vara);
