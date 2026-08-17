import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const API_URL = "http://127.0.0.1:8000";

function AdminDashboard() {
  // =========================================================
  // ENQUIRIES
  // =========================================================

  const [totalEnquiries, setTotalEnquiries] = useState(0);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================================================
  // TEACHERS
  // =========================================================

  const [teachers, setTeachers] = useState([]);
  const [teacherLoading, setTeacherLoading] = useState(true);
  const [showTeacherForm, setShowTeacherForm] = useState(false);
  const [editingTeacherId, setEditingTeacherId] = useState(null);

  const [teacherForm, setTeacherForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    qualification: "",
  });

  // =========================================================
  // EVENTS
  // =========================================================

  const [events, setEvents] = useState([]);
  const [eventLoading, setEventLoading] = useState(true);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);

  const [eventForm, setEventForm] = useState({
    title: "",
    category: "GENERAL",
    description: "",
    event_date: "",
  });

  // =========================================================
  // LOAD DATA
  // =========================================================

  useEffect(() => {
    fetchEnquiries();
    fetchEnquiryCount();
    fetchTeachers();
    fetchEvents();
  }, []);

  // =========================================================
  // ENQUIRIES
  // =========================================================

  const fetchEnquiries = async () => {
    try {
      const response = await fetch(
        `${API_URL}/admin/enquiries`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to fetch enquiries"
        );
      }

      setEnquiries(data);
    } catch (error) {
      console.error(
        "Error fetching enquiries:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchEnquiryCount = async () => {
    try {
      const response = await fetch(
        `${API_URL}/admin/enquiries/count`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to fetch enquiry count"
        );
      }

      setTotalEnquiries(
        data.total_enquiries
      );
    } catch (error) {
      console.error(
        "Error fetching enquiry count:",
        error
      );
    }
  };

  const handleDeleteEnquiry = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this enquiry?"
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/admin/enquiries/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to delete enquiry"
        );
      }

      setEnquiries((prev) =>
        prev.filter(
          (enquiry) => enquiry.id !== id
        )
      );

      setTotalEnquiries((prev) =>
        Math.max(0, prev - 1)
      );

      alert(
        "Enquiry deleted successfully!"
      );
    } catch (error) {
      console.error(
        "Error deleting enquiry:",
        error
      );

      alert(error.message);
    }
  };

  // =========================================================
  // TEACHERS
  // =========================================================

  const fetchTeachers = async () => {
    try {
      const response = await fetch(
        `${API_URL}/admin/teachers`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to fetch teachers"
        );
      }

      setTeachers(data);
    } catch (error) {
      console.error(
        "Error fetching teachers:",
        error
      );
    } finally {
      setTeacherLoading(false);
    }
  };

  const handleTeacherChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setTeacherForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetTeacherForm = () => {
    setTeacherForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      qualification: "",
    });

    setEditingTeacherId(null);
    setShowTeacherForm(false);
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/admin/teachers`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            teacherForm
          ),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to add teacher"
        );
      }

      alert(
        "Teacher added successfully!"
      );

      resetTeacherForm();
      fetchTeachers();
    } catch (error) {
      console.error(
        "Error adding teacher:",
        error
      );

      alert(error.message);
    }
  };

  const handleEditTeacher = (
    teacher
  ) => {
    setEditingTeacherId(
      teacher.id
    );

    setTeacherForm({
      name: teacher.name || "",
      email: teacher.email || "",
      phone: teacher.phone || "",
      subject:
        teacher.subject || "",
      qualification:
        teacher.qualification || "",
    });

    setShowTeacherForm(true);
  };

  const handleUpdateTeacher = async (
    e
  ) => {
    e.preventDefault();

    if (!editingTeacherId) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/admin/teachers/${editingTeacherId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            teacherForm
          ),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to update teacher"
        );
      }

      alert(
        "Teacher updated successfully!"
      );

      resetTeacherForm();
      fetchTeachers();
    } catch (error) {
      console.error(
        "Error updating teacher:",
        error
      );

      alert(error.message);
    }
  };

  const handleDeleteTeacher = async (
    id
  ) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this teacher?"
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/admin/teachers/${id}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to delete teacher"
        );
      }

      setTeachers((prev) =>
        prev.filter(
          (teacher) =>
            teacher.id !== id
        )
      );

      alert(
        "Teacher deleted successfully!"
      );
    } catch (error) {
      console.error(
        "Error deleting teacher:",
        error
      );

      alert(error.message);
    }
  };

  // =========================================================
  // EVENTS
  // =========================================================

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        `${API_URL}/admin/events`
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to fetch events"
        );
      }

      setEvents(data);
    } catch (error) {
      console.error(
        "Error fetching events:",
        error
      );
    } finally {
      setEventLoading(false);
    }
  };

  const handleEventChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setEventForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetEventForm = () => {
    setEventForm({
      title: "",
      category: "GENERAL",
      description: "",
      event_date: "",
    });

    setEditingEventId(null);
    setShowEventForm(false);
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/admin/events`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            eventForm
          ),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to add event"
        );
      }

      alert(
        "Event added successfully!"
      );

      resetEventForm();
      fetchEvents();
    } catch (error) {
      console.error(
        "Error adding event:",
        error
      );

      alert(error.message);
    }
  };

  const handleEditEvent = (
    event
  ) => {
    setEditingEventId(
      event.id
    );

    setEventForm({
      title: event.title || "",
      category:
        event.category || "GENERAL",
      description:
        event.description || "",
      event_date:
        event.event_date
          ? event.event_date.substring(
              0,
              10
            )
          : "",
    });

    setShowEventForm(true);
  };

  const handleUpdateEvent = async (
    e
  ) => {
    e.preventDefault();

    if (!editingEventId) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/admin/events/${editingEventId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            eventForm
          ),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to update event"
        );
      }

      alert(
        "Event updated successfully!"
      );

      resetEventForm();
      fetchEvents();
    } catch (error) {
      console.error(
        "Error updating event:",
        error
      );

      alert(error.message);
    }
  };

  const handleDeleteEvent = async (
    id
  ) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this event?"
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/admin/events/${id}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Failed to delete event"
        );
      }

      setEvents((prev) =>
        prev.filter(
          (event) =>
            event.id !== id
        )
      );

      alert(
        "Event deleted successfully!"
      );
    } catch (error) {
      console.error(
        "Error deleting event:",
        error
      );

      alert(error.message);
    }
  };

  // =========================================================
  // LOGOUT
  // =========================================================

  const handleLogout = () => {
    localStorage.removeItem(
      "admin_token"
    );

    window.location.href =
      "/admin-login";
  };

  // =========================================================
  // JSX
  // =========================================================

  return (
    <div className="admin-dashboard">

      {/* SIDEBAR */}

      <aside className="admin-sidebar">

        <div className="admin-brand">

          <div className="admin-brand-logo">
            NE
          </div>

          <div>
            <h2>NEW ERA</h2>
            <span>ADMIN PANEL</span>
          </div>

        </div>

        <nav className="admin-menu">

          <a href="#dashboard">
            Dashboard
          </a>

          <a href="#enquiries">
            Enquiries
          </a>

          <a href="#teachers">
            Teachers
          </a>

          <a href="#events">
            Events
          </a>

        </nav>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}

      <main
        className="admin-content"
        id="dashboard"
      >

        {/* HEADER */}

        <div className="admin-header">

          <div>

            <p>ADMIN PANEL</p>

            <h1>
              Dashboard
            </h1>

          </div>

          <span className="admin-status">
            ● Admin
          </span>

        </div>

        {/* STAT CARDS */}

        <section className="admin-stats">

          <div className="admin-stat-card">

            <span>
              Total Enquiries
            </span>

            <strong>
              {totalEnquiries}
            </strong>

          </div>

          <div className="admin-stat-card">

            <span>
              Total Teachers
            </span>

            <strong>
              {teachers.length}
            </strong>

          </div>

          <div className="admin-stat-card">

            <span>
              Total Events
            </span>

            <strong>
              {events.length}
            </strong>

          </div>

        </section>

        {/* WELCOME */}

        <section className="admin-welcome">

          <p>
            WELCOME TO THE ADMIN PANEL
          </p>

          <h2>
            Manage New Era Public School
          </h2>

          <span>
            Use this dashboard to manage
            enquiries, teachers and school
            events.
          </span>

        </section>

        {/* =====================================================
            ENQUIRIES
        ===================================================== */}

        <section
          className="admin-enquiries"
          id="enquiries"
        >

          <div className="section-header">

            <div>

              <p>
                RECENT SUBMISSIONS
              </p>

              <h2>
                Enquiries
              </h2>

            </div>

            <span>
              {enquiries.length} Total
            </span>

          </div>

          {loading ? (

            <p className="no-enquiries">
              Loading enquiries...
            </p>

          ) : (

            <div className="table-container">

              <table className="enquiries-table">

                <thead>

                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>

                  {enquiries.length > 0 ? (

                    enquiries.map(
                      (enquiry) => (

                        <tr
                          key={
                            enquiry.id
                          }
                        >

                          <td>
                            {enquiry.name}
                          </td>

                          <td>
                            {enquiry.email}
                          </td>

                          <td>
                            {enquiry.phone}
                          </td>

                          <td>
                            {enquiry.subject}
                          </td>

                          <td>
                            {enquiry.message}
                          </td>

                          <td>
                            {enquiry.created_at
                              ? new Date(
                                  enquiry.created_at
                                ).toLocaleDateString(
                                  "en-IN"
                                )
                              : "-"}
                          </td>

                          <td>

                            <button
                              className="delete-btn"
                              onClick={() =>
                                handleDeleteEnquiry(
                                  enquiry.id
                                )
                              }
                            >
                              Delete
                            </button>

                          </td>

                        </tr>

                      )
                    )

                  ) : (

                    <tr>

                      <td
                        colSpan="7"
                        className="no-enquiries"
                      >
                        No enquiries found.
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          )}

        </section>

        {/* =====================================================
            TEACHERS
        ===================================================== */}

        <section
          className="admin-enquiries"
          id="teachers"
        >

          <div className="section-header">

            <div>

              <p>
                TEACHER MANAGEMENT
              </p>

              <h2>
                Teachers
              </h2>

            </div>

            <button
              className="add-student-btn"
              onClick={() => {

                if (
                  showTeacherForm
                ) {

                  resetTeacherForm();

                } else {

                  setEditingTeacherId(
                    null
                  );

                  setTeacherForm({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    qualification:
                      "",
                  });

                  setShowTeacherForm(
                    true
                  );

                }

              }}
            >
              {showTeacherForm
                ? "Cancel"
                : "+ Add Teacher"}
            </button>

          </div>

          {showTeacherForm && (

            <form
              className="student-form"
              onSubmit={
                editingTeacherId
                  ? handleUpdateTeacher
                  : handleAddTeacher
              }
            >

              <div className="student-form-grid">

                <input
                  type="text"
                  name="name"
                  placeholder="Teacher Name"
                  value={
                    teacherForm.name
                  }
                  onChange={
                    handleTeacherChange
                  }
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={
                    teacherForm.email
                  }
                  onChange={
                    handleTeacherChange
                  }
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={
                    teacherForm.phone
                  }
                  onChange={
                    handleTeacherChange
                  }
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={
                    teacherForm.subject
                  }
                  onChange={
                    handleTeacherChange
                  }
                  required
                />

                <input
                  type="text"
                  name="qualification"
                  placeholder="Qualification"
                  value={
                    teacherForm.qualification
                  }
                  onChange={
                    handleTeacherChange
                  }
                  required
                />

              </div>

              <button
                type="submit"
                className="save-student-btn"
              >
                {editingTeacherId
                  ? "Update Teacher"
                  : "Save Teacher"}
              </button>

            </form>

          )}

          {teacherLoading ? (

            <p className="no-enquiries">
              Loading teachers...
            </p>

          ) : (

            <div className="table-container">

              <table className="enquiries-table">

                <thead>

                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Qualification</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>

                  {teachers.length > 0 ? (

                    teachers.map(
                      (teacher) => (

                        <tr
                          key={
                            teacher.id
                          }
                        >

                          <td>
                            {teacher.name}
                          </td>

                          <td>
                            {teacher.email ||
                              "-"}
                          </td>

                          <td>
                            {teacher.phone ||
                              "-"}
                          </td>

                          <td>
                            {teacher.subject}
                          </td>

                          <td>
                            {
                              teacher.qualification
                            }
                          </td>

                          <td>

                            <button
                              className="edit-btn"
                              onClick={() =>
                                handleEditTeacher(
                                  teacher
                                )
                              }
                            >
                              Edit
                            </button>

                            <button
                              className="delete-btn"
                              onClick={() =>
                                handleDeleteTeacher(
                                  teacher.id
                                )
                              }
                            >
                              Delete
                            </button>

                          </td>

                        </tr>

                      )
                    )

                  ) : (

                    <tr>

                      <td
                        colSpan="6"
                        className="no-enquiries"
                      >
                        No teachers found.
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          )}

        </section>

        {/* =====================================================
            EVENTS
        ===================================================== */}

        <section
          className="admin-enquiries"
          id="events"
        >

          <div className="section-header">

            <div>

              <p>
                EVENT MANAGEMENT
              </p>

              <h2>
                School Events
              </h2>

            </div>

            <button
              className="add-student-btn"
              onClick={() => {

                if (
                  showEventForm
                ) {

                  resetEventForm();

                } else {

                  setEditingEventId(
                    null
                  );

                  setEventForm({
                    title: "",
                    category:
                      "GENERAL",
                    description:
                      "",
                    event_date:
                      "",
                  });

                  setShowEventForm(
                    true
                  );

                }

              }}
            >
              {showEventForm
                ? "Cancel"
                : "+ Add Event"}
            </button>

          </div>

          {showEventForm && (

            <form
              className="student-form"
              onSubmit={
                editingEventId
                  ? handleUpdateEvent
                  : handleAddEvent
              }
            >

              <div className="student-form-grid">

                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  value={
                    eventForm.title
                  }
                  onChange={
                    handleEventChange
                  }
                  required
                />

                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={
                    eventForm.category
                  }
                  onChange={
                    handleEventChange
                  }
                  required
                />

                <input
                  type="date"
                  name="event_date"
                  value={
                    eventForm.event_date
                  }
                  onChange={
                    handleEventChange
                  }
                  required
                />

                <textarea
                  name="description"
                  placeholder="Event Description"
                  value={
                    eventForm.description
                  }
                  onChange={
                    handleEventChange
                  }
                  required
                />

              </div>

              <button
                type="submit"
                className="save-student-btn"
              >
                {editingEventId
                  ? "Update Event"
                  : "Save Event"}
              </button>

            </form>

          )}

          {eventLoading ? (

            <p className="no-enquiries">
              Loading events...
            </p>

          ) : (

            <div className="table-container">

              <table className="enquiries-table">

                <thead>

                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>

                  {events.length > 0 ? (

                    events.map(
                      (event) => (

                        <tr
                          key={
                            event.id
                          }
                        >

                          <td>
                            {event.title}
                          </td>

                          <td>
                            {event.category}
                          </td>

                          <td>
                            {event.description}
                          </td>

                          <td>
                            {event.event_date
                              ? new Date(
                                  event.event_date
                                ).toLocaleDateString(
                                  "en-IN"
                                )
                              : "-"}
                          </td>

                          <td>

                            <button
                              className="edit-btn"
                              onClick={() =>
                                handleEditEvent(
                                  event
                                )
                              }
                            >
                              Edit
                            </button>

                            <button
                              className="delete-btn"
                              onClick={() =>
                                handleDeleteEvent(
                                  event.id
                                )
                              }
                            >
                              Delete
                            </button>

                          </td>

                        </tr>

                      )
                    )

                  ) : (

                    <tr>

                      <td
                        colSpan="5"
                        className="no-enquiries"
                      >
                        No events found.
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          )}

        </section>

        {/* =====================================================
            QUICK ACTIONS
        ===================================================== */}

        <section className="quick-actions">

          <h2>
            Quick Actions
          </h2>

          <div className="quick-action-grid">

            <div className="quick-action">

              <span>📩</span>

              <h3>
                View Enquiries
              </h3>

              <p>
                Check and manage enquiries
                submitted through the website.
              </p>

            </div>

            <div className="quick-action">

              <span>👨‍🏫</span>

              <h3>
                Manage Teachers
              </h3>

              <p>
                Add and update teacher
                information.
              </p>

            </div>

            <div className="quick-action">

              <span>📅</span>

              <h3>
                Manage Events
              </h3>

              <p>
                Add, edit and delete
                school events.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;