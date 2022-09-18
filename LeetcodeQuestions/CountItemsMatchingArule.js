var countMatches = function(items, ruleKey, ruleValue) {
    let ruleKeys =['type','color','name'];
    let keyIndex = ruleKeys.indexOf(ruleKey);
    let count=0;
   for(let i=0;i<items.length;i++){
    if(items[i][keyIndex]===ruleValue)
    count++;    
   }
    return count
};
items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"