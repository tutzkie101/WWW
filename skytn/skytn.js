//Author
//Brent Dugan
//License: GNU

var SKYTN = SKYTN || 
	{
		
		showChatBox: function()
		{		
			var widthPer = 0;
			var widthPerBox = 0;
			
			if(!SKYTN.chatShowing)
			{				
				widthPer = ((window.innerWidth-530)/window.innerWidth)*100;
				widthPerBox = ((window.innerWidth-510)/innerWidth)*100;
				SKYTN.chatShowing = true;
			}else
			{
				widthPer = ((window.innerWidth-30)/innerWidth)*100;
				widthPerBox = ((window.innerWidth)/innerWidth)*100;
				SKYTN.chatShowing = false;
			}//end of if else
			
			document.getElementById("chatBtn").style.left = widthPer+"%";
			
			/**************************chatBox stuff***********************************/
			
				document.getElementById("chatBox").style.left = widthPerBox+"%";
				//document.getElementById("chatBox").innerHTML = "";
			SKYTN.showUserList();
			//alert("show chat box");
		}//end of function showChatBox
		
	}; //initalize namespace
SKYTN.groupList = [];
SKYTN.chatShowing = false;

SKYTN.chatBox = function()
{
	
	this.users = [];
	
	this.display = function()
	{
		var html = "";	
		var widthPer = ((window.innerWidth-30)/innerWidth)*100;
		
		html +=  MultiLine(function(){/*
		<div id="chatBtn" onClick="SKYTN.showChatBox()" style="cursor: pointer;background-color:rgba(0,0,0,0.9);width: 20px;height: 130px;*/})
		+ "left:"+widthPer+"%;" 
		+ MultiLine(function(){/*top:45%;position: fixed; float:right;margin: 10px;font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 15px;font-style:bold; color:white;">
						
			<center> 
				<div id="chatStatus" style="cursor: pointer;background-color:rgba(0,184,21,0.7);width: 10px; height: 10px; margin-left:4px;margin-bottom:-8px;margin-top:5px;border:1px solid;border-radius: 25px;">
				</div>
								
				<button style="cursor: pointer;background-color:rgba(0,0,0,0.1); color:white; border:0px; position:relative; float:bottom;">
					<br />C<br />H<br />A<br />T<br /> 
					<hr style="margin:1px; margin-top: 12px;" />
					<hr style="margin:1px;" />
					<hr style="margin:1px;" />
				</button>
			</center>
		</div>
		
		
	*/});
	;
		
		return html;		
	}//end of function this.display
	
	this.displayChatBox = function()
	{
		var html = "";	
		var widthPer = ((window.innerWidth-30)/innerWidth)*100;
		
		html +=  MultiLine(function(){/*
		<div id="chatBox" style="background-color:rgba(193,221,117,0.5);width: 500px;height: 89%;left:100%;top:9.5%;position: fixed; float:right;margin: 10px;">	
			<div id="chatBoxMenuGroup" style="height:10%;">				
				<div id="chatUserList" style="position:relative; float: left; width:25%; height:100%; ">
					<div id="cuserListBtn" onClick = "SKYTN.showUserList()" id="userListBtn" style="cursor: pointer;position:relative; width:100%; height:100%; background-color:rgba(200,200,200,0.5); border:1px solid;">
						User List
					</div>				
				</div>		
				<div id="chatMsgListBtn" style="position:relative; float: left; width:25%; height:100%; ">
					<div id="cmsgListBtn" onClick = "SKYTN.showMsgList()" id="msgListBtn" style="cursor: pointer;position:relative; width:100%; height:100%; background-color:rgba(200,200,200,0.5); border:1px solid;">
						Message List
					</div>	
				</div>	
				<div id="chatGroupListBtn" style="position:relative; float: left; width:50%; height:100%;">
					<div style="position:relative; width:100%; height:100%; background-color:rgba(200,200,200,0.5); border:1px solid;">
						Receiver:
					</div>	
				</div>	
			</div>	
			
			<div style="height:90%;">
				<div id="chatList" style="position:relative; float: left; width:50%; height:100%;overflow:scroll;">
					<div style="position:relative; width:100%; height:100%; background-color:rgba(200,200,200,0.5); border:1px solid;"></div>
				</div>		
				<div id="chatMsgs" style="position:relative; float: left; width:50%; height:100%;">
					<div style="position:relative; width:100%; height:100%; background-color:rgba(200,200,200,0.5); border:1px solid;display:inline-block;">
						<div id="msgsBox">
							
						</div>
						
						<div style="background-color:rgba(200,220,240,0.5); height: 80%;width: 100%;">
						
						</div>
						
						<div style="position:relative; font-family: Verdana, Arial, Helvetica, sans-serif;font-size: 100%;font-style:normal;font-weight:bold;color:#333333;width: 100%;">
							<textarea rows="5" cols="29" wrap="hard"></textarea>
						</div>  
						
						<div id="sendButton" style="position:relative;height:7%;width:100%;">
							<input type="submit" value="SEND" id="sendBtn" style="position:relative;background-color:rgba(44,255,20,.7); border: 0;cursor: pointer;height: 100%;width: 100%;font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 34px;	font-style:bold;	font-weight:italic;	color:#000000;">
						</div> 
						
					</div>
				</div>
			</div>
			
		</div>
		
		
	*/});
			
		return html;		
	}//end of function this.display
	
	
}//end of class chatBox

SKYTN.showMsgList = function()
	{
		document.getElementById("cmsgListBtn").style.backgroundColor = "rgba(44,255,20,.7)";
		document.getElementById("cuserListBtn").style.backgroundColor = "rgba(200,200,200,0.5)";
		
		document.getElementById("chatList").innerHTML = "";
		//for testing purposes only.. must be deleted
		for(var i=0;i<15;i++)
		{
			var html =  MultiLine(function(){/*
				<div style="background-color:rgba(205,120,105,.3); width:100%;height:10%; border:1px solid;">
					Msg List Item
				</div>
			*/});	
			
			document.getElementById("chatList").innerHTML += html;			
		}
	}//end of function showMsgList
	
SKYTN.showUserList = function()
	{
		document.getElementById("cuserListBtn").style.backgroundColor = "rgba(44,255,20,.7)";
		document.getElementById("cmsgListBtn").style.backgroundColor = "rgba(200,200,200,0.5)";
		
		document.getElementById("chatList").innerHTML = "";
		//for testing purposes only.. must be deleted
		for(var i=0;i<15;i++)
		{
			var html =  MultiLine(function(){/*
				<div style="background-color:rgba(44,125,50,.3); width:100%;height:10%; border:1px solid;">
					User List Item
				</div>
			*/});	
			
			document.getElementById("chatList").innerHTML += html;			
		}
	}//end of function showUSerList

SKYTN.users = function()
{
	this.list = [];	
}//end of class users

SKYTN.userInfo = function()
{
	
}//end of class userInfo

SKYTN.event = 
			{
				addListener: function(el, type, fn) 
				{
					// code stuff
				},
				removeListener: function(el, type, fn) 
				{
					// code stuff
				},
				getEvent: function(e) 
				{
					// code stuff
				}
			};//end of event handler for skytn
			
		

/*************************** start of dropdown stuff**************************/
	
var dropDown = function(sourceList)//sourceList should be a list/array of listItems
{
	var listLen = sourceList.length();
	for(var i = 0;i<listLen;i++)
	{
		
	}//end of for loop
	
};//end of class Dropdown

var listItem = function(iWidth,iHeight,color,rounded)
{
	var htmlString = MultiLine(function(){/*
		<div style="background-color:rgba(225,225,225,0.5);width: 100px;height: 100px;float: left;position: relative;margin: 10px;"></div>
	*/});
	
};//end of list item

/*************************** end of dropdown stuff**************************/


/*************************** start of app stuff*****************************/

var Groups = function()
{
	this.groupList = SKYTN.groupList;
	this.showGroup = 0;
	
	this.display = function ()
	{
		var html = "";
		
		var listLen = this.groupList.length;
		for(var i = 0;i<listLen;i++)
		{
			var leftMargin = "margin-left:";
				if(i>0)
					leftMargin += (i+(this.showGroup*2))*50;
			
			var gItem = this.groupList[i];
				var appsHtml = gItem.displayApps();
					
				html += MultiLine(function(){/*
				<div id="groupItem" style="background-color:rgba(78,78,78,0.4);width:49%;height:100%;float:left;position:fixed;margin:10px;
				*/}) 
				+ leftMargin +"%;"
				+ MultiLine(function(){/* "> <div style="width:100%;height:20px;font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 20px;font-style:italic; margin:5px;">
				*/})
				+gItem.name	
				+"</div>"
				+appsHtml+ MultiLine(function(){/*
				</div>
				*/});			
			
					
		}//end of for loop
		
		return html;
	}//end of display function
};//end of function displayGroups

var appGroup = function()
{	
	this.name = "Group name Here";
	this.apps = [];	
	this.displayApps = function()
	{
		var html = "";
		
		var listLen = this.apps.length;
		for(var i = 0;i<listLen;i++)
		{
			html += MultiLine(function(){/*
			<div id="appHolder" style="cursor: pointer;background-color:rgba(225,225,225,0.5);width: 100px;height: 100px;float: left;position: relative;margin: 10px;font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 10px;font-style:bold;solid;border-radius: 15px;" onClick=loadAppPage(*/})
			+this.apps[i].appID
			+MultiLine(function(){/*)>*/})
			+this.apps[i].name
			+MultiLine(function(){/*</div>*/});
			
		}//end of for loop
		
		return html;
	}//end of function display
	
	this.getApp = function(appid)
	{
		var appLen = this.apps.length;
		
		for(var i=0;i<appLen;i++)
		{
			if(this.apps[i].appID==appid)
				return this.apps[i];	
		}//end of for loop
		
		return null;
	}//end of getApp
};//end of appGroup

var app = function()
{
	this.appID = 0;
	
	this.name = "Sample App";
	this.externalLink = "#";
	this.appType = "LINK";	
	
};//end of object app

var scrollBar = function()
{	
	this.pages = (SKYTN.groupList.length/2);	

	this.display = function()
	{
		var html = "";
		var btnsHtml = "";
		var centerDisp = 2;
		var btnDist = 14;
		
		for(var i=0;i<this.pages;i++)
		{
			btnsHtml += MultiLine(function(){/*
			<div id="sbBtn*/})
			+i+'"'
			+MultiLine(function(){/*style="background-color:rgba(25,54,64,0.4);width: 10px;height: 10px;float:left;position:relative;margin: 2px;border:2px solid;border-radius: 25px;"
			*/})
			+"onClick="+"gotoPage("+i+")"
			+MultiLine(function(){/*> 
			</div>
			*/});
		}//end of for loop
		
		btnDist = (this.pages*18);
		centerDisp = 50 - ((btnDist/window.innerWidth)*100)/2;
		
		html += MultiLine(function(){/*
			<div id="sbHolder" style="background-color:rgba(225,225,225,0.1);solid;border-radius: 10px;*/})
			//+"width:" +btnDist+"px;" 
			+ "left:"+ centerDisp +"%;"
			+MultiLine(function(){/*height: 20px;position: fixed;margin: 10px; top: 95%;"> */})
			+btnsHtml
			+MultiLine(function(){/*	
			</div>
			*/});		
		
		return html;		
	}//end of function
};//end of class ScrollBar

function gotoPage(pageNum)
{
	this.pages = (SKYTN.groupList.length/2);
	for(var i=0;i<this.pages;i++)
	{
		reStyle(i);
	}//end of for loop
	
	//alert(pageNum);
	var g = new Groups();
	g.showGroup = pageNum
	//alert(g.display());
	document.getElementById("appsBox").innerHTML = 	g.display();
	document.getElementById("sbBtn"+pageNum).style = "background-color:rgba(12,12,12,0.7);width: 10px;height: 10px;float:left;position:relative;margin: 2px;border:2px solid;border-radius: 25px;";
}//end of function gotoPage

function reStyle(pNum)
{
	document.getElementById("sbBtn"+pNum).style = "background-color:rgba(25,54,64,0.4);width: 10px;height: 10px;float:left;position:relative;margin: 2px;border:2px solid;border-radius: 25px;";	
}

/*************************** end of app stuff*******************************/


/**************************start of other Functions*************************/

function MultiLine(str)
{
	var holder = str.toString().replace("function (){/*","").replace("*/}","").replace("function(){/*","");
	return holder;
	
};//end of function MultiLine

/****************************end of other Functions************************/