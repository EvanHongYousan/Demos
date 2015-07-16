/**
 * Created by yantianyu on 2015/4/16.
 */
var BicycleShop = function(){};
BicycleShop.prototype = {
    sellBicycle: function(model){
        var bicycle;

        switch(model){
            case 'The Speedster':
                bicycle = new Speedster();
                break;
            case 'The Lowrider':
                bicycle = new Lowrider();
                break;
            case 'The Comfort Cruiser':
            default:
                bicycle = new ComfortCruiser();
        }
    }
};