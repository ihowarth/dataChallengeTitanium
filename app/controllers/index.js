(function init() {

	addEventListeners();
	
	$.mainWin.open();	
})();


function addEventListeners() {
	$.mainWin.addEventListener( "click" , function() {
		DataSetCreator.createDataSet();	
	});
};