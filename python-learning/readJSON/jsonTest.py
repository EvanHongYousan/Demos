__author__ = 'yantianyu'
import json

a = {
    "a": 1,
    "b": 2
}

json_str = json.dumps(a)

print(json_str)

json_str = json.loads(json_str)

print(json_str)
