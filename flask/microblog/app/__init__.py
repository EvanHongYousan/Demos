__author__ = 'yantianyu'
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')
<<<<<<< Updated upstream
db = SQLAlchemy(app)
from app import views, models
=======
from app import views
>>>>>>> Stashed changes
