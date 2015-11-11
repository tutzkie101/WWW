var NSsalesOrd = NSsalesOrd || 
{
	
	getHTML: function()
	{
		var html = "";
		var cBtn = new closeBtn();
		var mBtn = new minimizeBtn();
			
			html += cBtn.getHtml() + mBtn.getHtml() + MultiLine(function(){/*
			
			<div id="NSsalesOrder">
			
					<div>
					</div>
				
			</div>
			
			*/});
		
		return html;
	}//end of function getHTML
	
}//end of class NSsalesOrd