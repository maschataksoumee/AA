<div id="walk-container">
  <div id="walk"></div>
</div>

<style>
	@keyframes walkanim {
  to { background-position: 100% 0; }
}
@keyframes stroll {
  from { transform: translateX(-100%); }
  to { transform: translateX(500%); }
}
#walk-container {
	display: inline-block;
	position: relative;
	width: 20%;
	padding-bottom: 30%; 
	vertical-align: middle; 
	overflow: hidden; 
  animation: stroll 30s linear infinite;
}
#walk {
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/walk-sequence.svg);
  background-repeat: no-repeat;
  background-size: 800%;
  animation: walkanim 1s infinite steps(7);
}
</style>