const Question = require("../models/question");
const asyncHandler=require("express-async-handler");
const getQuestion = asyncHandler(async(req,res)=>{
        const Questions = await Question.find(req.params.id);
        res.json(Questions);
    }
)
const createQuestion=asyncHandler(
    async(req,res)=>{
        const {question,correct_answer,incorrect_answers} =req.body;
        if(!question || !correct_answer|| !incorrect_answers  ){
            res.status(400);
            throw new Error("Please fill all the fields");
        }
        else{
            const question = new Question(
                {question:req.body.question,
                    correct_answer:req.body.correct_answer,
                    incorrect_answers:req.body.incorrect_answers,
               });
            const createdQuestion = await question.save();
            res.json(createdQuestion);
        }
    }
)
const getQuestionById=asyncHandler(
    async(req,res)=>{
        const Question = await Question.findById(req.params.id);
        if(Question){
            res.json(Question);
        }
        else{
            res.status(404).json({message:"Question not found"});
        }
       
    }
)
const updateQuestion=asyncHandler(
    async(req,res)=>{
        const {title} = req.body;
        const Question = await Question.findById(req.params.id);
        if(Question){
            Question.title=title;
           
          

            const updatedQuestion = await Question.save();
            res.json(updatedQuestion);
        }
        else
        {
            res.status(404).json({message:"Question not found"});
        }
    }
)
const deleteQuestion=asyncHandler(
    async(req,res)=>{
       
        const Question = await Question.findById(req.params.id);
        if(Question){
           await Question.remove();
           res.json({message:"Question removed"});

        
        }
        else
        {
            res.status(404).json({message:"Question not found"});
        }
    }
)


module.exports={getQuestion,createQuestion,getQuestionById,updateQuestion,deleteQuestion};