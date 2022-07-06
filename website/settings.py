# base modules
import os

# external modules
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

FLASK_APP_SECRET = os.environ['FLASK_APP_SECRET']
engine = create_engine(os.environ['SQL_CONNECTION'], echo=False, future=True)

Session = sessionmaker(engine)
