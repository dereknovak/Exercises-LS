=begin

DUBSTEP

***** P
I: A string of dubstep (only uppercase)
O: A string, Original lyrics to song, separated by a space

- There is an indeterminant amount of WUBs
- Could be before, between, or after words

***** E
song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")  =>  WE ARE THE CHAMPIONS MY FRIEND
p song_decoder("AWUBBWUBC") == "A B C"
p song_decoder("AWUBWUBWUBBWUBWUBWUBC") == "A B C"
p song_decoder("WUBAWUBBWUBCWUB") == "A B C" 

***** D

***** A
DEFINE song_decoder (dubstep)
- Split dubstep at WUBs (regex 1 or more)
- Rejoin with space in the middle
END

=end

def song_decoder(dubstep)
  dubstep.gsub(/(WUB)+/, ' ').strip
end

p song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")  #=>  WE ARE THE CHAMPIONS MY FRIEND
p song_decoder("AWUBBWUBC") #== "A B C"
p song_decoder("AWUBWUBWUBBWUBWUBWUBC") #== "A B C"
p song_decoder("WUBAWUBBWUBCWUB") #== "A B C" 

