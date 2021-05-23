names   = %w[Vlad Ihor Anatolii Alex Yana Iren Ksenia]
hobbies = %i[volleyball football reading swimming climbing]

users = []  #<-- masiw
adult_users = []
all_hobbies = Hash.new(0)
user_ages = []

names.each do |name| 
    user = {}
    user[:age] = rand(7..78)
    user[:name] = name
    user[:hobbies] = hobbies.sample(rand(1..3))
    user[:adult] = user[:age] > 17
    hobby = hobbies - user[:hobbies]
    hobby.delete(:football)
    if user[:hobbies].size < 2 && user[:hobbies].include?(:football)
        user[:hobbies] << hobby.sample(1).first
    elsif user[:hobbies].size < 2 && !user[:hobbies].include?(:football)
        user[:hobbies] << :football
    end
    users << user 

    adult_users << user[:name] if user[:adult] 

    
    user[:hobbies].each do |h| 
        all_hobbies[h] += 1 
    end

    user_ages << user[:age] 
    
end

oldest_user = users.find do |u| 
    u[:age] == user_ages.max
end

top_hobbies = all_hobbies.sort_by { |_, size| size }.last(3).to_h.keys
average_age = (user_ages.sum(0.0) / user_ages.size).round

p "Names of adult users: #{adult_users.join(", ")}"
p "List of top 3 popular hobbies: #{top_hobbies.join(", ")}"
p "Average user age: #{average_age}"
p "Info about an oldest user:"
p "Name #{oldest_user[:name]}"
p "Age: #{oldest_user[:age]}"
p "Hobbies: #{oldest_user[:hobbies].join(", ")}"
