x = 0
number = 600851475143

for i in 1...number
  if number % i != 0
    x = i
  end
end

puts x
