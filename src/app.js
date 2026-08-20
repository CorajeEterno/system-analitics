import chalk from 'chalk';
import ejecutarCli from './cli-tool.js';
import registroSistema from './registro-sistema.js';
import mostrarInformacion from './system-monitor.js';


console.log(chalk.green.bold('=== 🚀 MENÚ INTEGRADOR PRINCIPAL ==='));
console.log(chalk.white('1. Ejecutar CLI interactiva'));
console.log(chalk.white('2. Ejecutar Registro del Sistema'));
console.log(chalk.white('3. Ejecutar Monitor de Sistema (OS)'));
console.log(chalk.cyan('\nElige una opción: '));

process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  const input = data.trim();
  switch (input) {
    case '1': ejecutarCli(); break;
    case '2': registroSistema(); break;
    case '3': mostrarInformacion(); break;
  }
});