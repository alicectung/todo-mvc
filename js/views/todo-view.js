// The DOM element for a todo item...
TodoView = Backbone.View.extend({
    //... is a list tag.
    tagName:  'li',

   
    events: {
       
        'click .toggle': 'checkComplete',
        'click .destroy': 'clear'
      },

  
    // Cache the template function for a single item.
    template: Handlebars.compile($('#item-template').html()),
  
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
      
        return this;
      },

    checkComplete: function (e) {
        this.$el.toggleClass('completed');
    },
    
    clear: function () {
        this.remove();
    }

  });