function game(){
	var n1 = Math.ceil(Math.random()*20);
	var n2 = Math.ceil(Math.random()*20);
	var n3 = Math.ceil(Math.random()*20);
	var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	document.getElementById("n1").innerHTML = n1;
	document.getElementById("n2").innerHTML = n2;
	document.getElementById("n3").innerHTML = n3;
	document.getElementById("players").innerHTML = n1+n2+n3;


	if(Math.max(n1,n2,n3)==n1&&n1!=n2&&n1!=n3){
		document.getElementById("biggest").innerHTML="escaped ("+n1+")";
	}
	else if(Math.max(n1,n2,n3)==n2&&n2!=n1&&n2!=n3){
		document.getElementById("biggest").innerHTML="eliminated ("+n2+")";
	}
	else if(Math.max(n1,n2,n3)==n3&&n3!=n1&&n3!=n2){
		document.getElementById("biggest").innerHTML="in-game ("+n3+")";
	}
	else{
		if(n1==n2&&n1>n3){
			document.getElementById("biggest").innerHTML="escaped, eliminated  ("+n1+")";
		}
		else if(n1==n3&&n1>n2){
			document.getElementById("biggest").innerHTML="escaped, in-game ("+n3+")";
		}
		else if(n2==n3&&n2>n1){
			document.getElementById("biggest").innerHTML="eliminated, in-game ("+n2+")";
		}
		else if(n1==n2==n3){
			document.getElementById("biggest").innerHTML="escaped, eliminated, in-game ("+n3+")";
		}
	}

	if (n1!=0){
		var char = alphabet[n1];
		document.getElementById("letter").innerHTML = char;
	}

	var minutes = n2*n3;
	var hours = parseInt((n2*n3)/60);
	var min = (n2*n3)%60;
	document.getElementById("time").innerHTML=hours+"hr "+min+"min ("+minutes+"min)";
}
