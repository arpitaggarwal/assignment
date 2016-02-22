<!doctype html>
<html>
<body>
	<h2>Update Company</h2>
	<div data-ng-app="myapp" data-ng-controller="UpdateCompanyController">
		<form novalidate>
			<div id="container">
				<div class="row">
					<div class="column">Company Name:</div>
					<div class="column">
						<input type="text" data-ng-model="updateform.name"
							data-typeahead="company.name as company.name for company in allCompanies | filter:$viewValue | limitTo:3"
							data-typeahead-on-select='onSelect($item, $model, $label)' />
					</div>
				</div>
				<div class="row">
					<div class="column">Name:</div>
					<div class="column">
						<input type="text" data-ng-model="updateform.name" />
					</div>
				</div>
				<div class="row">
					<div class="column">Address:</div>
					<div class="column">
						<input type="text" data-ng-model="updateform.address" />
					</div>
				</div>
				<div class="row">
					<div class="column">City:</div>
					<div class="column">
						<input type="text" data-ng-model="updateform.city" />
					</div>
				</div>
				<div class="row">
					<div class="column">Country:</div>
					<div class="column">
						<input type="text" data-ng-model="updateform.country" />
					</div>
				</div>
				<div class="row">
					<div class="column">Email:</div>
					<div class="column">
						<input type="text" data-ng-model="updateform.email" />
					</div>
				</div>
				<div class="row">
					<div class="column">Phone Number:</div>
					<div class="column">
						<input type="text" data-ng-model="updateform.phoneNumber" />
					</div>
				</div>
				<div class="row">
					<div class="column">Beneficial Owners:</div>
					<div class="column">
						<input type="text" data-ng-list data-ng-model="updateform.owners" />
					</div>
				</div>
				<div class="row">
					<div class="column">
						<button data-ng-click="update()">Update</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</body>
</html>