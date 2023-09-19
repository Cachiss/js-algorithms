let arr = [5, 3, 2, 4, 1];

//pros don't use ; in js >:)
function bubbleSort(arr){
    const prevArr = [...arr];
    console.log(prevArr)
    for(i=0;i<arr.length -1 ; i++){
        for(j=0;j<arr.length -1-i; j++){
            console.log(arr[j]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log("Se ordena de mayor a menor el siguiente Array", prevArr)
    console.log(arr)
}

bubbleSort(arr)