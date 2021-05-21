names   = %w[Vlad Ihor Anatolii Alex Yana Iren Ksenia]
hobbies = %i[volleyball football reading swimming climbing]

# Adding rabdom age and hobbies to all users
users = names.map { |user| { name: user, age: rand(7..78), hobbies: hobbies.sample(rand(1..3)) } }

users.each do |user|
  #  Adding key adult for all users
  user[:adult] = user[:age] >= 18

  # Всім, в кого менше 2х хобі, потрібно додати хоббі  football . Якщо таке хоббі вже є, додати любе нове для обраного юзера хоббі
  unique_hobbies = (user[:hobbies] | hobbies)
  next unless user[:hobbies].size < 3
  new_hobbie = user[:hobbies].include?(:football) ? unique_hobbies.sample : :football
  user[:hobbies] << new_hobbie 
end

# Names of adult users: ....
adult_users = users.map { |user| user[:name] if user[:adult] }.compact.join(", ")
puts "Names of adult users: #{ adult_users }"

# List of top 3 popular hobbies: ...
list_hobbies = users.map { |user| user[:hobbies] }.flatten
group_hobbies = list_hobbies.group_by(&:itself).map { |key, value| [key, value.size] }.to_h
popular_hobbies = group_hobbies.keys.sort_by { |value| group_hobbies[value] }.reverse
puts "List of top 3 popular hobbies: #{ popular_hobbies[0..2].join(", ") }"

# Average user age: ... 
average_user_age = users.map { |user| user[:age] }.sum / users.size
puts "Average user age: #{ average_user_age }"

# Info about an oldest user:
oldest_user = users.max_by { |user| user[:age] }
 puts 'Info about an oldest user:'
 puts "  name: #{ oldest_user[:name] }"
 puts "  age: #{ oldest_user[:age] }"
 puts "  hobbies: #{ oldest_user[:hobbies].join(", ") }"
