const axios = require('axios')
const inquirer = require('inquirer')

// http://www.omdbapi.com/?apikey=trilogy&t=Goodfellas


inquirer.prompt({
  type: 'input',
  name: 'title',
  message: 'Enter A Movie Title:'
})
  .then(data => {
    console.log(data.title)
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${data.title}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))

