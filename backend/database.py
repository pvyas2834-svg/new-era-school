import mysql.connector


def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Prachi@2106",
        database="new_era_school"
    )


print("Database configuration ready!")