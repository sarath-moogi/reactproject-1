const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Modular Component Showcase</h1>
        <p>
          A professional React SPA demonstrating reusable UI components,
          routing, controlled state, async simulation, and performance optimization.
        </p>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Reusable Components</h3>
          <p>Configurable buttons, cards, and tables.</p>
        </div>

        <div className="feature-card">
          <h3>Routing</h3>
          <p>SPA navigation using React Router.</p>
        </div>

        
      </div>
    </div>
  );
};

export default Home;