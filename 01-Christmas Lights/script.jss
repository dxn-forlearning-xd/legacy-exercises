let colors = [
  'rgba(137,234, 236, 1)',
  'rgba(252, 74, 187, 1)',
  'rgba(116, 251, 125, 1)',
  'rgba(252, 254, 98, 1)',
];

const lightrope = document.getElementById('lightrope');
const lights = 25;
const lightSwitch = document.getElementById('lightSwitch');

for (let i = 0; i < 25; i++) {
  const colorIdx = i % colors.length;
  const light = document.createElement('li');
  light.classList.add('light');
  lightrope.appendChild(light);
  light.dataset.colorIdx = colorIdx;
  light.dataset.color = colors[colorIdx];
  light.style.backgroundColor = light.dataset.color;
}
