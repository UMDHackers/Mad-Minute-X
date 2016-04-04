from flask import Flask, url_for, request, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')
@app.route("/<section>/easy")
def easy(section):
    return render_template('test.html', section = section, level = "easy")
@app.route("/<section>/medium")
def medium(section):
    return render_template('test.html', section = section, level = "medium")
@app.route("/<section>/hard")
def hard(section):
    return render_template('test.html', section = section, level = "hard")
if __name__ == "__main__":
    app.run(debug=True)
