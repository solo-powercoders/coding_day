function getFirstValue(){
    var words=["Monday", "Thursday","Saturday","Wednesday", "Tuesday"];
    words.sort();
    return words[words.length-1];
}

getFirstValue();