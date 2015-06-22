
var Counter = Backbone.Model.extend({
    defaults : {"value" : 0}
});

var CounterView = Backbone.View.extend({
    render: function () {
        var val = this.model.get("value");
        var add_btn = '<button class="add">Increment</button>';
        var subtract_btn = '<button class="subtract">decrement</button>';
        this.$el.html('<p>'+val+'</p>' + add_btn + subtract_btn);
    }
});

var counterModel, counterView;

$(document).ready( function () {

counterModel = new Counter();

counterView = new CounterView({model : counterModel});
counterView.render();

counterModel.on("change", function () {
	counterView.render();
});

counterView.$el.on("click",".add", function () {
    var mod = counterView.model;
    var currVal = mod.get("value");
    mod.set("value",currVal+1);
});

counterView.$el.on("click",".subtract", function () {
    var mod = counterView.model;
    var currVal = mod.get("value");
    mod.set("value",currVal-1);
});

$("#counterdiv").append(counterView.$el);

});