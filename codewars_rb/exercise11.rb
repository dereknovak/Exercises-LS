# EXTRACT THE DOMAIN NAME FROM A URL

def domain_name(website)
  website.split(/[^\-\w]/).each { |word| return word unless ['http', 'https', 'www', ''].include?(word) }
end

p domain_name("http://google.com") == "google"
p domain_name("http://google.co.jp") == "google"
p domain_name("www.xakep.ru") == "xakep"
p domain_name("https://youtube.com") == "youtube"