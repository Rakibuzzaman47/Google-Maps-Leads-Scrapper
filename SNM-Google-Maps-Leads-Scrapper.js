var b_name = document.querySelectorAll("._rl");

var b_address = document.querySelectorAll(".lqhpac div:nth-child(3) > span");

var b_phone = document.querySelectorAll(".lqhpac div:nth-child(4) > span");

var b_direction = document.querySelectorAll(".rllt__directions-button");


var n;

var length = b_name.length;

var leads = [];
		
var serial = 0;

for ( n = 0; n < length ; n++ ) {

	

	b_address[serial].click();
	filtered_b_name = String("\"" + b_name[serial].innerText + "\"");
	filtered_b_address = String("\"" + b_address[serial].innerText + "\"");
	filtered_b_phone = String("\"" + b_phone[serial].innerText + "\"");
	var filtered_b_direction = String("\"" + b_direction[serial].href + "\"");
	
	
	

	leads.push([filtered_b_name,
		    filtered_b_address,
		    filtered_b_phone,
		    filtered_b_direction]);
			
	var csv = '"Business Name";"Address";"Phone";"Direction & Details"\n';
						 
    leads.forEach(function(row) {
            csv += row.join(';');
            csv += "\n";
    });	
    
	serial = serial + 1;


	
	
}

var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'snm-googlemaps-leads.csv';
    hiddenElement.click();  
