const puzzledatabase= require('../model/puzzle')

exports.insert = async function (req, res, next) {
    try {
        console.log(req.body);
        console.log(req.file);
        // 
         
            // add filds
            req.body.file=req.file.que
           
        // 
        
        let insertdata = await puzzledatabase.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'puzzle insert successfull',
            data: insertdata
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,

        })
    }

}

// update

exports.update = async function (req, res, next) {
    try {
        console.log(req.query.updateid);
         console.log(req.file);
        //
         
            // add filds
            req.body.file=req.file.que
            
            
            let updateid=req.query.updateid
        if(updateid)
        {
           await puzzledatabase.findByIdAndUpdate(updateid,req.body)
        }
        res.status(201).json({
            status: 'success',
            message: 'data update successfull',
          
      
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,

        })
    }

}

// delete
exports.delete = async function (req, res, next) {
    try {
       console.log(req.query.deleteid);
       let deleteid=req.query.deleteid
       if(deleteid)
       {
         await puzzledatabase.findByIdAndDelete(deleteid)
       }
        res.status(201).json({
            status: 'success',
            message: 'puzzle delete successfull',
            
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,

        })
    }

}

exports.find = async function (req, res, next) {
    try {
      
        let datacategory= await puzzledatabase.find().populate('category')
       
        res.status(201).json({
            status: 'success',
            message: 'data show successfull',
            data:datacategory
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,

        })
    }

}

exports.findid = async function (req, res, next) {
    try {
      console.log(req.query.getidtodata);
        let datacategory= await puzzledatabase.find({category: req.query.getidtodata})
       
        res.status(201).json({
            status: 'success',
            message: 'data show successfull',
            data:datacategory
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,

        })
    }

}

exports.findleveltodata = async function (req, res, next) {
    try {
      console.log(req.query.getidtodata);
      let categoryid=req.query.getidtodata
      let levelf=req.query.level
      
        let datacategory = await puzzledatabase.findOne({category: categoryid, level : levelf})
        if(!datacategory)
        {
            throw new Error('not valid')
        }
        res.status(201).json({
            status: 'success',
            message: 'data show successfull',
            data:datacategory
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,

        })
    }

}