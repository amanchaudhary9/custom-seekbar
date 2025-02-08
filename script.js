// Default Slide Duration (isko Articulate variable se replace karenge)
let slideDuration = 120; // 2 minutes

document.getElementById('seekBar').max = slideDuration;
document.getElementById('totalDuration').innerText = formatTime(slideDuration);

// Auto progress logic
let currentTime = 0;
let interval = setInterval(() => {
  if (currentTime <= slideDuration) {
    document.getElementById('seekBar').value = currentTime;
    document.getElementById('currentTime').innerText = formatTime(currentTime);
    currentTime++;
  } else {
    clearInterval(interval);
  }
}, 1000);

// Format time function
function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return ${mins}:${secs < 10 ? '0' : ''}${secs};
}

// Manual seeking
document.getElementById('seekBar').addEventListener('input', function() {
  currentTime = parseInt(this.value);
  document.getElementById('currentTime').innerText = formatTime(currentTime);
});