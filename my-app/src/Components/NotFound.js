export const NotFound = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f2f2f2",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "50px",
            }}
          >
            <img
              src="https://assets.codepen.io/5647096/backToTheHomepage.png"
              alt="Back to the Homepage"
              style={{ marginBottom: "20px" }}
            />
            <img
              src="https://assets.codepen.io/5647096/Delorean.png"
              alt="El Delorean, El Doc y Marti McFly"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "10rem", margin: "0" }}>404</h1>
            <h2 style={{ fontSize: "3rem", margin: "0" }}>PAGE NOT FOUND</h2>
            <h3 style={{ fontSize: "2rem", margin: "0" }}>BACK TO HOME?</h3>
            <a
              href="#"
              style={{
                display: "inline-block",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
                margin: "10px",
              }}
            >
              YES
            </a>
            <a
              href="*"
              style={{
                display: "inline-block",
                backgroundColor: "#dc3545",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
                margin: "10px",
              }}
            >
              NO
            </a>
          </div>
        </section>
      </div>
    );
  };
  