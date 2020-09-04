<?php
	include('HeaderClient.php');
?>
<script>
	const UserIDClient = "<?php echo $_SESSION['UserId']; ?>";
	const FirstName = "<?php echo $_SESSION['FirstName']; ?>";
	const LastName = "<?php echo $_SESSION['LastName']; ?>";
	const CountryId = "<?php echo $_SESSION['CountryId']; ?>";
	// alert(UserIDClient);
	$(document).ready(function(){
		var UserID = "<?php echo $_SESSION['UserId']; ?>";
		$("#ulList").hide();
		if(UserID == "")
		{
			$("#btnLogin").show();
			$("#btnLogout").hide();
		}
		else
		{
			$("#btnLogout").show();
			$("#btnLogin").hide();
		}
	});
</script>

<div class="container-fluid mb-5">
	<!-- <div class= "row mt-5 mb-5">
		<div class="col-sm-12 col-ms-12 col-12 col-lg-12">
			<h2 class="h3-responsive font-weight-normal text-center text-uppercase mb-0 px-3 wow fadeInDown black-text " data-wow-delay="0.3s">
				Dashboard
			</h2>
		</div>
	</div> -->

	<div class="row">
		<div class="col-md-3 offset-md-1 text-center">
			<a href="Dashboard.php">
				<div class="card bg-primary text-white">
					<div class="card-body">
						<i class="fa fa-book text-white" aria-hidden="true"></i>
					Manuscripts
					</div>
				</div>
			</a>
		</div>

		<div class="col-md-3 text-center">
			<a href="Payments.php">
				<div class="card bg-success text-white">
					<div class="card-body">
						<i class="fa fa-credit-card text-white" aria-hidden="true"></i>
					Payments
					</div>
				</div>
			</a>
		</div>
		<div class="col-md-3 text-center">
			<a href="UserMembership.php">
				<div class="card bg-info">
					<div class="card-body text-white">
						<i class="fa fa-star text-white" aria-hidden="true"></i>
					Membership
					</div>
				</div>
			</a>
		</div>
	</div>

	<div class="row mt-5">		
		<div class="col-md-3 offset-md-1 text-center">
			<a href="userSupport.php">
				<div class="card bg-warning">
					<div class="card-body text-white">
						<i class="fa fa-comments text-white" aria-hidden="true"></i>
					Support
					</div>
				</div>
			</a>
		</div>
		<div class="col-md-3 text-center">
			<a href="Profile.php">
				<div class="card bg-primary">
					<div class="card-body text-white">
						<i class="fa fa-user text-white" aria-hidden="true"></i>
					Accounts
					</div>
				</div>
			</a>
		</div>
		<div class="col-md-3 text-center">
			<a href="https://blog.authorassists.com/" target="_blank">
				<div class="card bg-success">
					<div class="card-body text-white">
						<i class="fa fa-comments text-white" aria-hidden="true"></i>
					Blogs
					</div>
				</div>
			</a>
		</div>

		<!-- <div class="col-md-3 text-center">
			<a href="testQuery.php">
				<div class="card bg-warning">
					<div class="card-body text-white">
						<i class="fa fa-user text-white" aria-hidden="true"></i>
					Query
					</div>
				</div>
			</a>
		</div> -->
	</div>

	<div class="row mt-5">
		<!-- <div class="col-md-3 offset-md-1 text-center">
			<a href="UserService.php">
				<div class="card bg-success">
					<div class="card-body text-white">
						<i class="fa fa-certificate text-white" aria-hidden="true"></i>
					Services
					</div>
				</div>
			</a>
		</div> -->
		<!-- <div class="col-md-3 offset-md-1 text-center">
			<a href="https://blog.authorassists.com/" target="_blank">
				<div class="card bg-info">
					<div class="card-body text-white">
						<i class="fa fa-comments text-white" aria-hidden="true"></i>
					Blogs
					</div>
				</div>
			</a>
		</div> -->
		<!-- <div class="col-md-3 text-center">
			<a href="testQuery.php">
				<div class="card bg-warning">
					<div class="card-body text-white">
						<i class="fa fa-user text-white" aria-hidden="true"></i>
					Query
					</div>
				</div>
			</a>
		</div> -->
	</div>
</div>
<link rel="stylesheet" href="src/css/aa2.css">

<?php
	include('footer.php');
?>


<style>

	    padding: 15px;
    background-color: #fafafa;
    border-left: 6px solid #7f7f84;
    margin-bottom: 10px;
    -webkit-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
       -moz-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
            box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
}

	.notice-Ghost {
    border-color: #C3DA5E;
    }

    .notice-Art {
    border-color: #F0B85C;
}


.navbar-inverse {
		background-color: #2C3E50;
		border-color: #2C3E50;
}

.navbar {
		position: relative;
		min-height: 50px;
		margin-bottom: 0px;
		border: 0px solid transparent;
}
.navbar-nav > li > a {
		padding-top: 20px;
		padding-bottom: 10px;
		line-height: 20px;
}
@media (min-width: 768px){

.navbar {
		border-radius: 0px;
}}

.navbar-brand {
		float: left;
		height: auto;
		padding: 15px 15px;
		font-size: 18px;
		line-height: 20px;
}
.sidebar-toggle {
		color: #fff;
		font-size: 28px;
		display: inline-block;
		padding: 3px 22px;
}
@media (min-width:768px){
.container-1{width:15%;float:left;}
.container-2{width:100%;float: left;}
}

@media (max-width:768px){
.container-1{width:100%;}
.container-2{width:100%;}
}
.container-1:after,
.container-2:before,
{
	display: table;
	content: " ";
}
.container-1:after,
.container-2:after,
{clear: both;}

.container-1{display: none;}
/*navbar-right=====START==========*/

.social-icon{margin:0px;padding:0px;}
.social-icon li {margin: 0px;padding: 0px;list-style-type: none;}
.social-icon li a {
		display: block;
		padding: 15px 14px;
		text-decoration:none;
}
.social-icon li a:focus{
	 color:#fff;
		text-decoration:none;
}

.messages-link{
				color: #fff !important;
		background: #16a085 !important;

}

.alerts-link{
				color: #fff !important;
		background: #f39c12 !important;

}

.tasks-link{
				color: #fff !important;
		background: #2980b9 !important;

}

.user-link{
				color: #fff !important;
		background: #E74C3C !important;

}
 .number {
		position: absolute;
		bottom: 25px;
		left: 3px;
		width: 20px;
		height: 20px;
		padding-right: 1px;
		border-radius: 50%;
		text-align: center;
		font-size: 11px;
		line-height: 20px;
		background-color: #2c3e50;
}

.dropdown-menu {
		position: absolute;
		top: 100%;
		left: -105px;
		z-index: 1000;
		display: none;
		float: left;
		min-width: 160px;
		padding: 5px 0;
		margin: 2px 0 0;
		font-size: 14px;
		text-align: left;
		list-style: none;
		background-color: #fff;
		-webkit-background-clip: padding-box;
		background-clip: padding-box;
		border: 1px solid #ccc;
		border: 1px solid rgba(0, 0, 0, .15);
		border-radius: 4px;
		-webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
		box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
/*navbar-right=======END========*/

/*sidebar-toggle=============*/
.sidebar-toggle:hover, .sidebar-toggle:focus {
		color: #fff;
		text-decoration: underline;
}


/*sidr-NAVBAR=======START========*/
.navbar-nav-1{width: 100%;background-color:#34495E;height:auto;overflow: hidden;z-index: 1020;position: relative;}

.side-user {
		display: block;
		width: 100%;
		padding: 15px;
		border-top: none !important;
		border-bottom: 1px solid #142638;
		text-align: center;
}
.close-btn {
		position: absolute;
		z-index: 99;
		color: #fff;
		font-size: 31px;
		top: 0px;
		left: 223px;    
		display: none;
		padding: 0px;
		cursor: pointer;
}
.close-btn .fa-window-close{color:#fff;font-size: 25px;}
.welcome {
		margin: 0;
		font-style: italic;
		color: #9aa4af;
}

.name {
		margin: 0;
		font-family: "Ubuntu","Helvetica Neue",Helvetica,Arial,sans-serif;
		font-size: 20px;
		font-weight: 300;
		color: #ccd1d7;
}
.side-user a{
	 color:#fff;
}
.nav-search{border-top: 1px solid #54677a;}
.nav-search .form-control{border: 1px solid #000;border-radius: 0px;}
.nav-search .btn{border: 1px solid #000;border-radius: 0px;}

.dashboard>a{
		color:#fff;
		}
.side-nav li {
		border-top: 1px solid #54677a;
		border-bottom: 1px solid #142638;
}

.side-nav>li>a:active {
		text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
		outline: none;
		color: #fff;
		background-color: #34495e;
}

.panel {
		margin-bottom: 0;
		border: none;
		border-radius: 0;
		background-color: transparent;
		box-shadow: none;
}

.panel>a{
		position: relative;
		display: block;
		padding: 10px 15px;
		color: #fff;
}

.panel>ul>li>a {
		position: relative;
		display: block;
		padding: 10px 15px;
		color: darkcyan;
		background: black;
}
.nav > li > a:hover, .nav > li > a:focus {
		text-decoration: none;
		background-color: #3d566e;
}
/*sidr-NAVBAR=======END========*/
@media (min-width: 768px){

#page-wrapper {
	 
		padding: 0 30px;
		min-height: 1300px;
		border-left: 1px solid #2c3e50;
}
}

#page-wrapper {
		padding: 0 15px;
		border: none;
		
}

.date-picker{    
		border-color: #138871;
		color: #fff;
		background-color: #149077;
		margin-top: -7px;
		border-radius: 0px;
		margin-right: -15px;
}

#page-wrapper .breadcrumb {
		padding: 8px 15px;
		margin-bottom: 20px;
		list-style: none;
		background-color: #e0e7e8;
		border-radius: 0px;
		
}




@media (min-width: 768px){
.circle-tile {
		margin-bottom: 30px;
}
}

.circle-tile {
		margin-bottom: 15px;
		text-align: center;
}

.circle-tile-heading {
		position: relative;
		width: 80px;
		height: 80px;
		margin: 0 auto -40px;
		border: 3px solid rgba(255,255,255,0.3);
		border-radius: 100%;
		color: #fff;
		transition: all ease-in-out .3s;
}

/* -- Background Helper Classes */

/* Use these to cuztomize the background color of a div. These are used along with tiles, or any other div you want to customize. */

 .dark-blue {
		background-color: #34495e;
}

.green {
		background-color: #16a085;
}

.blue {
		background-color: #2980b9;
}

.orange {
		background-color: #f39c12;
}

.red {
		background-color: #e74c3c;
}

.purple {
		background-color: #8e44ad;
}

.dark-gray {
		background-color: #7f8c8d;
}

.gray {
		background-color: #95a5a6;
}

.light-gray {
		background-color: #bdc3c7;
}

.yellow {
		background-color: #f1c40f;
}

/* -- Text Color Helper Classes */

 .text-dark-blue {
		color: #34495e;
}

.text-green {
		color: #16a085;
}

.text-blue {
		color: #2980b9;
}

.text-orange {
		color: #f39c12;
}

.text-red {
		color: #e74c3c;
}

.text-purple {
		color: #8e44ad;
}

.text-faded {
		color: rgba(255,255,255,0.7);
}



.circle-tile-heading .fa {
		line-height: 80px;
}

.circle-tile-content {
		padding-top: 50px;
}
.circle-tile-description {
		text-transform: uppercase;
}

.text-faded {
		color: rgba(255,255,255,0.7);
}

.circle-tile-number {
		padding: 5px 0 15px;
		font-size: 26px;
		font-weight: 700;
		line-height: 1;
}

.circle-tile-footer {
		display: block;
		padding: 5px;
		color: rgba(255,255,255,0.5);
		background-color: rgba(0,0,0,0.1);
		transition: all ease-in-out .3s;
}

.circle-tile-footer:hover {
		text-decoration: none;
		color: rgba(255,255,255,0.5);
		background-color: rgba(0,0,0,0.2);
}


.morning {
		background: url(https://lh3.googleusercontent.com/-1YbV7nsVnX8/WMugaq-6BEI/AAAAAAAADSg/0wPfQ84vMUcCle_SkgiUDOumUKscMaA8QCL0B/w530-d-h353-p-rw/widget-bg-morning.jpg) center bottom no-repeat;
		background-size: cover;
}

.time-widget {
		margin-top: 5px;
		overflow: hidden;
		text-align: center;
		font-size: 1.75em;
}

.time-widget-heading {
		text-transform: uppercase;
		font-size: .5em;
		font-weight: 400;
		color: #fff;
}
#datetime{color:#fff;}
.tile-img {
		text-shadow: 2px 2px 3px rgba(0,0,0,0.9);
}

.tile {
		margin-bottom: 15px;
		padding: 15px;
		overflow: hidden;
		color: #fff;
}
	
</style>