__author__ = 'yantianyu'
import pickle
from chapter7.athletelist import AthleteList


def get_coach_data(filename):
    try:
        with open(filename) as f:
            data = f.read()
            tmp = data.strip().split(',')
        return (AthleteList(tmp.pop(0), tmp.pop(0), tmp))
    except IOError as ioerr:
        print('File error: ' + str(ioerr))
        return (None)

def put_to_store(file_list):
    all_athletes = {}
    for each_file in file_list:
        ath = get_coach_data(each_file)
        all_athletes[ath.name] = ath
    try:
        with open('athletes.pickle', 'wb') as athf:
            pickle.dump(all_athletes, athf)
    except IOError as ioerr:
        print('File error( put_and_store ):' + str(ioerr))
    return all_athletes


def get_from_store():
    all_athletes = {}
    try:
        with open('athletes.pickle', 'rb') as athf:
            all_athletes = pickle.load(athf)
    except IOError as ioerr:
        print('File error (get_from_store): ' + str(ioerr))
    return all_athletes


the_files = ['james.txt', 'julie.txt', 'mikey.txt', 'sarah.txt']
data = put_to_store(the_files)
# print(data)
for each_athlete in data:
    # print(each_athlete)
    # print(data[each_athlete].name + ' ' + data[each_athlete].dob)
    print(data)