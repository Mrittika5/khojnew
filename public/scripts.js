let arr,check
const  myFunction=() =>{
  const str = document.getElementById("values");
	console.log(str)
  arr= str.value.split(',').map((item)=> {
    return parseInt(item, 10);
                        });
	arr.sort((a,b)=>{return b-a})
	const sorted_arr=document.getElementById("sorted_arr")
	sorted_arr.value=arr.toString()
	


}
const myfunc=()=>{
	let x=document.getElementById("item")
item=parseInt(x.value,10)
	
	if(arr.includes(item)) {
		check= "True"
	}
	else{check='False'}
	
	
}
const show=()=>{
	var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
	document.getElementById("date_time").value=localISOTime
	const result=document.getElementById("result")
	result.textContent=check
	
}