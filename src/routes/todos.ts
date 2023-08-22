import { Router } from "express";
import { Todo } from "../models/todo";
import { type } from "os";
const router = Router();
let todos: Todo[] = [];
type RequestBody = {
  description: string;
};
type RequestParams = {
  id: string;
};

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    desc: body.description,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "todo added", todos: todos });
});

router.put("/todo/:id", (req, res) => {
  const params = req.params as RequestParams;
  const body = req.body as RequestBody;
  const index = todos.findIndex((item) => item.id === params.id);
  if (index >= 0) {
    const newData = {
      id: params.id,
      desc: body.description,
    };
    todos[index] = newData;
    return res.status(200).json({ message: "data updated", todos });
  }
  res.status(404).json({ message: "No such data found" });
});

router.delete("/todo/:id", (req, res) => {
  const params = req.params as RequestParams;
  todos = todos.filter((item) => item.id !== params.id);
  res.status(300).json({ message: "todo got deleted", todos });
});
export default router;
