import { Router } from 'express';

import { Todo } from '../models/todos';
type Requestbody = {text: string}
type RequestParams = { todoId: string}
let todos : Todo []= [];

const router = Router();

router.get('/',(req,res,next)=>{
        res.status(200).json({todos: todos})
})

router.post('/todo',(req,res,next)=>{
    const body = req.body as Requestbody
    const newTodo : Todo ={
        id: new Date().toISOString(),
        text: body.text,
    }
    todos.push(newTodo)
   return res.status(201).json({message:'todo added', todo : newTodo , todos : todos})
} )

router.put('/todo/:todoId',(req,res,next)=>{
    const params = req.params as RequestParams
    const tid = params.todoId;
    const body = req.body.Requestbody
    const todoIndex = todos.findIndex(todoItem => todoItem.id=== tid);
    if (todoIndex >=0){
        todos[todoIndex]={ id: todos[todoIndex].id , text : body.text};
        return res.status(200).json({message:'suceess', todos: todos})
    }
    return res.status(404).json({message:'failed'})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    const params = req.params as RequestParams
    todos = todos.filter(todoItem => todoItem.id !== params.todoId)
    res.status(200).json({message:'deleted', todos : todos})
})

export default router;