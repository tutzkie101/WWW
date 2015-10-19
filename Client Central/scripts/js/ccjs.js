var sfs = null;

function init(pcnid)
{
	
	document.getElementById("subject").innerHTML = "<b>sample subject</b>";
	document.getElementById("specifics").innerHTML = "<b>sample</b>: Specifics";
	document.getElementById("details").innerHTML = "<b>sample</b>: details";
	document.getElementById("footer").innerHTML = "<b>sample</b>: footer";
	
	trace("Application started");
	
	// Create configuration object
	var config = {};
	config.host = "10.7.0.138";
	config.port = 8888;
	config.zone = "ClientCentral";
	config.debug = true;
	
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
		var names = ["nate","thanatos","megathan","alex","Xander","zander","aria","lenuz","zerien","castiel"];
			sfs.send(new SFS2X.Requests.System.LoginRequest());//names[Math.floor(Math.random()*10)]));
	}
	else
	{
		trace("Connection failed: " + (event.errorMessage ? event.errorMessage + " (" + event.errorCode + ")" : "Is the server running at all?"), true);		
	}
}

function onConnectionLost(event)
{
	trace("I was disconnected; reason is: " + event.reason);
	
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
	sfs.send(new SFS2X.Requests.System.JoinRoomRequest("internal"));
	
		
	
	sfs.enableLagMonitor(true, 5);
}

function onLogout(event)
{
	trace("Logout from zone " + event.zone + " performed!");
	
}

function onRoomJoin(event)
{
		trace("Sending Request...");
		var params = {};
		params.PCNID = "4";
		sfs.send(new SFS2X.Requests.System.ExtensionRequest("GET_PAGEDATA", params));
		trace("Request sent");
}

function onRoomJoinError(event)
{
	trace("Room Join error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}

function onPingPong(event)
{
	var avgLag = Math.round(event.lagValue * 100) / 100;
	//$("#lagLb").text("Average lag: " + avgLag + "ms");
}

//------------------------------------
// OTHER METHODS
//------------------------------------

function trace(txt, showAlert)
{
	console.log(txt);
	
	if (showAlert)
		alert(txt);
		
}


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
		document.getElementById("subject").innerHTML = generateBR(sfsObj.subject);
		document.getElementById("specifics").innerHTML = generateBR(sfsObj.specifics);
		document.getElementById("details").innerHTML = generateBR(sfsObj.details);//sfsObj.details;
		document.getElementById("footer").innerHTML = generateBR(sfsObj.footer);
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

function generateBR(txt)
{
	var newTxt = "";
	for(i=0;i<txt.length;i++)
	{
		if(txt[i]=='\n')
			newTxt += "<br />";
		else if(txt[i]==' "')
			newText += "<q>";
		else if(txt[i]=='" ')
			newText += "</q>";
		else
			newTxt += txt[i];
	}//end of for loop
	return newTxt;
}//end of function generateBR


























































































































































































































































