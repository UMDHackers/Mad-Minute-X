from flask import Flask, url_for, request, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')
@app.route("/<section>/easy")
def easy(section):
    if section == "add":
        return "easy"
    elif section == "subtract":
        return "easy"
    elif section == "mulitplication":
        return "easy"
    elif section == "division":
        return "easy"
@app.route("/<section>/medium")
def medium(section):
    if section == "add":
        return "medium"
    elif section == "subtract":
        return "medium"
    elif section == "mulitplication":
        return "medium"
    elif section == "division":
        return "medium"
@app.route("/<section>/hard")
def hard(section):
    if section == "add":
        return "hard"
    elif section == "subtract":
        return "hard"
    elif section == "mulitplication":
        return "hard"
    elif section == "division":
        return "hard"
if __name__ == "__main__":
    app.run(debug=True)
