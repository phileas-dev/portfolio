const defaultHue = 158
const defaultSat = 90
const defaultBri = 60

// hue slider functionality & storage
slider = document.getElementById("col");
slider.addEventListener('input', () => {
    updateCol(slider.value, updateSlider=false);
})

function updateCol(hue, updateSlider=true) {
    document.documentElement.style.setProperty('--hue', hue);
    window.sessionStorage.setItem("hue", hue);
    setFaviconColor(`hsl(${hue - 345}, ${defaultSat}%, ${defaultBri}%)`)
    // the alt hue is at +15 but computing +15 makes the color shift completely break
    // whilst substracting works for whatever reason
    if (updateSlider) {
        slider.value = hue;
    }
}

// storage loader on window load
storedColor = sessionStorage.getItem("hue");
window.addEventListener("load", () => {
    updateCol(storedColor || defaultHue);
});

// reset to default color when clicking icon
reset = document.getElementById("colorReset");
reset.addEventListener("click", () => {
    updateCol(defaultHue);
})


function setFaviconColor(color) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="${color}"/>
        <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-24,96-25.61-19.2a4,4,0,0,0-4.8,0L128,120V40h56Z"/>
        </svg>
    `;
  
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const link = document.getElementById('favicon') || document.createElement('link');
    link.id = 'favicon';
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = url;

    // remove old favicon if it exists
    document.head.querySelectorAll('link[rel="icon"]').forEach(el => {
    if (el !== link) el.remove();
    });

    document.head.appendChild(link);
}