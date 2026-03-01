const Shell = require("node-powershell");

async function runPowerShell(script) {
  const ps = new Shell({
    executionPolicy: "Bypass",
    noProfile: true,
  });

  try {
    await ps.addCommand(script);
    const output = await ps.invoke();
    return "Configuración aplicada correctamente";
  } catch (err) {
    return `Error: ${err.message}`;
  } finally {
    await ps.dispose();
  }
}

module.exports = { runPowerShell };
