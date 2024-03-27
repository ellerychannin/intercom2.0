from flask import Flask, render_template

app = Flask(__name__)

@app.route('home')
def home():
    return render_template('home.html')

@app.route('political')
def political():
    return render_template('political.html')

@app.route('social_political')
def social_political():
    return render_template('social_political.html')

@app.route('social')
def social():
    return render_template('social.html')
