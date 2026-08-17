import React from "react";
import "./Gallery.css";

function Gallery() {
  const galleryImages = [
    {
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      title: "Classroom Activities",
      category: "ACADEMICS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
      title: "School Campus",
      category: "CAMPUS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
      title: "Students Learning",
      category: "STUDENTS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
      title: "School Activities",
      category: "ACTIVITIES",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1000&q=80",
      title: "Annual Function",
      category: "EVENTS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80",
      title: "Learning Together",
      category: "ACADEMICS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
      title: "School Life",
      category: "CAMPUS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1000&q=80",
      title: "Student Activities",
      category: "ACTIVITIES",
    },
  ];

  return (
    <div className="gallery-page">

      {/* HERO */}
      <section className="gallery-banner">
        <div className="gallery-banner-content">
          <p>OUR GALLERY</p>

          <h1>School Life in Pictures</h1>

          <span>
            A glimpse of learning, activities and special moments at
            New Era Public School.
          </span>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">

        <div className="gallery-heading">
          <p>MEMORIES OF OUR SCHOOL</p>

          <h2>School Gallery</h2>

          <div className="gallery-line"></div>
        </div>

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (
            <div className="gallery-card" key={index}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <span>{item.category}</span>

                <h3>{item.title}</h3>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Gallery;