// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const mesFreq = {};
    const letFreq = {};
    
    //count frequency for letters
    for(let char of letters){
        letFreq[char] = letFreq[char] + 1 || 1;
    }
    //count frequency for message
    for (let char of message){
        mesFreq[char] = mesFreq[char]+ 1 || 1;
    }
    //comparison between message and letters freq.
    for(let char in mesFreq){
        if(!letFreq[char]) {
            return false;
        }
        if(mesFreq[char] > letFreq[char]) {
            return false;
        }
    }
    return true;
}
