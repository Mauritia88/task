var t1=process.argv[2];
var t2=process.argv[3];

var s=+t1 + +t2;
console.log(s);
var str=' секунд секунды минут час ';

var h=0;
var m=0;
var vr;

if(t1>=1 && t2>=1 && t1<=100000 && t2<=100000)
{
if (s<60) 
{ 
	if (s%10==0)
	{ vr = s + str.slice(0,7);}
	else
	{ vr = s + ' секунды';}
}
else { 
	m=s/60;
	m=m-m%1;
	s=s-m*60;//секунды
	vr=m+' минут '+s+' секунд';
	if (m>=60)
		{ h=m/60;
		h=h-h%1;
		m=m-h*60;
		vr=h+' час '+m+' минут '+s+' секунд';
		}
	}

console.log(vr);
}
