import React, { useEffect, useState } from "react";
import "./Events.css";

const API_URL = "https://new-era-school.onrender.com";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/admin/events`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to fetch events");
      }

      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) {
      return {
        day: "-",
        month: "-",
      };
    }

    const d = new Date(date);

    return {
      day: d.getDate().toString().padStart(2, "0"),
      month: d
        .toLocaleDateString("en-IN", {
          month: "short",
        })
        .toUpperCase(),
    };
  };

  return (
    <div className="events-page">

      {/* ================= HERO ================= */}
      <section className="events-banner">
        <div className="events-banner-content">
          <p>SCHOOL EVENTS</p>

          <h1>School Events</h1>

          <span>
            See the events and activities happening at our school.
          </span>

          <div className="banner-line"></div>
        </div>

        <div className="banner-circle circle-one"></div>
        <div className="banner-circle circle-two"></div>
        <div className="banner-dot dot-one"></div>
        <div className="banner-dot dot-two"></div>
      </section>


      {/* ================= EVENTS ================= */}
      <section className="events-section">

        <div className="events-heading">
          <p>EVENTS & ACTIVITIES</p>

          <h2>What's Happening at Our School</h2>

          <div className="heading-line"></div>

          <span>
            Stay updated with important school events, celebrations and activities.
          </span>
        </div>


        {loading ? (
          <div className="events-message loading-message">
            <div className="loading-spinner"></div>
            <p>Loading events...</p>
          </div>

        ) : events.length === 0 ? (

          <div className="events-message empty-message">
            <div className="empty-icon">📅</div>
            <h3>No Events Available</h3>
            <p>New school events will be displayed here.</p>
          </div>

        ) : (

          <div className="events-grid">

            {events.map((event, index) => {

              const date = formatDate(event.event_date);

              return (
                <div
                  className="event-card"
                  key={event.id}
                  style={{
                    "--delay": `${index * 0.12}s`,
                  }}
                >

                  {/* TOP ACCENT */}
                  <div className="event-card-accent"></div>


                  {/* DATE */}
                  <div className="event-date">
                    <strong>{date.day}</strong>
                    <span>{date.month}</span>
                  </div>


                  {/* ICON */}
                  <div className="event-icon">
                    <span>📅</span>
                  </div>


                  {/* CONTENT */}
                  <div className="event-content">

                    <span className="event-category">
                      {event.category || "SCHOOL EVENT"}
                    </span>

                    <h3>
                      {event.title}
                    </h3>

                    <p>
                      {event.description}
                    </p>

                  </div>


                  {/* ARROW */}
                  <div className="event-arrow">
                    →
                  </div>

                </div>
              );
            })}

          </div>
        )}

      </section>

    </div>
  );
}

export default Events;