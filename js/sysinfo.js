update_delay = 2500;    // in milliseconds
api_endpoint = "https://psibien.dev/api/sysinfo";
var fetch_data = true;

async function updateTemp() {
    if (fetch_data) {
        const res = await fetch(`${api_endpoint}?ts=${Date.now()}`);
        const data = await res.json();
        const temp = Number(data.cpu_temp).toFixed(2);
        document.getElementById("temp").textContent = temp + "°C";
        document.getElementById("disk").textContent = data.disk.percent + "%";
        document.getElementById("mem").textContent = data.memory.percent + "%";
        document.getElementById("uptime").textContent = formatUptime(data.uptime_sec);
    }
}

async function updateCommit() {
    const commitText = await showLatestCommit();
    document.getElementById("commit").textContent = commitText;
}

setInterval(updateTemp, update_delay);
setInterval(updateCommit, 300000);

function formatUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);

    let str = "";
    if (days) str += `${days}d`;
    if (hours) str += `${hours}h`;
    if (minutes || (!days && !hours)) str += `${minutes}m`;
    return str;
}
