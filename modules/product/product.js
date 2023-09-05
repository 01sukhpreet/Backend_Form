exports.get = (req,res)=>{
    console.log('----product get method-----')
    let response = {
        message:"this is product get method"
    }
    res.json(response)
}



exports.add = (req,res)=>{
    console.log('----product add method-----')
    let response = {
        message:"this is product get method"
    }
    res.json(response)
}


exports.update = (req,res)=>{
    console.log('----product update method-----')
    let response = {
        message:"this is product update method"
    }
    res.json(response)
}


exports.delete = (req,res)=>{
    console.log('----product delete method-----')
    let response = {
        message:"this is product delete method"
    }
    res.json(response)
}