__author__ = 'yantianyu'

import mysql.connector
import sys

username = 'root'
password = ''
host = 'localhost'
db = 'test'

connection = mysql.connector.connect(user=username, password=password, host=host, database=db, port=3307)
cursor = connection.cursor()

sql = "SELECT * FROM test_x"

try:
    cursor.execute(sql)
    data = cursor.fetchall()
    print(len(data))
    for id in data:
        print(id)
except mysql.connector.Error as err:
    print("Failed to query table, detail: {}".format(err.msg))
    sys.exit()

connection.commit()
cursor.close()
connection.close()
