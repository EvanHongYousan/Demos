__author__ = 'yantianyu'

class Animal:
    def run(self):
        print("Animal is running...")

class Dog(Animal):
    def run(self):
        print("Dog is running...")

class Cat(Animal):
    def run(self):
        print("Cat is running...")

dog = Dog()
cat = Cat()

dog.run()
cat.run()

print(isinstance(dog, Dog))
