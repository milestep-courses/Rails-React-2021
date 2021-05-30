require 'faker'
dogs = []
humans = []

class Animal
  def initialize(name, age)
    @name = name
    @age = age
  end

  def name
    @name
  end

  def age
    @age
  end
end

class Dog < Animal
end

class Human < Animal
  def tame_animals(dogs)
    @ages = dogs.map { |dog| dog.age }
    @tame_animals = dogs
  end

  def pets
    @tame_animals
  end

  def average_age_pets
    @average_age_pets = @ages.inject(0.0) { |sum, el| sum + el } / @ages.size
    @average_age_pets.round(0)
  end
end

5.times {humans.push(Human.new(Faker::Name.name, rand(10..90))); dogs.push(Dog.new(Faker::Games::Dota.hero, rand(1..20)))}

humans.each {|human| human.tame_animals(dogs.sample(rand(1..3)))}
human_with_max_average_age = humans.max_by {|human| human.average_age_pets}

p human_with_max_average_age.name
human_with_max_average_age.pets.each { |dog| p "Name: #{dog.name}, Age: #{dog.age}"}
