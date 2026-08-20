import chalk from 'chalk';

export default function ejecutarCli() {

  console.log(chalk.green('Comandos disponibles: hola, tiempo, salir'));
  process.stdout.write(chalk.cyan('Ingresa un nuevo comando: '));

  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (data) => {
    const input = data.trim().toLowerCase();

    switch (input) {
      case 'hola':
        console.log(chalk.blue('¡Hola! ¿Cómo estás?'));
        break;

      case 'tiempo':
        console.log(chalk.yellow(`⏱️ Tiempo activo: ${process.uptime().toFixed(2)} segundos`));
        break;

      case 'salir':
        console.log(chalk.hex('#FFA500').bold('Saliendo de la CLI...'));
        process.exit(0);
        break;

      default:
        console.log(chalk.red.bold('❌ Comando no reconocido'));
    }

    process.stdout.write(chalk.cyan('Ingresa un nuevo comando: '));
  });
}

ejecutarCli();