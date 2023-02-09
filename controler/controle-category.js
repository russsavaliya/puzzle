const categorydatabase = require('../model/category');
exports.insert = async function (req, res, next) {
    try {
        console.log(req.body);
        console.log(req.files);
        // 
            let backgroundarray=[]
            req.files.background.map((ele)=>{
            backgroundarray.push( ele.filename )
            })

             let icon=[]
            req.files.icon.map((ele)=>{
            icon.push( ele.filename )
            })
         
            // add filds
            req.body.background=backgroundarray
            req.body.icon=icon
        // 
        let checkuniquename =await categorydatabase.findOne({ name: req.body.name })
        if (checkuniquename) {
            throw new Error('name allredy use!!')
        }
        
        let insertdata = await categorydatabase.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'data insert successfull',
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
         console.log(req.files);
        // 
            let backgroundarray=[]
            req.files.background.map((ele)=>{
            backgroundarray.push( ele.filename )
            })

             let icon=[]
            req.files.icon.map((ele)=>{
            icon.push( ele.filename )
            })
         
            // add filds
            req.body.background=backgroundarray
            req.body.icon=icon
            
            let updateid=req.query.updateid
        if(updateid)
        {
           await categorydatabase.findByIdAndUpdate(updateid,req.body)
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
         await categorydatabase.findByIdAndDelete(deleteid)
       }
        res.status(201).json({
            status: 'success',
            message: 'data delete successfull',
            
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
      
        let datacategory= await categorydatabase.find()
       
        res.status(201).json({
            status: 'success',
            message: 'data delete successfull',
            data:datacategory
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message,

        })
    }

}

