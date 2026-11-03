function groupSort(arr) {
    let frequency = new Map();
    let counter = 0
    for(let i = 0; i<arr.length; i++){
        if(frequency.has(arr[i])){
            frequency.set([arr[i]], counter ++)
        } else{
            frequency.set(arr[i], 1)
        }
        
        let result = Array.from(frequency)
        
        result.sort((a, b) =>{
            if(a[i] != b[1]){
                return b[1] - a[1]
                
            }else{
                return a[0] - b[0]
            }
        });
        
    }
    return result;

}
