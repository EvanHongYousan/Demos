__author__ = 'yantianyu'

import mysql.connector


def get_db(db_name):
    return mysql.connector.connect(host="192.168.0.199",
                                   user='reader',
                                   passwd='111111',
                                   db=db_name,
                                   port=3306)


def get_conn():
    return get_db("call_stat")
