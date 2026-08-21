const steps = [
  ['01', 'React', 'Sends the HTTP request'], ['02', 'Middleware', 'Checks and logs it'],
  ['03', 'Router', 'Decides where it goes'], ['04', 'Controller', 'Decides what happens'],
  ['05', 'DAO', 'Runs the SQL'], ['06', 'SQLite', 'Stores the music'],
];

export default function RequestJourney() {
  return (
    <section className="journey" id="journey">
      <p className="eyebrow">FOLLOW THE REQUEST</p><h2>One click. Six clear responsibilities.</h2>
      <div className="journey-grid">
        {steps.map(([number, title, text]) => <div className="journey-step" key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></div>)}
      </div>
      <p className="memory-rule"><b>Router</b> decides WHERE. <b>Controller</b> decides WHAT. <b>DAO</b> decides HOW to talk to the database.</p>
    </section>
  );
}
