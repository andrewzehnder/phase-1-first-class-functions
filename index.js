function receivesAFunction (callback) {
    callback();
}



function returnsANamedFunction() {
    return function anotherFunction() {  
    }   
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}