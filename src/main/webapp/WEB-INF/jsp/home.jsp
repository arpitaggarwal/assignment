<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<!doctype html>
<html>
<head>
<spring:url value="/js/jquery-2.1.4.min.js" var="jqueryJs" />
<spring:url value="/js/jquery-ui.min.js" var="jqueryUIJs" />
<spring:url value="/js/angular.min.js" var="angularJs" />
<spring:url value="/js/angular-route.min.js" var="angularRouteJs" />
<spring:url value="/js/ui-bootstrap-tpls-0.6.0.js" var="uiBootstrapJs" />
<spring:url value="/js/base.js" var="baseJs" />
<spring:url value="/css/base.css" var="baseCss" />
<spring:url value="/css/bootstrap-combined.min.css"
	var="bootstrapCombinedCss" />

<link href="${baseCss}" rel="stylesheet" />
<link href="${bootstrapCombinedCss}" rel="stylesheet" />
<script src="${jqueryJs}"></script>
<script src="${jqueryUIJs}"></script>
<script src="${angularJs}"></script>
<script src="${angularRouteJs}"></script>
<script src="${uiBootstrapJs}"></script>
<script src="${baseJs}"></script>
</head>
<body data-ng-app="myapp">
	<div class="navbar">
		<div class="navbar-inner">
			<div class="container">
				<div data-collapse="navCollapsed"
					class="nav-collapse collapse navbar-responsive-collapse">
					<ul class="nav">

						<li class="dropdown"><a href="#" class="dropdown-toggle"
							data-toggle="dropdown">Company Management<b class="caret"></b></a>
							<ul class="dropdown-menu">
								<li><a href="#create">Create</a></li>
								<li><a href="#update">Update</a></li>
								<li><a href="#details">Details</a></li>
							</ul></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="align-center" data-ng-view></div>
</body>
</html>