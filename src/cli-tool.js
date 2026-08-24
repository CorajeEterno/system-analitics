import chalk from 'chalk';

export default function ejecutarCli() {
  console.log(chalk.green.bold('Bienvenido a la CLI de ejemplo'));
  console.log(chalk.green('Comandos disponibles: ') + chalk.cyan('hola, tiempo, salir'));

  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (data) => {
    const input = data.trim().toLowerCase();

    switch (input) {
      case 'hola':
        console.log(chalk.blue('¡Hola! ¿Cómo estás?'));
        break;
      case 'tiempo':
        console.log(chalk.blue(`Tiempo activo: ${process.uptime().toFixed(2)} segundos`));
        break;
      case 'salir':
        console.log(chalk.blue('Saliendo...'));
        process.exit(0);
        break;
      default:
        console.log(chalk.red.bold('Comando no reconocido'));
    }

    process.stdout.write(chalk.cyan('Ingresa un nuevo comando: '));
  });
}