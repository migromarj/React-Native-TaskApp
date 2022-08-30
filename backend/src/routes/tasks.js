import { Router } from "express";
import {getTasks, getNumberOfTasks, getTask, createTask, editTask, deleteTask} from "../controllers/tasks";

const router =  Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        title:
 *          type: string
 *          description: the task title
 *        description:
 *          type: string
 *          description: the task description
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all Tasks
 *    tags: [Tasks]
 */
router.get("/tasks", getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: get total tasks counter
 *    tags: [Tasks]
 */
router.get("/tasks/count", getNumberOfTasks)

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get task by Id
 *    tags: [Tasks]
 */
router.get("/tasks/:id", getTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: save a new Task
 *    tags: [Tasks]
 */
router.post("/tasks", createTask)

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: update a task by Id
 *    tags: [Tasks]
 */
router.put("/tasks/:id", editTask)

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by Id
 *    tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask)

export default router