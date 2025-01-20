const yargs = require('yargs');

yargs
  .command({
    command: 'add',
    describe: 'Liida kaks numbrit',
    builder: {
      num1: {
        describe: 'Esimene number',
        demandOption: true,
        type: 'number',
      },
      num2: {
        describe: 'Teine number',
        demandOption: true,
        type: 'number',
      },
    },
    handler(argv) {
      console.log(`Tulemus: ${argv.num1 + argv.num2}`);
    },
  })
  .command({
    command: 'subtract',
    describe: 'Lahuta kaks numbrit',
    builder: {
      num1: {
        describe: 'Esimene number',
        demandOption: true,
        type: 'number',
      },
      num2: {
        describe: 'Teine number',
        demandOption: true,
        type: 'number',
      },
    },
    handler(argv) {
      console.log(`Tulemus: ${argv.num1 - argv.num2}`);
    },
  })
  .command({
    command: 'multiply',
    describe: 'Korruta kaks numbrit',
    builder: {
      num1: {
        describe: 'Esimene number',
        demandOption: true,
        type: 'number',
      },
      num2: {
        describe: 'Teine number',
        demandOption: true,
        type: 'number',
      },
    },
    handler(argv) {
      console.log(`Tulemus: ${argv.num1 * argv.num2}`);
    },
  })
  .command({
    command: 'divide',
    describe: 'Jaga kaks numbrit',
    builder: {
      num1: {
        describe: 'Esimene number',
        demandOption: true,
        type: 'number',
      },
      num2: {
        describe: 'Teine number',
        demandOption: true,
        type: 'number',
      },
    },
    handler(argv) {
      if (argv.num2 === 0) {
        console.log('Viga: Jagamine nulliga ei ole lubatud!');
      } else {
        console.log(`Tulemus: ${argv.num1 / argv.num2}`);
      }
    },
  })
  .demandCommand(1, 'Palun sisesta vähemalt üks käsk!')
  .help()
  .argv;
