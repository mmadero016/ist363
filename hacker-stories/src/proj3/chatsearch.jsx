export default function ChatSearch() {
    return (
      <section className="contact-section py-5 bg-light">
        <div className="container">
          <div className="mx-auto" style={{ maxWidth: '700px' }}>
            <h2 className="fw-bold mb-4 text-decoration-underline">Connect & Chat</h2>
  
            <form>
              <div className="mb-3">
                <label>Pet Name:</label>
                <input type="text" className="form-control" placeholder="e.g. Bambi" />
              </div>
              <div className="mb-3">
                <label>Breed:</label>
                <input type="text" className="form-control" placeholder="e.g. Shiba Inu" />
              </div>
              <div className="mb-3">
                <label>Age:</label>
                <input type="number" className="form-control" placeholder="e.g. 3" />
              </div>
              <div className="mb-3">
                <label>Medical Conditions:</label>
                <select className="form-select">
                  <option>None</option>
                  <option>Heart Murmur</option>
                  <option>Epilepsy</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Keywords (for matching):</label>
                <input type="text" className="form-control" placeholder="e.g. energetic, playful" />
              </div>
  
              <button type="submit" className="btn btn-success w-100">Find Matches</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  