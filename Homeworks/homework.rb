names   = %w[Vlad Ihor Anatolii Alex Yana Iren Ksenia]
hobbies = %i[volleyball football reading swimming climbing]
users = names.map {|name| { name: name, age: rand(7..78), hobbies: hobbies.sample(rand(1..3)) } }
users_ages = []
counts = Hash.new(0)
adult_users = []
users.map! do |user|
  users_ages.push(user[:age])
  user[:adult] = user[:age] >= 19
  if user[:hobbies].count < 2 && user[:hobbies].include?(:football)
    hobbies.delete(user[:hobbies])
    user[:hobbies] << hobbies.sample(1).first
  elsif user[:hobbies].count < 2
    user[:hobbies] << :football
  end
  user[:hobbies].each { |user_hobby| counts[user_hobby] += 1 }
  adult_users.push(user[:name]) if user[:adult]
  user
end

popular_hobbies = counts.sort_by {|_, value| value}.last(3).to_h.keys
oldest_user = users.find {|u| u[:age] == users_ages.max }
average_age = users_ages.inject(0.0) { |sum, el| sum + el } / users_ages.size
p <<~HTML.strip
Names of adult users: #{adult_users.join(" ,")}
List of top 3 popular hobbies: #{popular_hobbies.join(", ")}
Average user age: #{average_age.round(0)}
Info about an oldest user:
  name: #{oldest_user[:name]}
  age: #{oldest_user[:age]}
  hobbies: #{oldest_user[:hobbies].join(", ")}
HTML
