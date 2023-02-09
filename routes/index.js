var express = require('express');
const controlercategory=  require('../controler/controle-category');
const controlerpuzzle=  require('../controler/control-puzzle');
var router = express.Router();


const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,uniqueSuffix+file.originalname)
  }
})
const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/categoryinsert',upload.fields([{ name: 'background', maxCount: 1 }, { name: 'icon', maxCount: 1 }]),controlercategory.insert);
router.post('/categoryupdate',upload.fields([{ name: 'background', maxCount: 1 }, { name: 'icon', maxCount: 1 }]),controlercategory.update);
router.get('/categorydelete',controlercategory.delete);
router.get('/categoryfind',controlercategory.find);

// puzzle

router.post('/puzzleinsert',upload.single('que'),controlerpuzzle.insert);
router.post('/puzzleupdate',upload.single('que'),controlerpuzzle.update);
router.get('/puzzledelete',controlerpuzzle.delete);
router.get('/puzzlefind',controlerpuzzle.find);
router.get('/puzzlefindid',controlerpuzzle.findid);
router.get('/puzzlefindleveltodata',controlerpuzzle.findleveltodata);


module.exports = router;
