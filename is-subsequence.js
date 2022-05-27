// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if(!str1) return false;

    while(j < str2.length) {
        if(str2[j] === str1[i]){
            i += 1;
        }
        if(i === str1.length)
        return true;
        j += 1;
    }
    return false;
}
