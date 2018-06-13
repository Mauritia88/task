/* Task 3 */
var t1=process.argv[2];
var t2=process.argv[3];

var rez=+t1 + +t2;
//console.log(rez);

var h=0;
var m=0;
var s=0;
var sec=min=hou='';
var vr;

if(t1>=1 && t2>=1 && t1<=100000 && t2<=100000)
{
	h=rez/3600;
	h=h-h%1;
	m=(rez%3600)/60;
	m=m-m%1;
	s=(rez%3600)%60;
	

	if (s%10==1 && s!=11)
	{ sec= ' секунда';}
	else if (s<5 && s>1 || s%10>1 && s%10<5)
	{ sec=' секунды';}
	else
	{sec = ' секунд';}

	if (m%10==1 && m!=11)
	{ min= ' минута';}
	else if (m<5 && m>1 || m%10>1 && m%10<5)
	{ min=' минуты';}
	else
	{min = ' минут';}

	if (h%10==1 && h!=11)
	{ hou= ' час';}
	else if (h<5 && h>1 || h%10>1 && h%10<5)
	{ hou=' часа';}
	else
	{hou = ' часов';}

if (h!=0)
{
vr=h+hou+' '+m+min+' '+s+sec;
} 
else
{vr=m+min+' '+s+sec;}
if (h==0 && m==0)
{vr=s+sec;}

console.log(vr);
}
