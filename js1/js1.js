function pow(x,n)
	{ 	var result=1;
  		for(var i=0;i<n;i++) {result*=x;}
 		return result;
 	console.log('result', result);
}

x=prompt("x",'')
n=prompt("n",'')
	if (n<0)
	{	console.log('Степень '+n+'не поддерживается, введите целую степень, большую 0');
}
	else
	{ 	alert(pow(x,n))
}