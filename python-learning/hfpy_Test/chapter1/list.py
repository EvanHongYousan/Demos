# __author__ = 'yantianyu'
# movies = ["The Holy",
#           "the fas fd adf ",
#           "The meaning fdsa"]
# print(movies[2])
# print(movies)
# print len(movies)
# movies.append("the fourth")
# print movies
# print movies.pop()
#
# movies.extend(['fdsa', '3123223'])
# print movies
#
# movies.remove("The Holy")
# print movies
# movies.insert(0, "tyu")
# print movies

movies = ["the1", "the1", "the1", "the1"]
movies2 = []

for i in range(4):
    movies2.append(movies[i])
    movies2.append(1975)

print movies2

for each_flick in movies2:
    print each_flick,
