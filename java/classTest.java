class Dog {
  String name;
  public static void main (String[] args){
    //创建dog
    Dog dog1 = new Dog();
    dog1.bark();
    dog1.name = "Bart";
    //创建 Dog数组
    Dog[] myDogs = new Dog[3];
    
    myDogs[0] = new Dog();
    myDogs[1] = new Dog();
    myDogs[2] = dog1;

    myDogs[0].name = "Fred";
    myDogs[1].name = "Marge";

    System.out.print("last dogs name is");
    System.out.print(myDogs[2].name);

    int x = 0;
    while ( x<myDogs.length ) {
      myDogs[x].bark();
      x = x+1;
    }  
  }

  public void bark() {
    System.out.print(name + " says Ruff!\n");
  }
}