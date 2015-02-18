(function() {

    var app = angular.module('store', []);

    //important to use capital case and include word Controller
    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
            name: "Dodecehadron",
            price: 2.95,
            description: " . . .",
            canPurchase: true,
            soldOut: true
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: ". . .",
            canPurchase: false
        }
    ]
})();