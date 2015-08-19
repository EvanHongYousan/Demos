__author__ = 'yantianyu'
movies = ['The hofdsa', 1975, 'Therry jaofdsn & fdsa fdsa ', 91,
          ['Granfds fds', ['fds fdsa ', 'fdsa fdsa', 'fds fdsa', 'fdas fdsa']]]

print movies


def print_lol(the_list):
    for each in the_list:
        if isinstance(each, list):
            print_lol(each)
        else:
            print each


print_lol(movies)
