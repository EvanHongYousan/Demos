__author__ = 'yantianyu'
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
from flask_wtf import Form
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired


class LoginForm(Form):
    openid = StringField('openid', validators=[DataRequired()])
<<<<<<< Updated upstream
    remember_me = BooleanField('remember_me', default=False)
=======
    remember_me = BooleanField('remember_me', default=False)
>>>>>>> Stashed changes
