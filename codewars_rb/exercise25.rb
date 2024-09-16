=begin

# PETE THE BAKER

***** P
I: A hash, containing both the required ingredients and the current ingredients
O: An integer, rep the number of full cakes that the chef can bake

- Must have all ingredients to create a cake
- no units, a number simply correlates with the item
- Ingredients not present can be presumed to be 0

***** E
required ingredients = {flour: 500, sugar: 200, eggs: 1}
current ingredients = {flour: 1200, sugar: 1200, eggs: 5, milk: 200})
Total cakes = 2
Leftovers = flour: 200, sugar: 800, eggs: 3, milk: 200
- flour is too low to make another cake

***** D
- A hash, rep the number of required ingredients
- A hash, rep the number of current ingredients

***** A
- INIT cakes = 0
- LOOP
  - ITERATE thru current_ingredients
    - Subtract the value of the current key from the current value
    - break out of loop if the current value is < 0
  - break out of loop if any values include negative number
  - increment cakes by 1
- RETURN cakes
=end

def cakes(recipe, current_ingredients)
  required_ingredients = recipe.keys
  current_ingredients.select! { |ingredient, _| recipe.include?(ingredient) }
  return 0 if recipe.keys.sort != current_ingredients.keys.sort

  cakes = 0
  loop do
    current_ingredients.each do |ingredient, amount|
      current_ingredients[ingredient] -= recipe[ingredient]
      break if amount < 0
    end

    break if current_ingredients.values.any? { |num| num < 0 }
    cakes += 1
  end

  cakes
end

p cakes({"flour"=>500, "sugar"=>200, "eggs"=>1},{"flour"=>1200, "sugar"=>1200, "eggs"=>5, "milk"=>200}) == 2
p cakes({"cream"=>200, "flour"=>300, "sugar"=>150, "milk"=>100, "oil"=>100},{"sugar"=>1700, "flour"=>20000, "milk"=>20000, "oil"=>30000, "cream"=>5000}) == 11
p cakes({"apples"=>3, "flour"=>300, "sugar"=>150, "milk"=>100, "oil"=>100},{"sugar"=>500, "flour"=>2000, "milk"=>2000}) == 0
p cakes({"apples"=>3, "flour"=>300, "sugar"=>150, "milk"=>100, "oil"=>100},{"sugar"=>500, "flour"=>2000, "milk"=>2000, "apples"=>15, "oil"=>20}) == 0
p cakes({"eggs"=>4, "flour"=>400},{}) == 0
p cakes({"cream"=>1, "flour"=>3, "sugar"=>1, "milk"=>1, "oil"=>1, "eggs"=>1},{"sugar"=>1, "eggs"=>1, "flour"=>3, "cream"=>1, "oil"=>1, "milk"=>1}) == 1 