"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        desc: req.body.description,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "todo added", todos: todos });
});
router.put("/todo/:id", (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((item) => item.id === id);
    if (index >= 0) {
        const newData = {
            id: id,
            desc: req.body.description,
        };
        todos[index] = newData;
        return res.status(200).json({ message: "data updated", todos });
    }
    res.status(404).json({ message: "No such data found" });
});
router.delete("/todo/:id", (req, res) => {
    const id = req.params.id;
    todos = todos.filter((item) => item.id !== id);
    res.status(300).json({ message: "todo got deleted", todos });
});
exports.default = router;
