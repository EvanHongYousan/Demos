__author__ = 'yantianyu'


def sanitize(time_string):
    if '-' in time_string:
        splitter = '-'
    elif ':' in time_string:
        splitter = ':'
    else:
        return time_string
    (mins, secs) = time_string.split(splitter)
    return (mins + '.' + secs)


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

# for item in [james, julie, mikey, sarah]:
#     for i in range(len(item)):
#         item[i] = sanitize(item[i])

clean_james = [sanitize(each_t) for each_t in james]
clean_julie = [sanitize(each_t) for each_t in julie]
clean_mikey = [sanitize(each_t) for each_t in mikey]
clean_sarah = [sanitize(each_t) for each_t in sarah]

clean_james = set(clean_james)
clean_julie = set(clean_julie)
clean_mikey = set(clean_mikey)
clean_sarah = set(clean_sarah)

print(sorted(clean_james)[:3])
print(sorted(clean_julie)[:3])
print(sorted(clean_mikey)[:3])
print(sorted(clean_sarah)[:3])

