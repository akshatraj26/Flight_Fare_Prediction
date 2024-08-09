from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()



class FlightFare(db.Model):
    __tablename__ = 'flight_fare'
    id = db.Column(db.Integer, primary_key=True)
    departure_date = db.Column(db.DateTime, nullable=False)
    arrival_date = db.Column(db.DateTime, nullable=False)
    source = db.Column(db.String(32), nullable=False)
    destination = db.Column(db.String(56), nullable=False)
    stoppage = db.Column(db.String(18), nullable=False)
    airline = db.Column(db.String(64), nullable=False)
    prediction = db.Column(db.Float, nullable=False)
