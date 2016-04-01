from flask import Flask, url_for, request, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')
@app.route("/<section>/easy")
def easy(section):
    if section == "add":
        return render_template
    elif section == "subtract":

    elif section == "mulitplication":

    elif section == "division":

@app.route("/<section>/medium")
def medium(section):
    if section == "add":
        return render_template
    elif section == "subtract":

    elif section == "mulitplication":

    elif section == "division":
@app.route("/<section>/hard")
def hard(section):
    if section == "add":
        return render_template
    elif section == "subtract":

    elif section == "mulitplication":

    elif section == "division":

if __name__ == "__main__":
    app.run(debug=True)
