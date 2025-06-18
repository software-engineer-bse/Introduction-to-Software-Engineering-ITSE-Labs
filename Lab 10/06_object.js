// JavaScript object is just like dictionary in Python
let student = {
    name: "Khurram",
    grade: "A",
    age: 25,
    print_data: function print_data(){
      console.log(this.name + " got grade: " + this.grade + " and his age is: "+ this.age);
    }
  };

  student.print_data()
  
  

//   Mini Task: Make an object book with title and author and print details.