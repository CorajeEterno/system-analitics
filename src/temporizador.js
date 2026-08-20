import chalk from 'chalk';

export default function temporizador() {
    let segundos = 0;

    const intervalId = setInterval(() => {
        segundos++;
        console.log(chalk.blue.bold(`Han pasado ${segundos} segundos`));

        if (segundos >= 10) {
            clearInterval(intervalId);
            console.log(chalk.green.bold('¡Listo! Finalizó el temporizador'));
        }
    }, 1000);
}