class Animal 
	attr_reader :age, :name

	def initialize(names, age_from, age_to)
		@name = names.shuffle.first
		@age = rand(age_from..age_to)
	end
end

class Dog < Animal
	def initialize
		@dogs_namespace = ['Jeck',  'Dik', 'Sharick', 'Rex', 'Paksy']
		@dog_age_start = 4
		@dog_age_end = 30

		super(@dogs_namespace, @dog_age_start, @dog_age_end)
	end
end


class Human < Animal
	attr_reader :pets
	def initialize
		@human_namespace = ['Valik', 'Nastya', 'Vitalik', 'Vita', 'Rita', 'Sergiy']
		@human_age_start = 10
		@human_age_end = 90
		
		super(@human_namespace, @human_age_start, @human_age_end)

		@pets = [];
	end

	def tame_animal=(pet)
		if(pet.instance_of? Dog)
			@pets.push({ name: pet.name, age: pet.age })
		else
			p 'only a dog can be tamed'
		end
	end
end

humans = ((1..5).map { |n| Human.new })


humans.each do |human|
	pets  = []
	rand(1..3).times  {|p| pets << Dog.new}

	pets.each do |pet| 
		human.tame_animal=(pet)
	end
end

humans.map! do |human|
	{
		self: human,
		pets_average_age: (human.pets.map {|pet| pet[:age]}).sum 
	}
end

oldest_pets_obj = humans.max_by do |element|
  element[:pets_average_age]
end

oldest_pets_user = oldest_pets_obj[:self];

p oldest_pets_user.name
p oldest_pets_user.pets
