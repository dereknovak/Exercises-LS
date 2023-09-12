pets = { cat: 'fluffy', dog: ['sparky', 'fido'], fish: 'oscar' }

pets[:dog] << 'bowser'

p pets

=begin

Magdalena's code instructed the value of ':dog' to be reassigned to 'bowser',
using the '=' command. Instead, she should add a value to the key using
'<<' or #push.

=end