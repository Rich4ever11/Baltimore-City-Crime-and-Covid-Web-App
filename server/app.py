from server import db
from server import Crime
from server import Covid
import json
import uuid

covidFile = open('/home/rich4life/Documents/UMBC - Courses/2022-2023/Fall - 2022/CMSC 447 - Software Engineering I/Project/server/BaltimoreCityCovidData.json', 'r')
crimeFile = open('/home/rich4life/Documents/UMBC - Courses/2022-2023/Fall - 2022/CMSC 447 - Software Engineering I/Project/server/BaltimoreCityCrimeData.json', 'r')
db.create_all()

crimeData = json.load(crimeFile)
covidData = json.load(covidFile)

for section in crimeData["features"]:
    newCrimeID = section["properties"]["RowID"]
    newCrimeDate = section["properties"]["CrimeDateTime"]
    newCrimeCode = section["properties"]["CrimeCode"]
    newCrimeLocation = section["properties"]["Location"]
    newCrimeDescription = section["properties"]["Description"]
    newCrimeWeapon = section["properties"]["Weapon"]
    newCrimeGender = section["properties"]["Gender"]
    newCrimeAge = section["properties"]["Age"]
    newCrimeRace = section["properties"]["Race"]
    newCrimeEthnicity = section["properties"]["Ethnicity"]
    newCrimeDistrict = section["properties"]["District"]
    newCrimeNeighborhood = section["properties"]["Neighborhood"]
    newCrimeLatitude = section["properties"]["Latitude"]
    newCrimeLongitude = section["properties"]["Longitude"]

    newCrime = Crime(crimeID=newCrimeID, 
    CrimeDateTime=newCrimeDate, 
    CrimeCode=newCrimeCode,
    Location=newCrimeLocation, 
    Description = newCrimeDescription,
    Weapon = newCrimeWeapon,
    Gender = newCrimeGender,
    Age = newCrimeAge,
    Race = newCrimeRace,
    Ethnicity = newCrimeEthnicity,
    District = newCrimeDistrict,
    Neighborhood = newCrimeNeighborhood,
    Latitude = newCrimeLatitude,
    Longitude = newCrimeLongitude
    )
    
    try:
        db.session.add(newCrime)
        db.session.commit()
    except:
        db.session.rollback()

for section in covidData:
    newCovidID = section["OBJECTID"]
    newCovidDate = section["DATE"]
    newCovidCount = section["Baltimore_City"]
    
    newCovid = Covid(covidID=newCovidID, 
    covidDate=newCovidDate, 
    covidCount=newCovidCount)

    try:
        db.session.add(newCovid)
        db.session.commit()
    except:
        db.session.rollback()

exit()