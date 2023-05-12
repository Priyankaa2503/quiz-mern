const express = require('express');
const { getQuestion,createQuestion,getQuestionById ,updateQuestion,deleteQuestion} = require('../controllers/questionController');
const router = express.Router();


router.route('/').get(getQuestion)
router.route('/create').post(createQuestion);
router.route('/:id').get(getQuestionById).put(updateQuestion).delete(deleteQuestion);

module.exports=router;