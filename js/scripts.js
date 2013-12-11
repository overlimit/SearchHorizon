window.onload=function(){
	var command="";
	$("body").keydown(function( event ){
		switch(event.which)
		{
			//up down left right
			case 38:
				command+="1";
				break;
			case 40:
				command+="2";
				break;
			case 37:
				command+="3";
				break;
			case 39:
				command+="4";
				break;
			//B b
			case 66:
			case 98:
				command+="5";
				break;
			//A a
			case 65:
			case 97:
				command+="6";
				break;
			default:
				break;
		}
		if(command.search("1122343456")>=0)
		{
			command="";
			konami();
		}
		else if(command.search("123456")>=0)
		{
			command="";
			callMember();
		}
		else
			;
	});

	$("a.konami").click(function(){
		callMember();
	});
};

var flag=false,member_block=false;

function konami(){
	if(!flag)
	{
		$("style.konami").html("body{ opacity:0; }");
	}
	else
	{
		$("style.konami").html("body{ opacity:1; }");
	}
	flag=!flag;
}
function callMember()
{
	if(!member_block)
	{
		$("style.konami").html("div.container{ display:none; }");
		$("div.developer-pane").addClass("effeckt-page-active");
	}
	else
	{
		$("style.konami").html("");
		$("div.developer-pane").removeClass("effeckt-page-active");
		$("div.container").fadeIn();
	}
	member_block=!member_block;
}