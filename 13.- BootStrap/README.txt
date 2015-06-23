http://www.w3schools.com/angular/angular_bootstrap.asp

<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

Directives (Used Above) 	Explained
AngularJS 		Directive		Description
 - <body 		 ng-app		 	 Defines an application for the <body> element
 - <body 		 ng-controller	 	 Defines a controller for the <body> element
 - <tr 			 ng-repeat		 Repeats the <tr> element for each user in users
 - <button 		 ng-click		 Invoke the function editUser() when the <button> element is clicked
 - <h3 			 ng-show		 Show the <h3>s element if edit = true - 
 - <h3 			 ng-hide		 Hide the <h3> element if edit = true
 - <input 		 ng-model		 Bind the <input> element to the application
 - <button 		 ng-disabled		 Disables the <button> element if error or incomplete = true

Bootstrap Classes Explained
Element			Bootstrap Class		Defines
 - <div>		  container		  A content container
 - <table>		  table			  A table
 - <table>		  table-striped		  A striped table
 - <button>		  btn			  A button
 - <button>		  btn-success		  A success button
 - <span>		  glyphicon		  A glyph icon
 - <span>		  glyphicon-pencil	  A pencil icon
 - <span>		  glyphicon-user	  A user icon
 - <span>		  glyphicon-save	  A save icon
 - <form>		  form-horizontal	  A horizontal form
 - <div>		  form-group		  A form group
 - <label>		  control-label		  A control label
 - <label>		  col-sm-2		  A 2 columns span
 - <div>		  col-sm-10		  A 10 columns span


JavaScript Code Explained
 Scope Properties      Used for
 - $scope.fName          Model variable (user first name)
 - $scope.lName          Model variable (user last name)
 - $scope.passw1         Model variable (user password 1)
 - $scope.passw2         Model variable (user password 2)
 - $scope.users          Model variable (array of users)
 - $scope.edit           Set to true when user clicks on create user.
 - $scope.error          Set to true if passw1 not equal passw2
 - $scope.incomplete     Set to true if any field is empty (length = 0)
 - $scope.editUser       Sets model variables
 - $scope.watch          Watches model variables
 - $scope.test           Tests model variables for errors and incompleteness