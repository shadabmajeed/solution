
/*
Input-D={'2019-01-10':10,'2019-01-14':20,'2019-01-18':10}
0utput-{ '2019-01-10': 10,
'2019-01-11': 12.5,
'2019-01-12': 15,
'2019-01-13': 17.5,
'2019-01-14': 20,
'2019-01-15': 17.5,
'2019-01-16': 15,
'2019-01-17': 12.5,
'2019-01-18': 10 }
*/

/* 
Input-D={'2019-01-12':10,'2019-01-14':20}
Output-{ '2019-01-12': 10, '2019-01-13': 15, '2019-01-14': 20 }

*/

function solution(D)
{
    const keys=Object.keys(D)
    const values=Object.values(D)
    ans={}
    for(i=0;i<keys.length;i++)
    {if(i==keys.length-1)
  { 
  ans[keys[i]]=values[i]
  }   
  
  else{  
         vals=keys[i].split('-')
         vals2=keys[i+1].split('-')
         const keydiff=(values[i+1]-values[i])
         const daydiff=vals2[2] -vals[2]
       x=keydiff/daydiff
       val=values[i]
       for(j=vals[2];j<vals2[2] ;j++)
       {
         key=`${vals[0]}-${vals[1]}-${j}`
         ans[key]=val
         val+=x
       } }}return ans}
  
