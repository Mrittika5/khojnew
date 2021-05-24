
let arr,check;

function sortAarry () {
  const str = document.getElementById("values");
	console.log(str)
  //creating a integer array from the input value
  arr= str.value.split(',').map((item)=> {
    return parseInt(item, 10);
                        });
	arr.sort((a,b)=>{return b-a})
	const sorted_arr=document.getElementById("sorted_arr")
  //converting the sorted araay back to string so backend can save it to database
	sorted_arr.value=arr.toString()


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

function Check (){
	let x=document.getElementById("item")
  item=parseInt(x.value,10)
  //performing binary search instead of arr.includes() since array has to be sorted anyway
	if(binarySearch(arr,item)) {
		check= "True"
	}
	else{
    check='False'
  }

}


 function show(){
  // on submit gets the utc timezone of client converts it to clients local timezone is Iso format
	const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  const localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
	document.getElementById("date_time").value=localISOTime
  //shows the result true or false
	const result=document.getElementById("result")
	result.textContent=check

}
