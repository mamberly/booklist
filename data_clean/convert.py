import json
import pandas as pd

books_csv = pd.read_csv('books_small.csv')


def conv(columns, row):
    res = {}
    for i in range(len(columns)):
        res[columns[i]] = row[i]
    return res


cols = list(books_csv)
data = []
for index, row in books_csv.iterrows():
    data.append(conv(cols, row))


with open('books.json', 'w') as outfile:
    outfile.write(json.dumps(data))
