// Setup Initial Static Data
setup = {
  initialState: {
    distance: 100,
    hull: 20,
    crew: 10,
    fuel: 8,
  },
  events: [
    'Calm Seas',
    'Rough Seas',
    'Storm',
    'Old Shipwreck',
    'Raft',
    'Friendly Port',
  ],
  hullMax: 20,
  crewMax: 15,
  fuelMax: 15,
};

// Setup custom functions
window.customPrint = () => {
  return 'This is a custom print';
};

window.randomEvent = () => {
  const index = Math.floor(Math.random() * setup.events.length);
  return setup.events[index];
}
