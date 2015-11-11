var NStimecard  = NStimecard || 
{
	getHTML: function()
	{
		var html = "";
		var cBtn = new closeBtn();
		var mBtn = new minimizeBtn();
		
			html += cBtn.getHtml() + mBtn.getHtml() + MultiLine(function(){/*
			
			<div id="NStimecard" style="background: rgba(255, 255,205, .8); height: 98%;width: 98.5%; margin-left:0.5%; margin-top:0.5%;">
			
					<div id="TimeCalendar" style="margin-left: 2%;">
						
						<div style="height 20px;">
							Your Record <br />
							For the week of: November 9- November 15
						</div>
						
						<div id="TClabelField" class="TCrow" style="background: rgba(100, 105,255, .4); ">
							
							<div class="TCcol"> DATE	</div>
							<div class="TCcol"> Start Time </div>
							<div class="TCcol"> Break Begin </div>
							<div class="TCcol"> Break End </div>
							<div class="TCcol"> Lunch Begin </div>
							<div class="TCcol"> Lunch End </div>	
							<div class="TCcol"> Break Begin </div>
							<div class="TCcol"> Break End </div>
							<div class="TCcol"> End Time </div>
							<div class="TCcol"> Reg Hours Worked </div>
							<div class="TCcol"> OT Hours Worked </div>
							<div class="TCcol"> Double time hours Worked </div>
							<div class="TCcol"> Exception Hours </div>
							<div class="TCcol"> Enter/Modify Time</div>
							
							
						</div>
						
						<div id="TCmonday" class="TCrow">
								<div class="TCcol"> 11/09/2015 <br /> Mon</div>
								<div class="TCcol"> 8:00 <br /> am </div>
								<div class="TCcol"> 10:00 <br /> am </div>
								<div class="TCcol"> 10:10 <br /> am </div>
								<div class="TCcol"> 12:00 <br /> pm </div>
								<div class="TCcol"> 1:00 <br /> pm </div>
								<div class="TCcol"> 3:00 <br /> pm </div>
								<div class="TCcol"> 3:10 <br /> pm </div>
								<div class="TCcol"> 5:00 <br /> pm </div>
								<div class="TCcol"> 8 </div>
								<div class="TCcol"> 0 </div>
								<div class="TCcol"> 0 </div>
								<div class="TCcol"> 0(W) </div>
								<div class="TCcol"> <button>Modify </button> <button>clear </button></div>
						</div>
						
						<div id="TCtuesday" class="TCrow">
								<div class="TCcol"> 11/10/2015 <br /> Tue</div>
								<div class="TCcol"> 8:00 <br /> am </div>
								<div class="TCcol"> 10:00 <br /> am </div>
								<div class="TCcol"> 10:10 <br /> am </div>
								<div class="TCcol"> 12:00 <br /> pm </div>
								<div class="TCcol"> 1:00 <br /> pm </div>
								<div class="TCcol"> 3:00 <br /> pm </div>
								<div class="TCcol"> 3:10 <br /> pm </div>
								<div class="TCcol"> 5:00 <br /> pm </div>
								<div class="TCcol"> 8 </div>
								<div class="TCcol"> 0 </div>
								<div class="TCcol"> 0 </div>
								<div class="TCcol"> 0(W) </div>
								<div class="TCcol"> <button>Modify </button> <button>clear </button></div>
						</div>
						
						<div id="TCwednesday" class="TCrow">
								<div class="TCcol"> 11/11/2015 <br /> Wed</div>
								<div class="TCcol"> 8:00 <br /> am </div>
								<div class="TCcol"> 10:00 <br /> am </div>
								<div class="TCcol"> 10:10 <br /> am </div>
								<div class="TCcol"> 12:00 <br /> pm </div>
								<div class="TCcol"> 1:00 <br /> pm </div>
								<div class="TCcol"> 3:00 <br /> pm </div>
								<div class="TCcol"> 3:10 <br /> pm </div>
								<div class="TCcol"> 5:00 <br /> pm </div>
								<div class="TCcol"> 8 </div>
								<div class="TCcol"> 0 </div>
								<div class="TCcol"> 0 </div>
								<div class="TCcol"> 0(W) </div>
								<div class="TCcol"> <button>Modify </button> <button>clear </button></div>
						</div>
						
						<div id="TCthursday" class="TCrow">
								<div class="TCcol"> 11/12/2015 <br /> Thu</div>
								<div class="TCcol" style="width:84.8%"> No Record </div>
								<div class="TCcol"> <button>Enter Time </button></div>
						</div>
						
						<div id="TCfriday" class="TCrow">
								<div class="TCcol"> 11/13/2015 <br /> Fri</div>
								<div class="TCcol" style="width:84.8%"> No Record </div>
								<div class="TCcol"> <button>Enter Time </button></div>
						</div>
						
						<div id="TCsaturday" class="TCrow">
								<div class="TCcol"> 11/14/2015 <br /> Sat</div>
								<div class="TCcol" style="width:84.8%"> No Record </div>
								<div class="TCcol"> <button>Enter Time </button></div>
						</div>						
						
						<div id="TCsunday" class="TCrow">
								<div class="TCcol"> 11/15/2015 <br /> Sun</div>
								<div class="TCcol" style="width:84.8%"> No Record </div>
								<div class="TCcol"> <button>Enter Time </button></div>
						</div>
						
						
						<div id="TCweekSub" class="TCrow">
								<div class="TCcol" style="text-align:right; width:63.55%; border-right: 1px solid;"> Week Sub-Total:</div>
								<div class="TCcol"> 24</div>
								<div class="TCcol"> 0 </div>
								<div class="TCcol"> 0 </div>								
								<div class="TCcol"> 0 </div>								
								<div class="TCcol"> </div>
						</div>
						
						<div id="TCweekTotal" class="TCrow">
								<div class="TCcol" style="text-align:right; width:63.55%; border-right: 1px solid;"> Total Worked Hours For This Week:</div>
								<div class="TCcol"> 24</div>								
								<div class="TCcol"> </div>
						</div>
						
						<div id="TCsubmitArea" class="TCrow">
								<div class="TCcol" style="width:92%; text-align:right;border-right:1px solid;"> Submit for approval </div>								
								<div class="TCcol"> <button> Submit </button></div>
						</div>
						
					</div>
				
			</div>
			
			*/});
		
		return html;
	},//end of function getHTML
	
	loadCSS: function()
	{
		var cssTxt = document.createTextNode(MultiLine(function(){/*
		
			.TCcol
			{
				width: 7%;
				height: 50px;
				float: left;
				position: relative;
				border-left: 1px solid;
				text-align: center;
				
			}
			.TCrow
			{
				background-color:rgba(225,225,225,0.9);
				width:97.5%;
				height: 50px;
				float: top;
				position: relative;
				border: 1px solid;
			}
			
		*/}));
				
		
		
		var fileref=document.createElement("style");
		fileref.appendChild(cssTxt);
	 document.getElementsByTagName("head")[0].appendChild(fileref); 
	 
	}//end of function getCSS
	
	
};//end class