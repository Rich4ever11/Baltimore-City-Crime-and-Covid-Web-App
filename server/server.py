from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import json
import uuid

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///CrimeAndCovid.db"
#initialize database
db = SQLAlchemy(app)

#create db model
class Crime(db.Model):
    crimeID = db.Column(db.String(200), primary_key=True)
    CrimeDateTime = db.Column(db.String(200), nullable=True)
    CrimeCode = db.Column(db.String(200), nullable=True)
    Location = db.Column(db.String(200), nullable=True)
    Description = db.Column(db.String(200), nullable=True)
    Weapon = db.Column(db.String(200), nullable=True)
    Gender = db.Column(db.String(200), nullable=True)
    Age = db.Column(db.String(200), nullable=True)
    Race = db.Column(db.String(200), nullable=True)
    Ethnicity = db.Column(db.String(200), nullable=True)
    District = db.Column(db.String(200), nullable=True)
    Neighborhood = db.Column(db.String(200), nullable=True)
    Latitude = db.Column(db.Integer, nullable=True)
    Longitude = db.Column(db.Integer, nullable=True)

    def __repr__(self):
        return '<Crime %r>' % self.crimeID

class Covid(db.Model):
    covidID = db.Column(db.String(200), primary_key=True)
    covidDate = db.Column(db.String(200), nullable=False)
    covidCount = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return '<Covid %r>' % self.covidID

def getDictionaryObject(dbObjectStructure, listName, objectIDName):
    responseObject = {listName: []}
    for u in dbObjectStructure.query.all():
        dbObjDict = u.__dict__
        del dbObjDict['_sa_instance_state']
        if not any(obj[objectIDName] == dbObjDict[objectIDName] for obj in responseObject[listName]):
            responseObject[listName].append(dbObjDict)
    return responseObject


crimeObj = {"crimeList": []}
covidObj = {"covidList": []}

@app.route('/crime', methods=["GET", "POST", "DELETE", "PUT"], strict_slashes=False)
def crime():
    if (request.method == 'GET'):
        return getDictionaryObject(Crime, "crimeList", "crimeID")

@app.route('/covid', methods=["GET", "POST", "DELETE", "PUT"], strict_slashes=False)
def covid():
    if (request.method == "GET"):
        return getDictionaryObject(Covid, "covidList", "covidID")

if __name__ == '__main__':
    app.run(debug=True)
