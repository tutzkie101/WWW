var sfs = null;

function init(pcnid)
{
	
	document.getElementById("subject").innerHTML = "<b>sample subject</b>";
	document.getElementById("specifics").innerHTML = "<b>sample</b>: Specifics";
	document.getElementById("details").innerHTML = "<b>sample</b>: details";
	document.getElementById("footer").innerHTML = "<b>sample</b>: footer";
	
	document.getElementById("btnfield").innerHTML = ' PCN content:<input type="submit" value="Update" onClick = submitPageData()>'
														+'<input type="text" name="PCNID" id="pcnidInput">'
														+'<input type="submit" value="Add" onClick = AddPageData()>'
														+'<input type="submit" value="Load" onClick = loadPageData()>';
	
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
}//end of function init

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
}//end of onConnection

function onConnectionLost(event)
{
	trace("I was disconnected; reason is: " + event.reason);
	
}//end of function onConnectionLost

function onLoginError(event)
{
	trace("Login error: " + event.errorMessage + " (" + event.errorCode + ")", true);
	
}//end of functionOnLoginError

function onLogin(event)
{
	trace("Login successful!" +
		  "\n\tZone: " + event.zone +
		  "\n\tUser: " + event.user +
		  "\n\tData: " + event.data);
	sfs.send(new SFS2X.Requests.System.JoinRoomRequest("internal"));	
	
	sfs.enableLagMonitor(true, 5);
}//end of function onLogin

function onLogout(event)
{
	trace("Logout from zone " + event.zone + " performed!");
	
}//end of onLogout

function onRoomJoin(event)
{
		trace("Sending Request...");
		var params = {};
		params.PCNID = "4";
		document.getElementById("pcnidInput").value = "4";
		sfs.send(new SFS2X.Requests.System.ExtensionRequest("GET_PAGEDATA", params));
		trace("Request sent");
}//end of onRoomJoin

function onRoomJoinError(event)
{
	trace("Room Join error: " + event.errorMessage + " (" + event.errorCode + ")", true);
}//end of onRoomJoinError

function onPingPong(event)
{
	var avgLag = Math.round(event.lagValue * 100) / 100;
	//$("#lagLb").text("Average lag: " + avgLag + "ms");
}//end of function onPingPong

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
		
		var subject = document.getElementById("subject");
		var specifics = document.getElementById("specifics");
		var details = document.getElementById("details");
		var footer = document.getElementById("footer");
		
		//console.log("The sum is: " + responseParams.sum);
		subject.innerHTML = 'Subject: <textarea class = "inputfield" type="text" id="subjecttxt" wrap = "hard" rows = "'+getRowLen(sfsObj.subject)+'">' + sfsObj.subject+'</textarea>';
		specifics.innerHTML = 'Specifics: <textarea class = "inputfield" type="text" id="specificstxt" wrap = "hard" rows = "'+getRowLen(sfsObj.specifics)+'">' + sfsObj.specifics+'</textarea>';
		details.innerHTML = 'Details: <textarea class = "inputfield" type="text" id="detailstxt" wrap = "hard" rows = "'+getRowLen(sfsObj.details)+'">' + sfsObj.details+'</textarea>';
		footer.innerHTML = 'Footer: <textarea class = "inputfield" type="text" id="footertxt" wrap = "hard" rows = "'+getRowLen(sfsObj.footer)+'">' + sfsObj.footer+'</textarea>';		
		footer.innerHTML += ' Footer:<input type="submit" value="Update" onClick = submitPageData()>'
						 +'<input name = "footerid" id="footeridtxt" value ="'+sfsObj.footerID+'"/>'
						 +'<input type="submit" value="Add" onClick = AddPageData()>'
														+'<input type="submit" value="Load" onClick = loadPageData()>';
		
				
	}else if(evtParams.cmd == "SET_PAGEDATA_SUCCESS")
	{
		trace("SET_PAGEDATA SUCCESSFUL!",true);
		
	}else if(evtParams.cmd == "SET_PAGEDATA_FAILURE")
	{
		trace("SET_PAGEDATA FAILURE!",true);
		
	}else if(evtParams.cmd == "ADD_PAGEDATA_SUCCESS")
	{
		trace("ADD_PAGEDATA SUCCESSFUL!",true);
		
	}else if(evtParams.cmd == "ADD_PAGEDATA_FAILURE")
	{
		trace("ADD_PAGEDATA FAILURE!",true);
		
	}//end of function if else function
	
}//end of function extResponse

function getRowLen(txt)
{
	var rows = 0;
	for (i = 0; i < txt.length; i++) 
	{ 
		if(txt[i]=='\n')
    		rows++;
	}//end of for loop
		//trace("Rows:"+rows,true);
		return rows+1;
}//end of function getRowLen

function submitPageData(pcnid)
{
	pcnid = document.getElementById("pcnidInput").value;
		var params = {};
		params.PCNID = pcnid;		
		params.SUBJECT = document.getElementById("subjecttxt").value;
		params.SPECIFICS = document.getElementById("specificstxt").value;
		params.DETAILS = document.getElementById("detailstxt").value;
		params.FOOTERID = document.getElementById("footeridtxt").value;//footer actually holds the footerID
		//trace(document.getElementById("footeridtxt").value,true);
		sfs.send(new SFS2X.Requests.System.ExtensionRequest("SET_PAGEDATA", params));
		trace("SET_PAGEDATA Request sent");
		
}//end of function submit

function AddPageData(pcnid)
{
	pcnid = document.getElementById("pcnidInput").value;
		var params = {};
		params.PCNID = pcnid;		
		params.SUBJECT = document.getElementById("subjecttxt").value;
		params.SPECIFICS = document.getElementById("specificstxt").value;
		params.DETAILS = document.getElementById("detailstxt").value;
		params.FOOTERID = document.getElementById("footeridtxt").value;//footer actually holds the footerID
		sfs.send(new SFS2X.Requests.System.ExtensionRequest("ADD_PAGEDATA", params));
		trace("ADD_PAGEDATA Request sent");
		
}//end of function submit

function submitFooterData(pcnid)
{
	var params = {};
		params.PCNID = pcnid;		
		params.footer = document.getElementById("footer").innerHTML;
		sfs.send(new SFS2X.Requests.System.ExtensionRequest("SET_FOOTERDATA", params));
		trace("Set_FOOTERDATA Request sent");
	
}//end of function submitFooterData

function loadPageData()
{
	var params = {};
		params.PCNID = document.getElementById("pcnidInput").value;
		sfs.send(new SFS2X.Requests.System.ExtensionRequest("GET_PAGEDATA", params));
		trace("Request sent");
}//end of function loadPageData





























































































































































































































































