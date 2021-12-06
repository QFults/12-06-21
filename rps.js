const inquirer = require('inquirer')

const choices = ['rock', 'paper', 'scissors']
let count = 10
let wins = 0
let losses = 0
let ties = 0

const round = () => {
  inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'Make your choice:',
    choices: ['rock', 'paper', 'scissors']
  })
    .then(data => {
      const user = data.choice
      const computer = choices[Math.floor(Math.random() * choices.length)]
      console.log(`You chose ${user}. The computer chose ${computer}.`)
      if (user === computer) {
        ties++
        console.log(`You tied! You've tied ${ties} time(s)`)
      } else if ((user === 'rock' && computer === 'scissors') || (user === 'scissors' && computer === 'paper') || (user === 'paper' && computer === 'rock')) {
        wins++
        console.log(`You won! You've won ${wins} time(s)`)
      } else {
        losses++
        console.log(`You lost! You've lost ${losses} time(s)`)
      }
      count--
      if (count > 0) {
        round()
      } else {
        console.log(`
        FINAL SCORE
        ------------
        Wins: ${wins}
        Ties: ${ties}
        Losses: ${losses}
        `)
      }
    })
    .catch(err => console.log(err))
}

round()
