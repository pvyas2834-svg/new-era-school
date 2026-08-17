import mysql.connector
from passlib.context import CryptContext


# Password hashing
pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def hash_password(password):
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(
        plain_password,
        hashed_password
    )


# Create admin account
if __name__ == "__main__":

    username = input("Enter admin username: ")
    password = input("Enter admin password: ")

    hashed_password = hash_password(password)

    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Prachi@2106",
        database="new_era_school"
    )

    cursor = db.cursor()

    query = """
    INSERT INTO admins (username, password_hash)
    VALUES (%s, %s)
    """

    cursor.execute(
        query,
        (username, hashed_password)
    )

    db.commit()

    cursor.close()
    db.close()

    print("Admin account created successfully!")