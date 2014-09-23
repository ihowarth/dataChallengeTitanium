var NameDatabase    = require( "nameDatabase"    );
var EmailGenerator  = require( "emailGenerator"  );
var MemberPrototype = require( "memberPrototype" );
var DataSetCreator  = require( "dataSetCreator"  );


var APP = {
    validateEmail : function( email ) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};