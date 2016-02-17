app.controller('contactlistCtrl', ['$scope', 'ContactService', '$routeParams', function($scope, ContactService, $routeParams) {
	var ctrl = this;

	$scope.gid = $routeParams.gid;

	ContactService.registerObserverCallback(function(contacts) {
		$scope.$apply(function() {
			ctrl.contacts = contacts;
		});
	});

	ContactService.getAll().then(function(contacts) {
		$scope.$apply(function(){
			ctrl.contacts = contacts;
		});
	});

	ctrl.createContact = function() {
		ContactService.create();
	};
}]);
