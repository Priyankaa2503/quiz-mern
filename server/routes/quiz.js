const express = require('express');
const { getQuiz,createQuiz,getQuizById ,updateQuiz,deleteQuiz} = require('../controllers/quizController');
const router = express.Router();


router.route('/').get(getQuiz)
router.route('/create').post(createQuiz);
router.route('/:id').get(getQuizById).put(updateQuiz).delete(deleteQuiz);

module.exports=router;