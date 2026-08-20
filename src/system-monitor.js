import os from 'os';
import chalk from 'chalk';

export default function mostrarInformacion() {
  console.clear();

  console.log(chalk.green.bold('🖥️  Monitor de Sistema'));
  console.log(chalk.green('========================'));
  
  console.log(chalk.cyan(`Sistema: ${os.platform()} (${os.arch()})`));
  console.log(chalk.cyan(`CPU: ${os.cpus()[0].model}`));
  console.log(chalk.cyan(`Cores: ${os.cpus().length}`));
  
  console.log(chalk.blue(`Memoria Libre: ${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`));
  console.log(chalk.blue(`Memoria Total: ${(os.totalmem() / (1024 * 1024)).toFixed(2)} MB`));

  console.log(chalk.yellow(`Uptime: ${(os.uptime() / 60).toFixed(2)} minutos`));
  console.log(chalk.blue(`Usuario: ${os.userInfo().username}`));
  
  console.log(chalk.green('========================\n'));
}

