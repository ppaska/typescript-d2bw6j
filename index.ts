// Import stylesheets
import './style.css';
import {dataPipe} from 'datapipe-js';
import {count, first} from 'datapipe-js/array';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
// kkkk
const data = [
  { name: "John",  country: "US"},
  { name: "Joe", country: "US"},
  { name: "Bill",  country: "US"},
  { name: "Adam", country: "UK"}, 
  { name: "Scott", country: "UK"},
  { name: "Diana",country: "UK"},
  { name: "Marry",country: "FR"},
  { name: "Luc",country: "FR"}
];
// test
const summaryForUS = dataPipe(data)
  .groupBy(i => i.country)
  .select(g => {
    return {
      country: first(g).country,
      names: g.map(r => r.name).join(", "),
      count: count(g)
    }
  }
  )
  .where(r => r.country != "US")
  .toArray();

  appDiv.innerHTML = `<span>${JSON.stringify(summaryForUS)}</span>`;

  console.log(summaryForUS);