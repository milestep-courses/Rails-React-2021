names   = %w[Vlad Ihor Anatolii Alex Yana Iren Ksenia]
hobbies = %i[volleyball football reading swimming climbing]

# Added rabdom age and hobbies to all users
users = names.map{|user| {name: user, age: rand(7..78), hobbies: hobbies.sample(rand(1..3))}}

#  Added key adult for all users
users.each do |user|
  user[:adult] = true ? user[:age] >= 18 : false

  different_hobbies =  hobbies - user[:hobbies]
  next unless user[:hobbies].size < 3
  new_hobbie = user[:hobbies].include?(:football) ? different_hobbies.sample : :football
  user[:hobbies] << new_hobbie
 
end
# Names of adult users: ....
adult_users = users.map{ |user| user[:adult] === true ? user[:name] : nil}
puts "Names of adult users: #{adult_users.compact.join(", ")}"

# List of top 3 popular hobbies: ...
list_hobbies = users.map{ |user| user[:hobbies]}.flatten
counts = Hash.new(0)
list_hobbies.each { |h| counts[h] += 1 }
popular_hobbies = counts.sort{|a1,a2| a2[1]<=>a1[1]}.to_h.keys
puts "List of top 3 popular hobbies: #{popular_hobbies[0..2].join(", ")}"

# Average user age: ... 
average_user_age = users.map { |user| user[:age] }.sum / users.size
puts "Average user age: #{average_user_age}"

# Info about an oldest user:
oldest_user = users.max_by{|user| user[:age]}
 puts "Info about an oldest user:"
 puts "name: #{oldest_user[:name]}"
 puts "age: #{oldest_user[:age]}"
 puts "hobbies: #{oldest_user[:hobbies].join(", ")}"
