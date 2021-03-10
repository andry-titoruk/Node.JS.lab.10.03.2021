module.exports = function(arr){
    var a = arr[0];
    for (i = 0; i < arr.length; ++i){
        if (a > arr[i]){
            a = arr[i];
        }
    }
    return a;
}
