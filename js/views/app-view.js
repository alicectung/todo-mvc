// Our overall **AppView** is the top-level piece of UI.
AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '.todoapp',
  
    events: {
      'keypress .new-todo': 'createOnEnter',
      'click .toggle': 'checkComplete'
    },
  
    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added.
    initialize: function () {
      this.$input = this.$('.new-todo');
      this.$list = $('.todo-list');
  
      this.listenTo(todosCollection, 'add', this.addOne);
    },
  
    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function (todo) {
        var newTodoView = new TodoView({ model: todo });
        this.$list.append(newTodoView.render().el);
      },
  
    createOnEnter: function (e) {
      if (e.which === 13 && this.$input.val()) {
        todosCollection.add({
          title: this.$input.val(),
          completed: false
        });
  
        this.$input.val('');
      }
    },

    checkComplete: function (e) {
       
        console.log(todosCollection.completed);
    }



  });