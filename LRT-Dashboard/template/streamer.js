var LIGHT = LIGHT || {}
LIGHT.apps = function()
{
			
}//end of class



function initiate()
{
	//load other libraries and stuff
	
	var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", "scripts/css/loginStyles.css");
	var fileref2=document.createElement("link");
        fileref2.setAttribute("rel", "stylesheet");
        fileref2.setAttribute("type", "text/css");
        fileref2.setAttribute("href", "scripts/css/mainMenuStyles.css");
	 document.getElementsByTagName("head")[0].appendChild(fileref); 
	 document.getElementsByTagName("head")[0].appendChild(fileref2);
	 
	var fileref3=document.createElement("script");
	//fileref3.setAttribute("rel", "stylesheet");
	fileref3.setAttribute("type", "text/javascript");
	fileref3.setAttribute("src", "scripts/js/AppsGroupsControl.js");
	 document.getElementsByTagName("head")[0].appendChild(fileref3); 
	 
	 var fileref4=document.createElement("script");
	//fileref4.setAttribute("rel", "stylesheet");
	fileref4.setAttribute("type", "text/javascript");
	fileref4.setAttribute("src", "apps/NSsalesOrder.js");
	 document.getElementsByTagName("head")[0].appendChild(fileref4); 
	 
	 var fileref5=document.createElement("script");
	fileref5.setAttribute("type", "text/javascript");
	fileref5.setAttribute("src", "apps/NStimecard.js");
	 document.getElementsByTagName("head")[0].appendChild(fileref5); 
	 
	 
	 
	initSFS();///this initiates smartfox and all other elements
}//end of load function


function loadLoginPage()
{ 
	var htmlString = MultiLine(function(){/*
		<header style="position:relative;">	
            <div id="newsBox"></div><!--this is the background box-->
            <div id="newsContent"></div>            
            <div><a href="#"><div id="logoHolder">
            </div></a>
        </header>
        
        <section>
            <div  style="position:relative;">
                <div id="loginField">
                    
                    <div id="username">
						username:<br />
						<input type="text" name="userName" id="uname"> <br />
                    </div>
                    
                    <div id="password">
						password:<br />
						<input type="text" name="passWord" id="pword"> <br />
                    </div>  
					
					<div id="submitButton">
						<input type="submit" value="StreamIn" id="submitBtn" onClick="streamIn()"> <br />
                    </div>                
                    
                </div>
            </div>
        </section>*/});
        
	document.getElementById("mainBody").innerHTML = htmlString;
}//end of function loadLoginPage

function loadOfflinePage()
{
	var htmlString = MultiLine(function(){/*
				<div id="errorConnection">
					<center>
						<p id="errorMessage">	
							<b>CONNECTION ERROR:</b><br />	<br /> <br />								
							Sorry but it seems like there is a problem in connecting to our server. Please refresh in 1 minute.
							If problem persists please contact us at 1-888-LIGHT-25!
						</p>
					</center>
				</div>	
	*/});
	
	document.getElementById("mainBody").innerHTML = htmlString;
}//end of function loadLoginPage

function loadMainPage()
{

	var AGC = new loadedUserGroup();
	SKYTN.groupList = AGC.getGroupsWithApps();
	/*
	//to be removed
	var sampleApp = new app();
		sampleApp.name = "Timecard App";	
		sampleApp.externalLink = "http://10.7.0.25:85/TimeApp-v2.2.1/index.php";
		sampleApp.appID = 10;
		
	var oppApp = new app();
		oppApp.name = "NS Sales Order";	
		oppApp.externalLink = "http://10.7.0.25:85/TimeApp-v2.2.1/index.php";
		oppApp.appID = 11;
		oppApp.appType = "APP";
		oppApp.html = "TEST CONTENT";
	
	var sampleGroup = new appGroup();
	sampleGroup.name = "Emp Group";
	var apps = [];
	apps.push(sampleApp);
	sampleGroup.apps = apps;
	
	var oppsGroup = new appGroup();
	oppsGroup.name = "opps group";
	oppsGroup.apps.push(oppApp);
	oppsGroup.apps.push(new app());
	oppsGroup.apps.push(new app());
	
	var otherGroup = new appGroup();
	
	SKYTN.groupList = [sampleGroup,oppsGroup,otherGroup]; //apply group to global variable
	*/
	var chatBox = new SKYTN.chatBox();
	var someStuf = 100000;
	var appGrp = new Groups();//you might be wondering but the group is applied to the gloabal variable
	var scrBr = new scrollBar();
	var htmlString = MultiLine(function(){/*
				<header >	
            <div id="topMenu">
            	
                <div id="dpHolder">
                </div>
                
                <div id="profileDet">
				*/})
				+MultiLine(function(){/*
                	Welcome: User12345 <br />
                    &ensp; user12345@lightriver.com <br /> <br />
                    <b>Location:</b> Concord, CA <br />
                    <b>Role:</b> Application Developer
                </div>
                
            </div>          
            
            <a href="#"><div id="logoHolder"></div>
            </a>
        </header>
        
        <section id="menuBody">
        	<div  style="position:relative;">
                <div  id="appsBox">
				*/})
				
				+ appGrp.display()
				+ MultiLine(function(){/*
                </div>
            </div>
			*/})
			+ scrBr.display()
			+MultiLine(function(){/*
			</section>
			*/});
			
/******************************Loading Elements************************************/
	
	document.getElementById("mainBody").innerHTML = htmlString;
	document.getElementById("mainBody").innerHTML += chatBox.display();
	document.getElementById("mainBody").innerHTML += chatBox.displayChatBox();
	document.getElementById("sbBtn0").style = "background-color:rgba(12,12,12,0.7);width: 10px;height: 10px;float:left;position:relative;margin: 2px;border:2px solid;border-radius: 25px;";
	
		
}//end of function loadMainPage


function streamIn()
{
	sfs.send(new SFS2X.Requests.System.LoginRequest(document.getElementById("uname").value,document.getElementById("pword").value));
}//end of function streamIn()

function MultiLine(str)
{
	var holder = str.toString().replace("function (){/*","").replace("*/}","").replace("function(){/*","");
	return holder;
	
}//end of function MultiLine

