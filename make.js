import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { execCommand } from './utils/commands/index.js';

const argv = yargs(hideBin(process.argv))
    .command(
        'make:model:mongo <name>',
        'Create a new MongoDB model file',
        (yargs) => {
            yargs.positional('name', {
                describe: 'Model name',
                type: 'string',
            });
        }
    )
    .help().argv;

// Obtener el nombre del comando y argumento.
const [command, param] = argv._;

execCommand(command, param, process.cwd())