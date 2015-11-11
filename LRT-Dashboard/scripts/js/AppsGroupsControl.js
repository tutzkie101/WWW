var loadedUserGroup = function()
{	

	this.getGroupsWithApps = function()
	{
		/*initialize libraries*/		
			NStimecard.loadCSS();	
			
		var groupList = [];
		
		/*****************Employee Group stuff***************/
		var sampleApp = new app();
			sampleApp.name = "Timecard App";	
			sampleApp.externalLink = "http://10.7.0.25:85/TimeApp-v2.2.1/index.php";
			sampleApp.appID = 10;		
			
		var NStimecardApp = new app();
			NStimecardApp.name = "NS Timecard App";
			NStimecardApp.appID = 11;
			NStimecardApp.appType = "APP";
			NStimecardApp.html = NStimecard.getHTML();
		
		var employeeGroup = new appGroup();
		employeeGroup.name = "Employee Group";
		var apps = [];
		apps.push(sampleApp);
		apps.push(NStimecardApp);
		employeeGroup.apps = apps;	
		
		/*************End of Employee Group stuff************/
		
		/**************Opperations Group stuff**************/		
		var oppApp = new app();
			oppApp.name = "NS Sales Order";	
			oppApp.externalLink = "http://10.7.0.25:85/TimeApp-v2.2.1/index.php";
			oppApp.appID = 20;
			oppApp.appType = "APP";
			oppApp.html = NSsalesOrd.getHTML();
			
		var oppsGroup = new appGroup();
		oppsGroup.name = "opps group";
		oppsGroup.apps.push(oppApp);
		oppsGroup.apps.push(new app());
		oppsGroup.apps.push(new app());
		
		/*************End of Employee Group stuff************/
		
		
		var otherGroup = new appGroup();
		
		groupList = [employeeGroup,oppsGroup,otherGroup]; //apply group to global variable
		return groupList;
	}//end of function applyGroupWithApps
	
}//end of class loadedUserGroup