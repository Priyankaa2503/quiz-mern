const Quiz = require("../models/quiz");
const asyncHandler=require("express-async-handler");
const getQuiz = asyncHandler(async(req,res)=>{
        const Quizes = await Quiz.find(req.params.id);
        res.json(Quizes);
    }
)
const createQuiz=asyncHandler(
    async(req,res)=>{
        const {title} =req.body;
        if(!title ){
            res.status(400);
            throw new Error("Please fill all the fields");
        }
        else{
            const quiz = new Quiz(
                {title:req.body.title,
               });
            const createdQuiz = await quiz.save();
            res.json(createdQuiz);
        }
    }
)
const getQuizById=asyncHandler(
    async(req,res)=>{
        const Quiz = await Quiz.findById(req.params.id);
        if(Quiz){
            res.json(Quiz);
        }
        else{
            res.status(404).json({message:"Quiz not found"});
        }
       
    }
)
const updateQuiz=asyncHandler(
    async(req,res)=>{
        const {title} = req.body;
        const Quiz = await Quiz.findById(req.params.id);
        if(Quiz){
            Quiz.title=title;
           
          

            const updatedQuiz = await Quiz.save();
            res.json(updatedQuiz);
        }
        else
        {
            res.status(404).json({message:"Quiz not found"});
        }
    }
)
const deleteQuiz=asyncHandler(
    async(req,res)=>{
       
        const Quiz = await Quiz.findById(req.params.id);
        if(Quiz){
           await Quiz.remove();
           res.json({message:"Quiz removed"});

        
        }
        else
        {
            res.status(404).json({message:"Quiz not found"});
        }
    }
)


module.exports={getQuiz,createQuiz,getQuizById,updateQuiz,deleteQuiz};