function collectStrings(obj) {
    const result = [];
    
    function helper(o) {
        
        for (let key in o) {
            if (typeof o[key] === 'string') {
                result.push(o[key]);
            } else {
                helper(o[key]);
            }
        }
    }
    helper(obj);
    
    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
