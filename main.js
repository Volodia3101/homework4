// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(0);
//     max = Math.floor(100);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//
// }
//
// console.log(getRandomIntInclusive());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
 let numbers = [1,4,2342,5,678678,8,22,142789789,45,678,987,9877];
        numbers.sort(function (a,b) {
            return a -b;
});
   console.log(numbers);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let numb = [1,4,2342,5,678678,8,22,142789789,45,678,987,9877];
        numb.filter(function (name, number) {
            return number %2===1;
        });
        console.log(numb)
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let nomer = [1,4,2342,5,678678,8,22,142789789,45,678,987,9877];
     let map = nomer.map(function (value, index,){
      return {
        value,
          id: index + 1,
      }
     })
console.log(map)
// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
class User{
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
    study(){
        console.log(this.id, this.name, this.surname, this.email, this.phone);
    }
}
        let users = [
        andriy = new User(1,'Andriy','Petrov','andiypetrov@gmail.com','0985643521'),
        kolya = new User(2,'Kolya','Ivaniv','kolyaivaniv@gmail.com','0985145577'),
        anna = new User(3,'Anna','Kovalchuk','annakovalchuk@gmail.com','0679756239'),
        natalya = new User(4,'Natalya','Partyka','partykanatalya@gmail.com','0995678332'),
        sasha = new User(5,'Oleksandr','Popov','popov777@gmail.com','0976689234'),
        max = new User(6,'Max','Davidyuk','maximus123321@gmail.com','0639874679'),
        igor = new User(7,'Igor','Ivanov','igorko7@gmail.com','0992347691'),
        mariya = new User(8,'Mariya','Matviy','matviyM@gmail.com','0934569357'),
        nastya = new User(9,'Anastasiya','Porudenko','porudenkonastya@gmail.com','0985123098'),
        katya = new User(10,'Kateryina','Grigorciv','katyusha@gmail.com','0991230001'),
        ]
// console.log(andriy);
// console.log(kolya);
// console.log(anna);
// console.log(natalya);
// console.log(sasha);
// console.log(max);
// console.log(igor);
// console.log(mariya);
// console.log(nastya);
// console.log(katya);
console.log(users);

   let id = users.filter(function (name, number){
        return number %2===1;
    })
    let sort = users.sort(function (a,b) {
    return 1;

})
console.log(id);
console.log(sort);
