const express=require('express');
const router=express.Router();
const {protect}=require('../middleware/authMiddelware');
const upload = require('../middleware/upload');
const { increaseShare, getoldshareholders, getShareholderById, deleteShare } = require('../controllers/addshare');
router.get('/',protect,getoldshareholders);
router.get('/edit_shareholder/:id',getShareholderById);
router.post('/',protect,increaseShare);
// router.put('/:id',increaseShare);
router.delete('/:id',protect,deleteShare);
module.exports=router;
// router.get('/edit_shareholder/:id',protect,getShareById);
