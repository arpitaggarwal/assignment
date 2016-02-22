var myapp = angular.module("myapp", [ 'ngRoute' ]);

function myFunction() {
	var x = document.getElementById("myFrame").src;
	document.getElementById("demo").innerHTML = x;
};

// Define Routing for app
// Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
// Uri /ShowOrders -> template show_orders.html and Controller
// AddOrderController
myapp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/create', {
		templateUrl : '/Product/templates/create-testcase.jsp',
		controller : 'CreateController'
	}).when('/modify', {
		templateUrl : '/Product/templates/modify-testcase.jsp',
		controller : 'ModifyController'
	}).when('/delete', {
		templateUrl : '/Product/templates/delete-testcase.jsp',
		controller : 'DeleteController'
	}).when('/dashboard', {
		templateUrl : '/Product/templates/dashboard.jsp',
		controller : 'DashboardController'
	}).when('/testExecution', {
		templateUrl : '/Product/templates/testExecution.jsp',
		controller : 'TestExecutionController'
	}).when('/sprint', {
		templateUrl : '/Product/templates/sprint.jsp',
		controller : 'SprintController'
	}).when('/testUpload', {
		templateUrl : '/Product/templates/testUpload.jsp',
		controller : 'TestUploadController'
	});/*.otherwise({
		redirectTo : '/AddNewOrder'
	});*/
} ]);

myapp.controller('CreateController', function($scope) {

	$scope.message = 'This is a Create Test Case Screen';

});

myapp.controller('ModifyController', function($scope) {

	$scope.message = 'This is a Modify Test Case Screen';

});

myapp.controller('DeleteController', function($scope) {

	$scope.message = 'This is a Delete Test Case Screen';

});

myapp.controller('DashboardController', function($scope) {

	$scope.message = 'This is a Dashboard Screen';

});

myapp.controller('TestExecutionController', function($scope) {

	$scope.message = 'This is a Test Execution Screen';

});
myapp.controller('SprintController', function($scope) {

	$scope.message = 'This is a Sprint Screen';

});
myapp.controller('TestUploadController', function($scope) {

	$scope.message = 'This is Test Upload Screen';

});


/*
 * $.ajax({
 * 
 * url: 'http://stackoverflow.com body', data: myData, type: 'GET', crossDomain:
 * true, dataType: 'jsonp', success: function() { alert("Success"); }, error:
 * function() { alert('Failed!'); }, beforeSend: setHeader });
 */

/*
 * $('#where-you-want').load('http://stackoverflow.com body', function() {
 * console.log($('#where-you-want')); // process the DOM node under
 * `#where-you-want` here with XPath. });
 */

myapp.controller("LogoutController", function($scope, $http, $location) {
	$scope.logout = function() {

		$http.get('/Product/logout').success(
				function(data, status, headers, config) {

				}).error(function(data, status, headers, config) {
			
		});
	};
});



myapp.controller("ClickController", function($scope, $window) {
	/*
	 * $scope.helloTo = {}; $scope.helloTo.title = "AngularJS";
	 */
	/* $scope.count = 0; */
	$scope.openChildWindow = function() {
		var left = screen.width / 2 - 200, top = screen.height / 2 - 250;
		$window.open('https://xebia.com/', '', "top=" + top + ",left=" + left
				+ ",width=400,height=500");
	};

	$scope.person = {
		firstName : "Arpit",
		lastName : "Aggarwal",
	};
	$scope.fullName = function() {
		var x = $scope.person;
		return x.firstName + " " + x.lastName;
	};

	$scope.lastName = "Aggarwal";

	$scope.Arpit = {};
	$scope.Arpit.name = "Arpit Aggarwal";
	$scope.Arpit.rollno = 1;

});

// Create a directive, first parameter is the html element to be attached.
// We are attaching student html tag.
// This directive will be activated as soon as any student element is
// encountered in html. AngularJS provides support to create custom directives
// for following type of elements.

/*
 * Element directives - Directive activates when a matching element is
 * encountered.
 * 
 * Attribute - - Directive activates when a matching attribute is encountered.
 * 
 * CSS - - Directive activates when a matching css style is encountered.
 * 
 * Comment - - Directive activates when a matching comment is encountered.
 */
myapp
		.directive(
				'student',
				function() {
					// define the directive object
					var directive = {};
					// restrict = E, signifies that directive is Element
					// directive
					directive.restrict = 'E', 'A';
					// template replaces the complete element with its text.
					directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
					// scope is used to distinguish each student element based
					// on criteria.
					directive.scope = {
						student : "=name"
					};
					// compile is called during application initialization.
					// AngularJS calls it once when html page is loaded.
					directive.compile = function(element, attributes) {
						// element.css("border", "1px solid");
						// linkFunction is linked with each element with scope
						// to get the element specific data.
						var linkFunction = function($scope, element, attributes) {
							element.html("Student: <b>" + $scope.student.name
									+ "</b> , Roll No: <b>"
									+ $scope.student.rollno + "</b><br/>");
							// element.css("background-color", "#ff00ff");
						};
						return linkFunction;
					};
					return directive;
				});

/*document.onclick = function(event) {
	if (event === undefined)
		event = window.event; // IE hack
	var target = 'target' in event ? event.target : event.srcElement; // another
	// IE
	// hack

	
	 * var root = document.compatMode === 'CSS1Compat' ?
	 * document.documentElement : document.body;
	 
	// var mxy = [ event.clientX + root.scrollLeft, event.clientY +
	// root.scrollTop ];
	var path = getPathTo(target);

	var message =  'You clicked the element ' + path;
	document.getElementById("message").innerText = message;
};

function getPathTo(element) {
	if (element.id !== '')
		return "//*[@id='" + element.id + "']";

	if (element === document.body)
		return element.tagName.toLowerCase();

	var ix = 0;
	var siblings = element.parentNode.childNodes;
	for (var i = 0; i < siblings.length; i++) {
		var sibling = siblings[i];

		if (sibling === element)
			return getPathTo(element.parentNode) + '/'
					+ element.tagName.toLowerCase() + '[' + (ix + 1) + ']';

		if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
			ix++;
		}
	}
}*/