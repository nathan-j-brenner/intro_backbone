var Counter = Backbone.Model.extend({
	defaults: {"value": ""}
})

var CounterView = Backbone.View.extend({
	render: function(){
		var val = this.model.get("value");//place for the entered text to be displayed
		var concat_input = '<input class="string_input"></input>'//input text field
		var concat = '<button class="concat">concatenate</button>'; //button labeled concatenate
		this.$el.html('<p>' + val + '</p>' + concat_input + concat);
		// this.$el.html('<p>test</p>');

	}
});
var counterModel, counterView;
$(document).ready(function(){
	counterModel = new Counter();
	counterView = new CounterView({model: counterModel});
	counterView.render();

	counterModel.on("change", function(){
		counterView.render();
	});
//when the button is clicked, the displayed text is appended to the string from the input
	counterView.$el.on("click", ".concat", function(){
		var mod = counterView.model;
		var currVal = mod.get("value");
		var input_text = $('.string_input')[0].value;
		console.log(input_text);
		mod.set("value", currVal + input_text);
	})

$("#concatdiv").append(counterView.$el);
});