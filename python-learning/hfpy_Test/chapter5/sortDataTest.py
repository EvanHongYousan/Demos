__author__ = 'yantianyu'

james = []
julie = []
mikey = []
sarah = []

with open('james.txt') as f:
    james = f.read().strip().split(',')
with open('julie.txt') as f:
    julie = f.read().strip().split(',')
with open('mikey.txt') as f:
    mikey = f.read().strip().split(',')
with open('sarah.txt') as f:
    sarah = f.read().strip().split(',')

print(sorted(james))
print(sorted(julie))
print(sorted(mikey))
print(sorted(sarah))
