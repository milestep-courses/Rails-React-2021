names = %w[Vlad Ihor Anatolii Alex Yana Iren Ksenia]
hobbies = %i[volleyball football reading swimming climbing]
users = names.map {|name| { name: name, age: rand(7..78), hobbies: hobbies.sample(rand(1..3)) } }
users_age = []
count_hobbies = Hash.new(0)
users = users.map! do |user|
  user[:adult] = user[:age] >= 18
  if user[:hobbies].length < 2
    user[:hobbies].include?(:football) ? user[:hobbies].push(:reading) : user[:hobbies].push(:football)
  end
  user[:hobbies].each { |hobbie| count_hobbies[hobbie] += 1}
  users_age.push(user[:age])
  user
end
count_hobbies = count_hobbies.sort_by {|key, value| value}.reverse.to_h
list_of_popular_hobbies = (1..3).map { |i| count_hobbies.keys[i] }
oldest_user   = users.find {|u| u[:age] == users_age.max }
avg_age       = users_age.inject(0) { |sum, el| sum + el} / users_age.size
adult_users   = users.find_all{ |user| user[:adult]}.map{|u| u[:name] }
puts "Names of adult users: #{adult_users}\nList of top 3 popular hobbies: #{list_of_popular_hobbies}\nAverage user age: #{avg_age} \nInfo about an oldest user:\n\t name: #{oldest_user[:name]} \n\t age: #{oldest_user[:age]} \n\t hobbies: #{oldest_user[:hobbies]}"