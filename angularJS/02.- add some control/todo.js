angular.module('todoApp', [])
	// TodosListController: The controler is the code behind the view.
	// You can clearly see your application behavior because there is no DOM
	// manipulation or famework specific bolierplate. Just simpple, readable JavaScript

  .controller('TodoListController', function() {
    var todoList = this;

    /* We area creating the model with two inial todo items. Notice that you simply assign
    your model to the '$scope' and the AngularJS reflects the state in the UI automatically.
    The model data is a Plain-Old-JavaScript-Object no need to wrap it in proxy pr accesses
    the property though special setter methods
    */
    todoList.todos = [
      {text:'Task 1', done:true},
      {text:'Task 2', done:false},
      {text:'Task 3', done:true}];

 	// addTodo: We area assigning the behavior inthe the '$scope' so that the 'ng-submit' can invoke it
    todoList.addTodo = function() {

     	/*This is just the 'Array-push' method. Calling it updates the model, which then updates the view
     	throug data-binding. The 'ng-repat' is bound to this array. It automatically unrolls the array and
     	adds the new DOM element into the view. (se 'ng-repeat' in the 'index.html' tab)
     	*/
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
 	// remaining: This is a computed property. No need to define its dependencies or worry about when it 
 	// needs to be updated
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });