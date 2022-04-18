function stringifyNumbers(obj) {
    const result = {};
    for (let key in obj) result[key] = obj[key];
    
    function helper(o) {
        for (let key in o) {
            if (typeof o[key] !== 'object') {
                if (typeof o[key] === 'number') o[key] = o[key].toString();
            } else {
                helper(o[key]);
            }
        }
    }    
    helper(result);
    
    return result;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
