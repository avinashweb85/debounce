
function getData(){
    console.count('counter');
};

const debounce = function(func, d){
    let timer;
    return function (...args){
        context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(context, args);
        }, d)
    }
}

const betterFunction = debounce(getData, 1000);