temp = 0
x = 0
y = 1
sum = 0

while x < 4e6
  temp = x + y
  x = y
  y = temp

  if x % 2 == 0
    sum += x
  end
end

puts sum
