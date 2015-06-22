//when the button is clicked, the displayed text is appended to the string from the input

var Counter = Backbone.Model.extend({
	defaults: {"value": ""}
})

var CounterView = Backbone.View.extend({
	render: function(){
		var val = this.model.get("value");//place for the entered text to be displayed
		var concat_form = '<form><textarea></textarea></form>'//input text field
		var concat = '<button class="concat">concatenate</button>'; //button labeled concatenate
		this.$el.html('<p>' + concat_form + '</p>' + concat + val);

	}
});

$(document).ready(function(){



$("concatdiv").append(counterView.$el);
});