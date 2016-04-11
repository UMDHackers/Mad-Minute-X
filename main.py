from flask import Flask, url_for, request, render_template
from random import randint
app = Flask(__name__)
problems = []
first = 0
second = 0
solu = 0
@app.route("/")
def index():
    return render_template('index.html')
@app.route("/<section>/easy")
def easy(section):
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
    return render_template('test.html', section = section, level = "easy")
@app.route("/<section>/medium")
def medium(section):
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
    return render_template('test.html', section = section, level = "medium")
@app.route("/<section>/hard")
def hard(section):
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
    return render_template('test.html', section = section, level = "hard")
if __name__ == "__main__":
    app.run(debug=True)
