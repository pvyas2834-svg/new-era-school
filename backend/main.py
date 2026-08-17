from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import get_db
from passlib.context import CryptContext
from jose import jwt

app = FastAPI()

# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================================================
# PASSWORD SECURITY
# =========================================================

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

SECRET_KEY = "new-era-school-secret-key"
ALGORITHM = "HS256"

# =========================================================
# DATA MODELS
# =========================================================

class Enquiry(BaseModel):
    name: str
    email: str
    phone: str
    subject: str
    message: str


class Student(BaseModel):
    name: str
    email: str
    phone: str
    class_name: str
    section: str
    roll_number: str


class Teacher(BaseModel):
    name: str
    email: str
    phone: str
    subject: str
    qualification: str


class Event(BaseModel):
    title: str
    category: str
    description: str
    event_date: str


class AdminLogin(BaseModel):
    username: str
    password: str


# =========================================================
# HOME
# =========================================================

@app.get("/")
def home():
    return {
        "message": "New Era Public School Backend is running"
    }


# =========================================================
# ENQUIRIES
# =========================================================

@app.post("/enquiries")
def create_enquiry(enquiry: Enquiry):

    try:
        db = get_db()
        cursor = db.cursor()

        query = """
            INSERT INTO enquiries
            (name, email, phone, subject, message)
            VALUES (%s, %s, %s, %s, %s)
        """

        values = (
            enquiry.name,
            enquiry.email,
            enquiry.phone,
            enquiry.subject,
            enquiry.message
        )

        cursor.execute(query, values)
        db.commit()

        cursor.close()
        db.close()

        return {
            "message": "Enquiry submitted successfully"
        }

    except Exception as e:
        print("ERROR IN CREATE ENQUIRY:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================================================
# ADMIN LOGIN
# =========================================================

@app.post("/admin/login")
def admin_login(admin: AdminLogin):

    try:
        db = get_db()
        cursor = db.cursor(dictionary=True)

        query = """
            SELECT id, username, password_hash
            FROM admins
            WHERE username = %s
        """

        cursor.execute(query, (admin.username,))
        user = cursor.fetchone()

        cursor.close()
        db.close()

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Invalid username or password"
            )

        password_correct = pwd_context.verify(
            admin.password,
            user["password_hash"]
        )

        if not password_correct:
            raise HTTPException(
                status_code=401,
                detail="Invalid username or password"
            )

        token = jwt.encode(
            {
                "admin_id": user["id"],
                "username": user["username"]
            },
            SECRET_KEY,
            algorithm=ALGORITHM
        )

        return {
            "message": "Login successful",
            "access_token": token
        }

    except HTTPException:
        raise

    except Exception as e:
        print("ERROR IN ADMIN LOGIN:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================================================
# ENQUIRY COUNT
# =========================================================

@app.get("/admin/enquiries/count")
def get_enquiry_count():

    try:
        db = get_db()
        cursor = db.cursor()

        cursor.execute(
            "SELECT COUNT(*) FROM enquiries"
        )

        result = cursor.fetchone()

        cursor.close()
        db.close()

        return {
            "total_enquiries": result[0]
        }

    except Exception as e:
        print("ERROR IN ENQUIRY COUNT:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================================================
# GET ALL ENQUIRIES
# =========================================================

@app.get("/admin/enquiries")
def get_enquiries():

    try:
        db = get_db()
        cursor = db.cursor(dictionary=True)

        cursor.execute("""
            SELECT
                id,
                name,
                email,
                phone,
                subject,
                message,
                created_at
            FROM enquiries
            ORDER BY id DESC
        """)

        enquiries = cursor.fetchall()

        cursor.close()
        db.close()

        return enquiries

    except Exception as e:
        print("ERROR IN GET ENQUIRIES:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================================================
# DELETE ENQUIRY
# =========================================================

@app.delete("/admin/enquiries/{enquiry_id}")
def delete_enquiry(enquiry_id: int):

    try:
        db = get_db()
        cursor = db.cursor()

        cursor.execute(
            "DELETE FROM enquiries WHERE id = %s",
            (enquiry_id,)
        )

        db.commit()

        deleted_rows = cursor.rowcount

        cursor.close()
        db.close()

        if deleted_rows == 0:
            raise HTTPException(
                status_code=404,
                detail="Enquiry not found"
            )

        return {
            "message": "Enquiry deleted successfully"
        }

    except HTTPException:
        raise

    except Exception as e:
        print("ERROR IN DELETE ENQUIRY:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================================================
# STUDENTS
# =========================================================

@app.get("/admin/students/count")
def get_student_count():

    try:
        db = get_db()
        cursor = db.cursor()

        cursor.execute(
            "SELECT COUNT(*) FROM students"
        )

        result = cursor.fetchone()

        cursor.close()
        db.close()

        return {
            "total_students": result[0]
        }

    except Exception as e:
        print("ERROR IN STUDENT COUNT:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.get("/admin/students")
def get_students():

    try:
        db = get_db()
        cursor = db.cursor(dictionary=True)

        cursor.execute("""
            SELECT
                id,
                name,
                email,
                phone,
                class_name,
                section,
                roll_number,
                created_at
            FROM students
            ORDER BY id DESC
        """)

        students = cursor.fetchall()

        cursor.close()
        db.close()

        return students

    except Exception as e:
        print("ERROR IN GET STUDENTS:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.post("/admin/students")
def add_student(student: Student):

    try:
        db = get_db()
        cursor = db.cursor()

        query = """
            INSERT INTO students
            (
                name,
                email,
                phone,
                class_name,
                section,
                roll_number
            )
            VALUES (%s, %s, %s, %s, %s, %s)
        """

        values = (
            student.name,
            student.email,
            student.phone,
            student.class_name,
            student.section,
            student.roll_number
        )

        cursor.execute(query, values)
        db.commit()

        cursor.close()
        db.close()

        return {
            "message": "Student added successfully"
        }

    except Exception as e:
        print("ERROR IN ADD STUDENT:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.put("/admin/students/{student_id}")
def update_student(
    student_id: int,
    student: Student
):

    try:
        db = get_db()
        cursor = db.cursor()

        query = """
            UPDATE students
            SET
                name = %s,
                email = %s,
                phone = %s,
                class_name = %s,
                section = %s,
                roll_number = %s
            WHERE id = %s
        """

        values = (
            student.name,
            student.email,
            student.phone,
            student.class_name,
            student.section,
            student.roll_number,
            student_id
        )

        cursor.execute(query, values)
        db.commit()

        updated_rows = cursor.rowcount

        cursor.close()
        db.close()

        if updated_rows == 0:
            raise HTTPException(
                status_code=404,
                detail="Student not found"
            )

        return {
            "message": "Student updated successfully"
        }

    except HTTPException:
        raise

    except Exception as e:
        print("ERROR IN UPDATE STUDENT:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.delete("/admin/students/{student_id}")
def delete_student(student_id: int):

    try:
        db = get_db()
        cursor = db.cursor()

        cursor.execute(
            "DELETE FROM students WHERE id = %s",
            (student_id,)
        )

        db.commit()

        deleted_rows = cursor.rowcount

        cursor.close()
        db.close()

        if deleted_rows == 0:
            raise HTTPException(
                status_code=404,
                detail="Student not found"
            )

        return {
            "message": "Student deleted successfully"
        }

    except HTTPException:
        raise

    except Exception as e:
        print("ERROR IN DELETE STUDENT:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================================================
# TEACHERS
# =========================================================

@app.get("/admin/teachers")
def get_teachers():

    try:
        db = get_db()
        cursor = db.cursor(dictionary=True)

        cursor.execute("""
            SELECT
                id,
                name,
                email,
                phone,
                subject,
                qualification,
                created_at
            FROM teachers
            ORDER BY id DESC
        """)

        teachers = cursor.fetchall()

        cursor.close()
        db.close()

        return teachers

    except Exception as e:
        print("ERROR IN GET TEACHERS:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.post("/admin/teachers")
def add_teacher(teacher: Teacher):

    try:
        db = get_db()
        cursor = db.cursor()

        query = """
            INSERT INTO teachers
            (
                name,
                email,
                phone,
                subject,
                qualification
            )
            VALUES (%s, %s, %s, %s, %s)
        """

        values = (
            teacher.name,
            teacher.email,
            teacher.phone,
            teacher.subject,
            teacher.qualification
        )

        cursor.execute(query, values)
        db.commit()

        cursor.close()
        db.close()

        return {
            "message": "Teacher added successfully"
        }

    except Exception as e:
        print("ERROR IN ADD TEACHER:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.put("/admin/teachers/{teacher_id}")
def update_teacher(
    teacher_id: int,
    teacher: Teacher
):

    try:
        db = get_db()
        cursor = db.cursor()

        query = """
            UPDATE teachers
            SET
                name = %s,
                email = %s,
                phone = %s,
                subject = %s,
                qualification = %s
            WHERE id = %s
        """

        values = (
            teacher.name,
            teacher.email,
            teacher.phone,
            teacher.subject,
            teacher.qualification,
            teacher_id
        )

        cursor.execute(query, values)
        db.commit()

        updated_rows = cursor.rowcount

        cursor.close()
        db.close()

        if updated_rows == 0:
            raise HTTPException(
                status_code=404,
                detail="Teacher not found"
            )

        return {
            "message": "Teacher updated successfully"
        }

    except HTTPException:
        raise

    except Exception as e:
        print("ERROR IN UPDATE TEACHER:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.delete("/admin/teachers/{teacher_id}")
def delete_teacher(teacher_id: int):

    try:
        db = get_db()
        cursor = db.cursor()

        cursor.execute(
            "DELETE FROM teachers WHERE id = %s",
            (teacher_id,)
        )

        db.commit()

        deleted_rows = cursor.rowcount

        cursor.close()
        db.close()

        if deleted_rows == 0:
            raise HTTPException(
                status_code=404,
                detail="Teacher not found"
            )

        return {
            "message": "Teacher deleted successfully"
        }

    except HTTPException:
        raise

    except Exception as e:
        print("ERROR IN DELETE TEACHER:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# =========================================================
# EVENTS
# =========================================================

@app.get("/admin/events/count")
def get_event_count():

    try:
        db = get_db()
        cursor = db.cursor()

        cursor.execute("SELECT COUNT(*) FROM events")
        result = cursor.fetchone()

        cursor.close()
        db.close()

        return {
            "total_events": result[0]
        }

    except Exception as e:
        print("ERROR IN EVENT COUNT:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.get("/admin/events")
def get_events():

    try:
        db = get_db()
        cursor = db.cursor(dictionary=True)

        cursor.execute("""
            SELECT
                id,
                title,
                category,
                description,
                event_date,
                created_at
            FROM events
            ORDER BY event_date ASC, id DESC
        """)

        events = cursor.fetchall()

        cursor.close()
        db.close()

        return events

    except Exception as e:
        print("ERROR IN GET EVENTS:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.post("/admin/events")
def add_event(event: Event):

    try:
        db = get_db()
        cursor = db.cursor()

        query = """
            INSERT INTO events
            (
                title,
                category,
                description,
                event_date
            )
            VALUES (%s, %s, %s, %s)
        """

        values = (
            event.title,
            event.category,
            event.description,
            event.event_date
        )

        cursor.execute(query, values)
        db.commit()

        cursor.close()
        db.close()

        return {
            "message": "Event added successfully"
        }

    except Exception as e:
        print("ERROR IN ADD EVENT:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.put("/admin/events/{event_id}")
def update_event(
    event_id: int,
    event: Event
):

    try:
        db = get_db()
        cursor = db.cursor()

        query = """
            UPDATE events
            SET
                title = %s,
                category = %s,
                description = %s,
                event_date = %s
            WHERE id = %s
        """

        values = (
            event.title,
            event.category,
            event.description,
            event.event_date,
            event_id
        )

        cursor.execute(query, values)
        db.commit()

        updated_rows = cursor.rowcount

        cursor.close()
        db.close()

        if updated_rows == 0:
            raise HTTPException(
                status_code=404,
                detail="Event not found"
            )

        return {
            "message": "Event updated successfully"
        }

    except HTTPException:
        raise

    except Exception as e:
        print("ERROR IN UPDATE EVENT:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.delete("/admin/events/{event_id}")
def delete_event(event_id: int):

    try:
        db = get_db()
        cursor = db.cursor()

        cursor.execute(
            "DELETE FROM events WHERE id = %s",
            (event_id,)
        )

        db.commit()

        deleted_rows = cursor.rowcount

        cursor.close()
        db.close()

        if deleted_rows == 0:
            raise HTTPException(
                status_code=404,
                detail="Event not found"
            )

        return {
            "message": "Event deleted successfully"
        }

    except HTTPException:
        raise

    except Exception as e:
        print("ERROR IN DELETE EVENT:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )