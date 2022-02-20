from datetime import datetime
# from flask import Flask, render_template, request, redirect, url_for
from flask import Flask, request, render_template, jsonify
app = Flask(__name__)

import pyodbc
server = 'my-usc-server.database.windows.net'
database = 'my-database'
username = 'adminserver'
password = 'myuscserver1!'   
driver= '{ODBC Driver 17 for SQL Server}'


@app.route("/", methods=['GET'])
def main():
    print('get into main func')
    return render_template("index.html")

# @app.route("/profile/<companyName>", methods=['GET'])
@app.route('/query/<queryCols>', methods=['GET'])
def queryDB(queryCols):
   print('enter queryDB')
   # indoor or outdoor
   has_or_rule = 'indoor' in queryCols and 'outdoor' in queryCols
   queryColElems = queryCols.split(' ')

   whereRule = ''
   for queryCol in queryColElems:
      if has_or_rule and (queryCol=='indoor' or queryCol=='outdoor'): continue
      whereRule = f"{queryCol}='true'" if not whereRule else f"{whereRule} and {queryCol}='true'"   
      
   if has_or_rule:
      # not only indoor and outdoor rule
      if len(queryColElems)!=2: 
         whereRule += ' and'
      whereRule += " NOT (indoor='false' and outdoor='false')"

   queryText = f"SELECT * FROM location where {whereRule}"
   print(f'queryText = {queryText}')

   with pyodbc.connect(f'DRIVER={driver};SERVER=tcp:{server};PORT=5000;DATABASE={database};UID={username};PWD={password}') as conn:
      with conn.cursor() as cursor:
         # cursor.execute("""SELECT * FROM location""")
         cursor.execute(queryText)
         # row = cursor.fetchone()
         # while row:
         #       print (str(row[0]) + " " + str(row[1]))
         #       row = cursor.fetchone()

         queryResult = [dict(zip([column[0] for column in cursor.description], row)) for row in cursor.fetchall()]
         print(queryResult)
         return jsonify(queryResult)
               

if __name__ == '__main__':
   app.run()