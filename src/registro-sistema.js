import chalk from 'chalk';

export default function registroSistema() {
  console.log(chalk.green.bold('=== Inicio del sistema ===\n'));

  console.time(chalk.yellow('⏱️ ProcesoPrincipal'));

  function accesoUsuario(usuario) {
    console.count(chalk.blue(`👤 Acceso de usuario ${usuario}`));
  }

  accesoUsuario('Luis');
  accesoUsuario('Ana');
  accesoUsuario('Carlos');
  accesoUsuario('muriel');

  console.warn(chalk.hex('#FFA500').bold('⚠️ Capacidad de usuarios alcanzando el límite'));

  console.error(chalk.red.bold('❌ Error: No se pudo conectar a la base de datos'));

  const usuarios = [
    { nombre: "Carlos", rol: "Admin" },
    { nombre: "Ana", rol: "User" },
    { nombre: "luis", rol: "User"},
    { nombre: "murie", rol:"admin"}
  ];

  console.log(chalk.cyan.bold('\n📋 Lista de usuarios conectados:'));
  console.table(usuarios);

  console.timeEnd(chalk.yellow('⏱️ ProcesoPrincipal'));

  console.log(chalk.green.bold('\n=== Fin del sistema ==='));
}

