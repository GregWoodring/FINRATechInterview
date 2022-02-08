const data = require('../data');

//This function will search every property in the data objects for substrings that match the query
//from the search in a case insensitive way. 
const searchHandler = (req, res) => {
    let query = req.query.text;
    if(query === ''){
       res.send([])
    }
    let productArr = data.filter(item => {
        //filter out inactive products (out of stock)
        if(item.isActive == 'false') { 
            return false;
        }

        let keys = Object.keys(item)
        for(key of keys) { 
            
            if(Array.isArray(item[key])){
                if(item[key].join().toLowerCase().includes(query.toLowerCase())){
                    return true;
                }
                return false;
            }
            if(typeof item[key] == 'string' && item[key].toLowerCase().includes(query.toLowerCase())){
                return true;
            }
        }
    }) 

    res.send(productArr)
}

module.exports = searchHandler;