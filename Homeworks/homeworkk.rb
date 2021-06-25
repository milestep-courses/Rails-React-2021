names   = %w[Vlad Ihor Anatolii Alex Yana Iren Ksenia]
hobbies = %i[volleyball football reading swimming climbing]

users = []

adult_users = []

list_hobbies = Hash.new(0)

names.each do |name|
     user = {}
     user[:name] = name
     user[:age] = rand(7...78)
     user[:hobbies] = hobbies.sample(rand(1..3))
     user[:adult] = user[:age] > 18
     hobbies.delete(:football)
     if user[:hobbies].size < 2 && user[:hobbies].include?(:football) 
        user[:hobbies].push(hobbies.sample(1).join()) 
     elsif user[:hobbies].size < 2  && !user[:hobbies].include?(:football)
        user[:hobbies].push(:football)       
     end
     if user[:adult]
       adult_users.push(name) 
     end
     users.push(user)
     user[:hobbies].each do |hobby| 
        list_hobbies[hobby] += 1

     end
end 

top_hobbies = list_hobbies.sort_by {|_hobbies, value| value}.last(3).to_h.keys.join(", ")
average_age = users.map { |user| user[:age] }.sum / users.size
oldest_user = users.max_by { |user| user[:age] }




p "Names of adult users: #{adult_users.join(", ")}"
p "List of top 3 popular hobbies: #{top_hobbies}"
p "Average user age: #{average_age}"
p "Info about an oldest user:"
p "Name #{oldest_user[:name]}"
p "Age: #{oldest_user[:age]}"
p "Hobbies: #{oldest_user[:hobbies].join(", ")}"