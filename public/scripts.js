
let arr,check;

const  sortAarry= ()=> {
  const str = document.getElementById("values");
	console.log(str)
  arr= str.value.split(',').map((item)=> {
    return parseInt(item, 10);
                        });
	arr.sort((a,b)=>{return b-a})
	const sorted_arr=document.getElementById("sorted_arr")
	sorted_arr.value=arr.toString()
  console.log(sorted_arr)

}

const binarySearch =  (arr, x)=> {
    let start=0, end=arr.length-1;
    while (start<=end){

        let mid=Math.floor((start + end)/2);

        if (arr[mid]===x) {
            return true;
        }
        else if (arr[mid] < x){
            end = mid - 1;
        }
        else{
          start = mid + 1;
        }

    }

    return false;
}

const Check= ()=>{
	let x=document.getElementById("item")
  item=parseInt(x.value,10)

	if(binarySearch(arr,item)) {
		check= "True"
	}
	else{
    check='False'
  }

}


const show= function(){
	const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  const localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
	document.getElementById("date_time").value=localISOTime
	const result=document.getElementById("result")
	result.textContent=check

}
