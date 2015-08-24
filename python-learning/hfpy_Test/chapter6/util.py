__author__ = 'yantianyu'


class Athlete:
    def __init__(self, a_name, a_dob=None, a_times=[]):
        self.name = a_name
        self.dob = a_dob
        self.times = a_times

    def top3(self):
        return (sorted(set([sanitize(t) for t in self.times]))[:3])

    def add_time(self, time_value):
        self.times.append(time_value)

    def add_times(self, list_of_times):
        self.times.extend(list_of_times)


def sanitize(time_string):
    if '-' in time_string:
        splitter = '-'
    elif ':' in time_string:
        splitter = ':'
    else:
        return (time_string)
    (min, secs) = time_string.split(splitter)
    return (min + '.' + secs)


def get_coach_data(filename):
    try:
        with open(filename) as f:
            data = f.read()
            tmp = data.strip().split(',')
        return (Athlete(tmp.pop(0), tmp.pop(0), tmp))
    except IOError as ioerr:
        print('File error: ' + str(ioerr))
        return (None)
