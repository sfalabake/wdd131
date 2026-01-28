let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

// 1. Filter names starting with 'B'
let namesB = names.filter(name => name.charAt(0) === 'B');

// 2. Map names to their lengths
let namesLength = names.map(name => name.length);

// 3. Reduce to calculate average length
let averageLength = names.reduce((total, name) => total + name.length, 0) / names.length;

// Output dynamically to HTML
document.getElementById('output').innerHTML = `
  <p><strong>Names starting with B:</strong> ${namesB.join(', ')}</p>
  <p><strong>Length of each name:</strong> ${namesLength.join(', ')}</p>
  <p><strong>Average name length:</strong> ${averageLength}</p>
`;
