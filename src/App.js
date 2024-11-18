import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      {/* Profile Header */}
      <div className="card shadow-sm border-0 mb-4 p-4 rounded-3">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h4 className="fw-bold mb-1">Vishnu Venkat</h4>
            <p className="text-muted mb-1">Engineer at BB Agency - Industry</p>
            <p className="text-muted mb-2">Bangalore, India</p>
          </div>
          <button className="btn btn-outline-secondary btn-sm px-3">✏️</button>
        </div>
        <div className="mt-3">
          <span className="badge bg-secondary me-2 py-2 px-3">
            Frontend Developer
          </span>
          <span className="badge bg-secondary me-2 py-2 px-3">
            Backend Developer
          </span>
          <span className="badge bg-secondary py-2 px-3">
            Project Management
          </span>
        </div>
      </div>

      {/* About Me Section */}
      <div className="card shadow-sm border-0 mb-4 p-4 rounded-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fw-bold mb-0">About Me</h5>
          <button className="btn btn-outline-secondary btn-sm px-3">✏️</button>
        </div>
        <p className="mt-3 text-muted">
          Hi, my name is Vishnu Venkat, Professional with over 3.5 years of
          experience in designing, developing, and deploying web applications.
          Looking for a challenging and rewarding career in a company that
          allows me to utilize my knowledge and skills.
        </p>
      </div>

      {/* Previous Collaboration Section */}
      <div className="card shadow-sm border-0 p-4 mb-4 rounded-3">
        <h5 className="fw-bold mb-3">Previous Collaborate</h5>
        <div className="d-flex align-items-center gap-2 mb-4">
          <span className="badge bg-light text-dark border border-secondary py-2 px-3">
            Coca Cola
          </span>
          <button
            className="btn btn-dark btn-sm px-3 py-2"
            style={{ width: "auto" }}
          >
            + Add Previous Collaboration
          </button>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="card shadow-sm border-0 mb-4 p-4 rounded-3">
        <h5 className="fw-bold mb-3">Let's Collaborate</h5>
        <div className="d-flex align-items-center gap-2 mb-4">
          <button
            className="btn btn-dark btn-sm mb-3"
            style={{ width: "auto" }}
          >
            + Add Product
          </button>
        </div>
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="fw-bold mb-0">Product #1</h6>
            <button className="btn btn-outline-secondary btn-sm px-3 mb-4">
              ✏️
            </button>
          </div>

          <textarea
            className="form-control mb-2 "
            placeholder="Explain here ......."
            rows="3"
          ></textarea>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold">USD 350</span>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="fw-bold mb-0">Product #2</h6>
            <button className="btn btn-outline-secondary btn-sm px-3 mb-4">
              ✏️
            </button>
          </div>
          <textarea
            className="form-control mb-2"
            placeholder="Explain here ......."
            rows="3"
          ></textarea>

          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold">USD 350</span>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="card shadow-sm border-0 p-4 rounded-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fw-bold mb-0">Testimonials</h5>
          <button className="btn btn-outline-secondary btn-sm px-3">✏️</button>
        </div>
        <blockquote className="blockquote mt-3 text-muted">
          <p className="mb-0">
            "Working with Jennifer was the best experience possible for us.
            We&#39;ve had over 150 B2B partners come from her audience, and
            likely so many more influenced by her! Seriously, the best ROI
            we&#39;ve seen."
          </p>
          <footer className="blockquote-footer mt-2">
            John Smith, <cite title="Company">Company</cite>
          </footer>
        </blockquote>
        <button className="btn btn-dark mt-3">Add Testimonials</button>
      </div>
    </div>
  );
}

export default App;
