<!doctype html>
<html>
<body>
	<h2>Details</h2>

	<div data-ng-app="myapp" data-ng-controller="DetailsCompanyController">
		<div class="nestedRows">
			<table>
				<tr>
					<th>Name</th>
					<th>Address</th>
					<th>City</th>
					<th>Country</th>
				</tr>
				<tr data-ng-repeat="company in allCompanies">
					<td>{{company.name}}</td>
					<td>{{company.address}}</td>
					<td>{{company.city}}</td>
					<td>{{company.country}}</td>
					<td><a href="" data-ng-click="showDetails(company.name)">Get
							Details</a></td>
				</tr>
			</table>
		</div>
		<div class="show-company-details" data-ng-show="showDetailsFlag">
			<table>
				<tr>
					<th>Name</th>
					<th>Address</th>
					<th>City</th>
					<th>Country</th>
					<th>Email</th>
					<th>Phone Number</th>
					<th>Owners</th>
				</tr>
				<tr data-ng-repeat="company in companyDetails">
					<td>{{company.name}}</td>
					<td>{{company.address}}</td>
					<td>{{company.city}}</td>
					<td>{{company.country}}</td>
					<td>{{company.email}}</td>
					<td>{{company.phoneNumber}}</td>
					<td><span
						data-ng-repeat="owner in company.owners">{{owner}}{{$last
							? '' : ', '}}</span></td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>