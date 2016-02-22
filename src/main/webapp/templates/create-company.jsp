<!doctype html>
<html>
<body>
	<h2>Create Company</h2>
	<div data-ng-app="myapp" data-ng-controller="CreateCompanyController">
		<form name= "createform" novalidate>
			<div id="container">
				<div class="row">
					<div class="column">Name:</div>
					<div class="column">
						<input type="text" required data-ng-model="createform.name" />
					</div>
				</div>
				<div class="row">
					<div class="column">Address:</div>
					<div class="column">
						<input type="text" required data-ng-model="createform.address" />
					</div>
				</div>
				<div class="row">
					<div class="column">City:</div>
					<div class="column">
						<input type="text" required data-ng-model="createform.city" />
					</div>
				</div>
				<div class="row">
					<div class="column">Country:</div>
					<div class="column">
						<input type="text" required data-ng-model="createform.country" />
					</div>
				</div>
				<div class="row">
					<div class="column">Email:</div>
					<div class="column">
						<input type="text" data-ng-model="createform.email" />
					</div>
				</div>
				<div class="row">
					<div class="column">Phone Number:</div>
					<div class="column">
						<input type="text" data-ng-model="createform.phoneNumber" />
					</div>
				</div>
				<div class="row">
					<div class="column">Beneficial Owners:</div>
					<div class="column">
						<input type="text" data-ng-list data-ng-model="createform.owners" />
					</div>
				</div>
				<div class="row">
					<div class="column">
						<button data-ng-click="create()">Create</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</body>
</html>