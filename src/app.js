import chalk from 'chalk';
import ejecutarCli from './cli-tool.js';
import registroSistema from './registro-sistema.js';
import mostrarInformacion from './system-monitor.js';
import temporizador from './temporizador.js';


console.log(chalk.green.bold('=== 🚀 MENÚ INTEGRADOR PRINCIPAL ==='));
console.log(chalk.white('1. Ejecutar CLI interactiva'));
console.log(chalk.white('2. Ejecutar Registro del Sistema'));
console.log(chalk.white('3. Ejecutar Monitor de Sistema (OS)'));
console.log(chalk.white('4. Ejecutar Temporizador'));

process.stdout.write(chalk.cyan('\nElige una opción (1-4): '));

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.once('data', (data) => {
  const input = data.trim();
  

  console.log('');
  switch (input) {
    case '1': 
      ejecutarCli(); 
      break;
    case '2': 
      registroSistema(); 
      break;
    case '3': 
      mostrarInformacion(); 
      break;
    case '4': 
      temporizador(); 
      break;
    default:
      console.log(chalk.red('❌ Opción no válida. Debes elegir un número del 1 al 4.'));
      process.exit(0);
  }
});