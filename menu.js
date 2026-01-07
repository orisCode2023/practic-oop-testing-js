import fs from 'node:fs'
import readline from 'node:readline'
import TodoList from './todos/todo.js'
import Zoo from './zoo/zoo.js'
import { Dog, Cat } from './zoo/animal.js'

function ask(question, rl) {
  return new Promise((resolve) => rl.question(question, (ans) => resolve(ans)))
}

async function demoTodos() {
  const list = new TodoList()
  console.log('\n-- Todos Demo --')
  const t1 = list.addTask('Buy milk')
  const t2 = list.addTask('Write tests')
  console.log('Added tasks:', list.getAllTasks())
  list.completeTask(t1.id)
  console.log('Completed tasks:', list.getCompletedTasks())
  console.log('Incomplete tasks:', list.getIncompleteTasks())
  console.log('Totals: total=%d, completed=%d, incomplete=%d', list.getTotalCount(), list.getCompletedCount(), list.getIncompleteCount())
  console.log('-- End Todos Demo --\n')
}

async function demoZoo() {
  console.log('\n-- Zoo Demo --')
  const zoo = new Zoo()
  const dog = new Dog('Rex')
  const cat = new Cat('Mittens')
  zoo.addAnimal(dog)
  zoo.addAnimal(cat)
  console.log('Animals speak:', zoo.makeAllSpeake())
  console.log('-- End Zoo Demo --\n')
}

async function showVaultInfo() {
  console.log('\n-- Vault Info --')
  const path = './vault/app.js'
  try {
    const content = fs.readFileSync(path, 'utf8')
    if (!content.trim()) {
      console.log('File', path, 'exists but is empty.')
    } else {
      console.log('File', path, 'contents preview:\n')
      console.log(content.split('\n').slice(0, 20).join('\n'))
    }
  } catch (err) {
    console.log('No vault app found at', path)
  }
  console.log('-- End Vault Info --\n')
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  while (true) {
    console.log('Select an option:')
    console.log('1) Todos demo')
    console.log('2) Zoo demo')
    console.log('3) Vault info')
    console.log('4) Exit')
    const ans = await ask('> ', rl)
    const choice = ans.trim()
    if (choice === '1') await demoTodos()
    else if (choice === '2') await demoZoo()
    else if (choice === '3') await showVaultInfo()
    else if (choice === '4' || choice.toLowerCase() === 'q') break
    else console.log('Unknown option:', choice)
  }
  rl.close()
  console.log('Goodbye')
}

if (process.argv.includes('--demo')) {
  main()
} else if (import.meta.url === `file://${process.argv[1]}`) {
  // run interactive when invoked directly
  main()
}
