names   = %w[Vlad Ihor Anatolii Alex Yana Iren Ksenia]
hobbies = %i[volleyball football reading swimming climbing];

AGE_MIN = 7
AGE_MAX = 78

HOBBIES_FROM = 1
HOBBIES_TO = 3

HOBBIES_SIZE = hobbies.size - 1
HOBBIES_START = 0

users = []

def create_user(name)
     {
        age: rand(AGE_MIN..AGE_MAX),
        name: name,
    }
end

users = names.map(&method(:create_user))

users = users.map do |user| 

    user_hobbies = hobbies.sample(rand(1..3))
    
    if user_hobbies.size < 3
        if user_hobbies.include?(:football)
            user_hobbies.push((hobbies - user_hobbies).sample)
        else
            user_hobbies.push(:football)
        end
    end
    user.merge({
        hobbies: user_hobbies,
        adult: user[:age] >= 18
    })
end 

adult_users = users.select {|user| user[:adult]}
popular_hobbies = ((users.map {|user| user[:hobbies]}).flatten(1).inject(Hash.new(0)) { |h,v| h[v] += 1; h }).keys.to_a.slice(0, 3)
avarage_age = users.reduce(0) {|result, current| result += current[:age] }
oldest_user = users.max {|a,b| a[:age] <=> b[:age] }

p "Names of adult users: #{adult_users}"
p "List of top 3 popular hobbies: #{popular_hobbies}"
p "Average user age: #{avarage_age}"


p '****'
p "Info about an oldest user:"
p "name: #{oldest_user[:name]}"
p "age: #{oldest_user[:age]}"
p "hobbies: #{oldest_user[:hobbies]}"