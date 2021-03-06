# CREATE DOG OBJECTS

class Dog():

    # CLASS OBJECT ATTRIBUTE
    species = "mammal"

    def __init__(self, breed, name):
        self.breed = breed
        self.name = name

mydog = Dog("Labrador", "Sammy")
print(mydog.breed)
print(mydog.name)
print(mydog.species)

# CREATE CIRCLE OBJECTS

class Circle():

    pi = 3.14

    def __init__(self, radius=1):
        self.radius = radius

    def area(self):
        return self.radius * self.radius * Circle.pi

    def set_radius(self, new_r):
        return self.radius = new_r

myc = Circle()

print(myc.radius())

myc2 = Circle(3)
print(myc.area())
