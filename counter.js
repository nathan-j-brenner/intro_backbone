
var Counter = Backbone.Model.extend({
    defaults : {"value" : 0}
});

Counter.prototype.inc = function(){
	var val = this.get("value");
	this.set("value", val+1);
}
Counter.prototype.dec = function(){
	var mod = counterView.model;
	var val = this.get("value");
    // var currVal = mod.get("value");
    if(counterModel.attributes.value !== 0){
    	this.set("value",val-1);
	}
}

var CounterView = Backbone.View.extend({
	initialize: function(){
		this.model.on("change", this.render, this);
	},
	events: {'click button' : 'increment'
	},
	increment: function(){
		this.model.inc();
	},
	decrement: function(){
		this.model.dec();
	}

	// 	var self = this;
	// 	this.$el.on("click",".add", function () {
	// 	    var mod = self.model;
	// 	    var currVal = mod.get("value");
	// 	    mod.set("value",currVal+1);
	// 	});
	// 	this.model.on("change", function(){
	// 		self.render();
	// 	});
	// 	this.render();
	// },
    render: function () {
        var val = this.model.get("value");
        var add_btn = '<button class="add">Increment</button>';
        var subtract_btn = '<button class="subtract">Decrement</button>';
        var clear_btn = '<button class="clear">Clear</button>';
        this.$el.html('<p>'+val+'</p>' + add_btn + subtract_btn + clear_btn);
    }
});

// var counterModel, counterView;

$(document).ready( function () {

var counterModel = new Counter();

var counterView = new CounterView({model : counterModel});
counterView.render();
// counterView.render();

// counterModel.on("change", function () {
// 	counterView.render();
// });



// counterView.$el.on("click",".subtract", function () {
//     var mod = counterView.model;
//     var currVal = mod.get("value");
//     if(counterModel.attributes.value !== 0){
//     	mod.set("value",currVal-1);
// 	}
// });

// counterView.$el.on("click",".clear", function () {
//     var mod = counterView.model;
//     mod.set("value", 0);
// });


$("#counterdiv").append(counterView.$el);

});