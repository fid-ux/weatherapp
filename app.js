const apiKey = "YOUR_API_KEY"; // registrera dig på https://openweathermap.org/api
const btn = document.getElementById("search");

btn.addEventListener("click", async () => {
const city = document.getElementById("city").value.trim();
const result = document.getElementById("result");

if (!city) return (result.textContent = "Skriv en stad!");

result.textContent = "Hämtar väder...";

try {
const res = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sv&appid=${apiKey}`
);
const data = await res.json();

if (data.cod !== 200) throw new Error(data.message);

result.innerHTML = `
<h2>${data.name}</h2>
<p>${data.weather[0].description}</p>
<h3>${Math.round(data.main.temp)}°C</h3>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
`;
} catch (e) {
result.textContent = "Kunde inte hämta vädret. Försök igen.";
}
});
