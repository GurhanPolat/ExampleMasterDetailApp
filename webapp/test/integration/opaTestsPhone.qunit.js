/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"sapui5/ExampleMasterDetailApp/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});