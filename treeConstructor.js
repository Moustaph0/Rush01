//function treeConstructor(strArr){}


//module.exports = TreeConstructor
function TreeConstructor(strArr) {
    var relations = {};
    for (var i = 0; i < strArr.length; i++) {
    var pair = strArr[i].slice(1, -1).split(",");
    var child = parseInt(pair[0]);
    var parent = parseInt(pair[1]);
    if (relations[child]) {
    return false;
    }
    relations[child] = parent;
    }
    var parents = {};
    for (var child in relations) {
    var parent = relations[child];
    if (parents[parent]) {
    return false;
    }else{parents[parent] = true;}
    
    }
    return true;
    }
    
    console.log(TreeConstructor(["(1,2)", "(2,4)","(5,2)", "(7,2)","(9,5)"])); 
    console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));


module.exports = treeConstructor;