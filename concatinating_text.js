var Counter = Backbone.Model.extend({
	defaults: {"value": ""}
})

var CounterView = Backbone.View.extend({
	render: function(){
		var val = this.model.get("value");//place for the entered text to be displayed
		var concat_form = '<form><textarea></textarea></form>'//input text field
		var concat = '<button class="concat">concatenate</button>'; //button labeled concatenate
		this.$el.html('<p>' + concat_form + '</p>' + concat + val);
		// this.$el.html('<p>test</p>');

	}
});

$(document).ready(function(){
	var counterModel = new Counter();
	var counterView = new CounterView({model: counterModel});
	counterView.render();

	counterModel.on("change", function(){
		counterView.render();
	});
//when the button is clicked, the displayed text is appended to the string from the input
	counterView.$el.on("click", ".concat", function(){
		var mod = counterView.model;
		var currVal = mod.get("value");
		// mod.set("value,", currVal+)
	})

$("#concatdiv").append(counterView.$el);
});