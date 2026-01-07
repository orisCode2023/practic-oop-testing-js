import { title } from "node:process";

class TodoList {
    #tasks = []
    #nextId = 0


  addTask(description) {
    if (!description || description.trim() === ''){
        throw new Error('type of description must be string and not empty') 
    }
    const newTask = {
        id : this.#nextId ++, 
        description: description,
        completed: false,
        createdAt: new Date()
    }
    this.#tasks.push(newTask)
    return newTask
  }

  completeTask(id) {
    const findTask = this.#tasks.find(task => task.id === id)
    if (!findTask) return false
    else findTask.completed = true
    return true
  }

  removeTask(id) {
    const findTask = this.#tasks.findIndex(task => task.id === id)
    if (findTask === -1) return false
    else {
        this.#tasks.splice(findTask, 1)
        return true
    }
  }

  getTask(id) {
    return this.#tasks.find(task => task.id === id) || null
  }

  getAllTasks() {
    return [...this.#tasks]
  }

  getCompletedTasks() {
    return this.#tasks.filter(tasks => tasks.completed === true)
  }

  getIncompleteTasks() {
    return this.#tasks.filter(tasks => tasks.completed === false)
  }

  getTotalCount() {
    return this.#tasks.length
  }
  getCompletedCount() {
    return this.getCompletedTasks().length
  }

  getIncompleteCount() {
    return this.getIncompleteTasks().length
  }
}

export default TodoList;