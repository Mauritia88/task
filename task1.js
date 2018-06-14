/* Task 1 */

function pow(x, n) {
  var result = x;

  for (var t = 1; t < n; t++) {
    result *= x;
  }
	return result;
}

var i=process.argv[2];
var a=process.argv[3];
var b=process.argv[4];
var k,j=0;
var c=[];
var p=[];
var d;
var bukva='abcdefjhijklmnopqrstuvwxyz';
//console.log(i.length);


for (j=0;j<i.length;j++)
{ 
p.push(i[j]);
}



for (j=0;j<i.length;j++)
{
	for (k=0;k<bukva.length;k++)
	{
		if (p[j]==bukva[k])
		{ p.splice(j,1,k+10);
		//console.log(p[j]);
		}
	}
}


for (j=0;j<i.length;j++)
{ 
	if (p[j] >= +a)
	{
	//console.log(p[j]);
	return;
	}
}
//console.log(a);


var chislo=+p.slice(-1);
for (j=1;j<i.length;j++)
{
chislo=chislo+pow(a,j)*p[i.length-j-1];
}

//chislo=parseInt(i,a);//в десятичной	



if (chislo>=0 && chislo<=10000 && a>=2 && a<=36 && b>=2 && b<=36)
{
if (b!=10)
{
	while (chislo>=b)
	{
	var total=c.push(chislo%b); //total-количество элементов в массиве
	d=chislo/b;
	d=d-d%1;
	chislo=d;
	}

total=c.push(chislo);
	
	if (b>10)
	{
		for (j=0;j<c.length;j++)
		{
			if (c[j]>9)
			{
			c[j]=bukva.charAt(c[j]-10);
			}		
		}	
	}

c.reverse(); //обратный порядок
var str=c.join(''); //склеить 
process.stdout.write(str);
}
else 
console.log(chislo);
}

