var sfs = null;
var sky = null;

function initSFS()
{
	/*
	document.getElementById("subject").innerHTML = "<b>sample subject</b>";
	document.getElementById("specifics").innerHTML = "<b>sample</b>: Specifics";
	document.getElementById("details").innerHTML = "<b>sample</b>: details";
	document.getElementById("footer").innerHTML = "<b>sample</b>: footer";
	*/
	trace("Application started");
	
	// Create configuration object
	var config = {};
	config.host = "10.7.0.138";
	config.port = 8888;
	config.zone = "LIS";
	config.debug = false;//true;
	
	// Create SmartFox client instance
	sfs = new SmartFox(config);
	
	// Set client details
	var platform = navigator.appName;
	var version = navigator.appVersion;
	sfs.setClientDetails(platform, version);
	
	// Add event listeners
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
	sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, onLogout, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, onRoomJoin, this);
	sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, onRoomJoinError, this);
	
	sfs.addEventListener(SFS2X.SFSEvent.PING_PONG, onPingPong, this);
	
	sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, extResponse,this);
	
	trace("SmartFox API version: " + sfs.version);
	sfs.connect();
}

//------------------------------------
// SFS EVENT HANDLERS
//------------------------------------
		
function onConnection(event)
{
	if (event.success)
	{
		trace("Connected to SmartFoxServer 2X!");
		trace("Session id: " + sfs.sessionToken);	
		
		loadLoginPage();				
	}
	else
	{			
		loadOfflinePage();
		trace("Connection failed: " + (event.errorMessage ? event.errorMessage + " (" + event.errorCode + ")" : "Is the server running at all?"), true);
	}
}

function onConnectionLost(event)
{
	trace("I was disconnected; reason is: " + event.reason);	
	loadOfflinePage();//load disconnection 
}

function onLoginError(event)
{
	trace("Login error: " + event.errorMessage + " (" + event.errorCode + ")", true);	
}

function onLogin(event)
{
	trace("Login successful!" +
		  "\n\tZone: " + event.zone +
		  "\n\tUser: " + event.user +
		  "\n\tData: " + event.data);
	sfs.send(new SFS2X.Requests.System.JoinRoomRequest("Concord: Main"));
		
	//loadMainPage();//initialize join room success
	
	sfs.enableLagMonitor(true, 5);
}

function onLogout(event)
{
	trace("Logout from zone " + event.zone + " performed!");	
}

function onRoomJoin(event)
{
		trace("Room Join Succes");
		loadMainPage();//load the main menu after joining room
}

function onRoomJoinError(event)
{
	trace("Room Join error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onPingPong(event)
{
	var avgLag = Math.round(event.lagValue * 100) / 100;
	console.log("Average lag: " + avgLag + "ms");

	if(avgLag<5)
	{	
		document.getElementById("chatStatus").style="background-color:rgba(0,184,21,0.7);width: 10px; height: 10px; margin-left:4px;margin-bottom:-8px;margin-top:5px;border:1px solid;border-radius: 25px;";
	}else if(avgLag<10)
	{
		document.getElementById("chatStatus").style="background-color:rgba(200,199,83,0.7);width: 10px; height: 10px; margin-left:4px;margin-bottom:-8px;margin-top:5px;border:1px solid;border-radius: 25px;";	
	}else
	{	
		document.getElementById("chatStatus").style="background-color:rgba(199,0,3,0.7);width: 10px; height: 10px; margin-left:4px;margin-bottom:-8px;margin-top:5px;border:1px solid;border-radius: 25px;";
	}//end of if else function

}

//------------------------------------
// OTHER METHODS
//------------------------------------

function trace(txt, showAlert)
{
	console.log(txt);
	
	if (showAlert)
		alert(txt);
		
}//end of function trace


//-------------------------------------
//data manipulation
//-------------------------------------

function extResponse(evtParams)
{
	trace("Response received...");
	if (evtParams.cmd == "PageData")
	{
		var responseParams = evtParams.params;
		var row = responseParams.row; 
		var sfsObj = row[0];
		// We expect a number called "sum"
		//console.log("The sum is: " + responseParams.sum);
		document.getElementById("subject").innerHTML = sfsObj.subject;
		document.getElementById("specifics").innerHTML = sfsObj.specifics;
		document.getElementById("details").innerHTML = sfsObj.details;
		document.getElementById("footer").innerHTML = sfsObj.footerID;
	}
	/*
	if(e.params.cmd == "PageData")
	{
		var resParams = e.params.params as SFSObject;
		var row = resParams.getSFSArray("row") as SFSArray; 	
		
		var sfsObj = row.getSFSObject(0) as SFSObject;
		
		//trace(sfsObj.getUtfString("PCNid"),true);
		
		document.getElementById("subject").innerHTML = sfsObj.getUtfString("subject");
		document.getElementById("specifics").innerHTML = sfsObj.getUtfString("specifics");
		document.getElementById("details").innerHTML = sfsObj.getUtfString("details");
		document.getElementById("footer").innerHTML = sfsObj.getUtfString("footer");
		
	}//end of if statement
	*/
}//end of function extResponse




























































































































































































































































