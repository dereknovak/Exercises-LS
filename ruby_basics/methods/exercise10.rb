names = ["Dave", "Sally", "George", "Jessica"]
activities = ["walking", "running", "cycling"]

def name(name)
  name.sample
end

def activity(activity)
  activity.sample
end

def sentence(name, activity)
  "#{name} went #{activity} today!"
end

puts sentence(name(names), activity(activities))