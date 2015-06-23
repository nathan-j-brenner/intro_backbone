$(document).ready( function () {

var TextModel = Backbone.Model.extend({
    defaults : {"value" : ""},
    replace : function (str) {
      this.set("value", str);
    },
});

var TextView = Backbone.View.extend({
    render: function () {
        var textVal = this.model.get("value");
        var btn = '<button>Clear</button>';
        var input = '<input type="text" value="' + textVal + '" />';
        this.$el.html(textVal+"<br><div>" + input + btn + "</div>");
    },
    initialize: function () {
        this.model.on("change", this.render, this);
        // last argument 'this' ensures that render's
        // 'this' means the view, not the model
    },
    events : {
        "click button" : "clear",
        "keypress input" : "updateOnEnter"
    },
    replace : function () {
        var str = this.$el.find("input").val();
        this.model.replace(str);
    },
    clear: function () {
        this.model.replace("");
    },
    updateOnEnter: function (e){
        if(e.keyCode == 13) {
            this.replace();
        }
    }
});

var TextCollection = Backbone.Collection.extend({
    model : TextModel
});

var TextCollectionView = Backbone.View.extend({
    // var viewArray = [],
    render : function () {
        //add a delete button to the view of the collection
        var btn = '<button id="addbutton">Add Text</button>';
        var del_btn = '<button id="del_btn">Delete Text</button>';
        var div = '<div id="text-list"></div>';
        this.$el.html(div + btn + del_btn);
    },
    initialize : function () {
        this.listenTo(this.collection, 'add', this.addView);
        //add an event handler that listens for the 'remove' event for the collection and refreshes the list
        this.listenTo(this.collection, 'delete', this.deleteView);
        this.viewArray = [];
    },
    events : {
        "click #addbutton" : "addModel",
        "click #del_btn" : "deleteView"
    },
    addModel : function () {
        this.collection.add({});
        // collection adds a model, fires add event, then listener calls this.addView(model)
    },
    deleteModel: function(){
        this.collection.delete({});
    },
    addView : function (newModel) {
        newModel.set("value","Enter something here...");
        var view = new TextView({model : newModel});
        view.render();
        this.viewArray.push(view);
        this.$("#text-list").append(view.$el);
    },
    deleteView : function(lastModel){
        this.viewArray.pop().remove();
    },
});

var textCollection = new TextCollection();

var textCollectionView = new TextCollectionView({ collection : textCollection});

textCollectionView.render();

$("#listdiv").append(textCollectionView.$el);

});

//edited count
