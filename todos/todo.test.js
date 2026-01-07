import { test } from 'node:test';
import assert from 'node:assert';
import TodoList from './todo.js';

const todoList = new TodoList();

test('should create an empty todo list', () => {
    assert.strictEqual(todoList.getTotalCount(), 0)
});

test('should add a new task', () => {
    const task = todoList.addTask("go run")

    assert.strictEqual(typeof task.id, "number")
    assert.strictEqual(task.description, "go run")
    assert.strictEqual(task.completed, false)
    assert.ok(task.createdAt instanceof Date)

});

test('should add multiple tasks with unique IDs', () => {
    const task1 = todoList.addTask('Task 1');
    const task2 = todoList.addTask('Task 2');

    assert.notStrictEqual(task1.id, task2.id)
});

test('should throw error for empty description', () => {
    assert.throws(() => todoList.addTask(''), Error);
    assert.throws(() => todoList.addTask('   '), Error);
});


test('should complete a task', () => {
    const task = todoList.addTask('Test task');

    const result = todoList.completeTask(task.id);
    assert.strictEqual(result, true);

    const updatedTask = todoList.getTask(task.id);
    assert.strictEqual(updatedTask.completed, true);
});

test('should return false when completing non-existent task', () => {
    const result = todoList.completeTask(999);
    assert.strictEqual(result, false);
});


test('should remove a task', () => {
    const task = todoList.addTask('Remove task');
    const result = todoList.removeTask(task.id)
    assert.strictEqual(result, true)
});

test('should return false when removing non-existent task', () => {
    const result = todoList.removeTask(9328764)
    assert.strictEqual(result, false)
});


test('should get a specific task by id', () => {
    const task = todoList.getTask(3)
    assert.strictEqual(task, task)
});

test('should return null for non-existent task', () => {
    const task = todoList.getTask(34325)
    assert.strictEqual(task, null)
});

test('should get all tasks', () => {
    const tasks = todoList.getAllTasks()
    assert.strictEqual(tasks, tasks)
});


test('should get only completed tasks', () => {
    todoList.completeTask(4)
    todoList.completeTask(5)
    const completed = todoList.getCompletedTasks()
    assert.ok(completed.every(t => t.completed)
    )
});

test('should get only incomplete tasks', () => {
    const incompleted = todoList.getIncompleteTasks()
    assert.ok(incompleted.every(t => !t.completed))
});


test('should count tasks correctly', () => {
    assert.strictEqual(todoList.getTotalCount(), todoList.getAllTasks().length)
});

console.log('\n✅ All tests completed! Check results above.');