var myapp = angular.module("myapp", [ 'ngRoute', 'ui.bootstrap' ]);

myapp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/create', {
		templateUrl : '/assignment/templates/create-company.jsp'
	}).when('/update', {
		templateUrl : '/assignment/templates/update-company.jsp'
	}).when('/details', {
		templateUrl : '/assignment/templates/details-company.jsp'
	});
} ]);

myapp.controller('CreateCompanyController', function($scope, $http) {
	$scope.createform = {
		name : "",
		address : "",
		city : "",
		country : "",
		email : "",
		phoneNumber : "",
		owners : [],
	};

	$scope.create = function() {
		$http({
			method : 'POST',
			url : '/assignment/company/create',
			dataType : 'json',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : $scope.createform,
		});
	};
});

myapp.controller("UpdateCompanyController", function($scope, $http) {
	$http.get('/assignment/company/get/?filter=all').then(function(response) {
		$scope.allCompanies = response.data;
	}, function(response) {
	});
	$scope.updateform = {
		name : "",
		address : "",
		city : "",
		country : "",
		email : "",
		phoneNumber : "",
		owners : [],
	};
	$scope.update = function() {
		$http({
			method : 'POST',
			url : '/assignment/company/update',
			dataType : 'json',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : $scope.updateform,
		});
	};
	$scope.onSelect = function($item, $model, $label) {
		$scope.updateform.name = $item.name;
		$scope.updateform.address = $item.address;
		$scope.updateform.city = $item.city;
		$scope.updateform.country = $item.country;
		$scope.updateform.email = $item.email;
		$scope.updateform.phoneNumber = $item.phoneNumber;
		$scope.updateform.owners = $item.owners;
	};
});

myapp.controller("DetailsCompanyController", function($scope, $http) {
	$http.get('/assignment/company/get/?filter=all').then(function(response) {
		$scope.allCompanies = response.data;
	}, function(response) {
	});

	$scope.showDetails = function(companyName) {
		$scope.showDetailsFlag = true;
		if (companyName) {
			var url = "/assignment/company/get/company/?filter=" + companyName;
			$http.get(url).then(function(response) {
				$scope.companyDetails = response.data;
			});
		}
	};
});