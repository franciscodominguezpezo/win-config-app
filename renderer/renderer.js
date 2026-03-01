document.getElementById("darkModeBtn").addEventListener("click", async () => {
  const result = await window.api.enableDarkMode();
  alert(result);
});
