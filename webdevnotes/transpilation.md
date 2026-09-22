## Transpilation

To transpile the ts code to js, we use tsc. Say we want to configure the way this transpilation occurs, then we need to use the `tsconfig.json`file which resembles a makefile and contains the configurations settings as a json under `"compilerOptions":`

`sourceMap:true`generates the map file for the types in typescript. If you launch tsc on its own without a file, then it will just execute according to this file's instructions.

Vite is a transpilation tool which is used to save time and generates correct files on the fly.
