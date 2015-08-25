__author__ = 'yantianyu'
import pickle
from chapter7.athletelist import AthleteList


def get_coach_data(filename):
    pass


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
    return all_athletes
