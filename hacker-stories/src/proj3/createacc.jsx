export default function CreateAccount() {
    return (
      <section className="contact-section py-5">
        <div className="container">
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <h2 className="fw-bold text-decoration-underline mb-4">Create an Account</h2>
  
            <form>
              <div className="mb-3">
                <label>Name:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label>Email:</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label>Pet's Name:</label>
                <input type="text" className="form-control" />
              </div>
  
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  