import React from "react";
import "./Admissions.css";

function Admissions() {
  return (
    <div className="admissions-page">

      {/* ================= HERO ================= */}
      <section className="admissions-banner">
        <div className="admissions-banner-content">
          <p>ADMISSIONS</p>

          <h1>Begin Your Child's Journey With Us</h1>

          <span>
            A welcoming environment where every child can learn, grow and succeed.
          </span>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="admission-intro">

        <div className="admission-intro-text">
          <p className="admission-small-title">
            ADMISSION PROCESS
          </p>

          <h2>
            Take the First Step Towards a
            <span> Bright Future</span>
          </h2>

          <p>
            We welcome families who are looking for a caring, supportive
            and engaging learning environment for their children.
          </p>

          <p>
            Our admission process is designed to be simple and transparent,
            helping parents understand each stage before joining the school.
          </p>

          <button className="admission-main-btn">
            Enquire Now →
          </button>
        </div>


        <div className="admission-highlight">
          <div className="admission-highlight-icon">
            🎓
          </div>

          <h3>Admissions Open</h3>

          <p>
            Contact the school office to know about available classes,
            eligibility and admission requirements.
          </p>

          <button>
            Contact School →
          </button>
        </div>

      </section>


      {/* ================= HOW ADMISSION WORKS ================= */}
      <section className="admission-process">

        <div className="admission-heading">
          <p>HOW IT WORKS</p>

          <h2>How Admission Works</h2>

          <div className="heading-line"></div>

          <span>
            A simple and clear process for parents and students.
          </span>
        </div>


        <div className="process-cards">

          {/* CARD 01 */}
          <div className="process-card">
            <div className="process-top">
              <span className="process-number">01</span>
              <span className="process-icon">📞</span>
            </div>

            <h3>Enquiry</h3>

            <p>
              Contact the school office and learn about available
              classes and admission details.
            </p>

            <div className="card-arrow">→</div>
          </div>


          {/* CARD 02 */}
          <div className="process-card">
            <div className="process-top">
              <span className="process-number">02</span>
              <span className="process-icon">📝</span>
            </div>

            <h3>Application</h3>

            <p>
              Fill in the admission form and provide the required
              information and documents.
            </p>

            <div className="card-arrow">→</div>
          </div>


          {/* CARD 03 */}
          <div className="process-card">
            <div className="process-top">
              <span className="process-number">03</span>
              <span className="process-icon">🤝</span>
            </div>

            <h3>Interaction</h3>

            <p>
              Meet the school team and complete any required
              interaction or assessment.
            </p>

            <div className="card-arrow">→</div>
          </div>


          {/* CARD 04 */}
          <div className="process-card">
            <div className="process-top">
              <span className="process-number">04</span>
              <span className="process-icon">🎉</span>
            </div>

            <h3>Confirmation</h3>

            <p>
              Complete the final formalities and begin your child's
              journey at New Era Public School.
            </p>

            <div className="card-arrow">✓</div>
          </div>

        </div>

      </section>


      {/* ================= DOCUMENTS ================= */}
      <section className="documents-section">

        <div className="documents-content">

          <p className="admission-small-title">
            REQUIRED DOCUMENTS
          </p>

          <h2>Documents You May Need</h2>

          <div className="document-list">

            <div>
              <span>✓</span>
              Birth Certificate
            </div>

            <div>
              <span>✓</span>
              Previous School Records
            </div>

            <div>
              <span>✓</span>
              Transfer Certificate
            </div>

            <div>
              <span>✓</span>
              Passport Size Photographs
            </div>

            <div>
              <span>✓</span>
              Address Proof
            </div>

            <div>
              <span>✓</span>
              Parent / Guardian Details
            </div>

          </div>

        </div>


        <div className="admission-note">

          <div className="note-icon">ℹ️</div>

          <h3>Need More Information?</h3>

          <p>
            Our school office will be happy to guide parents through
            the admission process and answer their questions.
          </p>

          <button>
            Contact School →
          </button>

        </div>

      </section>

    </div>
  );
}

export default Admissions;