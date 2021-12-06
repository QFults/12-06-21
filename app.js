
// you can only do dot notation on objects and objects alone

// let str = 'Hello world!'
// console.log(str.length)

// let bool = true
// console.log(bool.valueOf())

// let num = 4
// console.log(num.toString())

// let obj = { name: 'John Doe' }
// console.log(obj.valueOf())

// let arr = [1, 2, 3, 4]
// console.log(arr.join(''))

function User (name, username, email) {
  this.name = name
  this.username = username
  this.email = email
}

const user1 = new User('John Doe', 'johndoe', 'johndoe@gmail.com')
const user2 = new User('Jane Doe', 'janedoe', 'janedoe@gmail.com')

console.log(user1)
console.log(user2)
