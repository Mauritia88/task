
var d=process.argv[2];
var m=process.argv[3];
var y=process.argv[4];

var mec=['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

var yy= +y+1;

var NY=new Date(yy,0,1);

var i,mm;

for (i=0; i<mec.length; i++)
{
	if (m==mec[i])
	{
	mm=i;
	}
}

if (d>31 || d<1 || y>2999 || y<1)
{
return;
}

if (y%4!=0)
{
	if (mm==1 && d>=29)
	{process.stdout.write('Нет такой даты');
	 return;}
}
else {if (mm==1 && d>29)
	{process.stdout.write('Нет такой даты');
	 return;} }

if (mm==3 || mm==5 || mm==8 || mm==10)
{ if(d>30)
{
process.stdout.write('Нет такой даты');
	 return;}}


var date=new Date(y,mm,d);

var rez=+NY- +date;
rez/=86400000;
rez=rez-1;


//console.log(date.getDate());
//console.log(date.toLocaleString());
console.log(rez);
