import os
from flask import Flask, url_for, request, render_template, send_from_directory
from random import randint
app = Flask(__name__)
problems = []

first = 0
second = 0
solu = 0
@app.route("/")
def index():
    return render_template('index.html')
# @app.route('/favicon.ico')
# def favicon():
#     return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico', mimetype='image/vnd.microsoft.icon')
@app.route("/<section>/easy")
def easy(section):
    problems = []
    if(section == "add"):
        for i in range(0, 60):
            first = randint(1, 10)
            second = randint(1, 10)
            solu = first + second
            problems.append([first, second, solu])
    elif(section == "subtract"):
        for i in range(0, 60):
            first = randint(1, 10)
            second = randint(1, 10)
            solu = first - second
            problems.append([first, second, solu])
    elif(section == "division"):
        for i in range(0, 60):
            first = randint(1, 10)
            second = randint(1, 10)
            solu = first * second
            problems.append([solu, first, second])
    else:
        for i in range(0, 60):
            first = randint(1, 10)
            second = randint(1, 10)
            solu = first * second
            problems.append([first, second, solu])
    return render_template('test.html', section = section, level = "easy", problems = problems)
@app.route("/<section>/medium")
def medium(section):
    problems = []
    if(section == "add"):
        for i in range(0, 60):
            first = randint(1, 100)
            second = randint(1, 100)
            solu = first + second
            problems.append([first, second, solu])
    elif(section == "subtract"):
        for i in range(0, 60):
            first = randint(1, 100)
            second = randint(1, 100)
            solu = first - second
            problems.append([first, second, solu])
    elif(section == "division"):
        for i in range(0, 60):
            first = randint(1, 100)
            second = randint(1, 100)
            solu = first * second
            problems.append([solu, first, second])
    else:
        for i in range(0, 60):
            first = randint(1, 100)
            second = randint(1, 100)
            solu = first * second
            problems.append([first, second, solu])
    return render_template('test.html', section = section, level = "medium", problems = problems)
@app.route("/<section>/hard")
def hard(section):
    problems = []
    if(section == "add"):
        for i in range(0, 60):
            first = randint(1, 1000)
            second = randint(1, 1000)
            solu = first + second
            problems.append([first, second, solu])
    elif(section == "subtract"):
        for i in range(0, 60):
            first = randint(1, 1000)
            second = randint(1, 1000)
            solu = first - second
            problems.append([first, second, solu])
    elif(section == "division"):
        for i in range(0, 60):
            first = randint(1, 1000)
            second = randint(1, 1000)
            solu = first * second
            problems.append([solu, first, second])
    else:
        for i in range(0,60):
            first = randint(1, 1000)
            second = randint(1, 1000)
            solu = first * second
            problems.append([first, second, solu])
    return render_template('test.html', section = section, level = "hard", problems = problems)

@app.route("/results", methods = ['POST'])
def results():
    results = request.form['score'];
    return render_template('results.html', results = results)
if __name__ == "__main__":
    app.run(debug=True)
