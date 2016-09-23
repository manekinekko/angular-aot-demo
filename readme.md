[![CircleCI](https://circleci.com/gh/manekinekko/angular2-aot-demo/tree/master.svg?style=svg)](https://circleci.com/gh/manekinekko/angular2-aot-demo/tree/master)

# Angular 2 AOT (Ahead Of Time) offline compilation example with Webpack and TypeScript

This repository shows how to use the Angular 2 final command line offline compiler (ngc) with Webpack and TypeScript.

## Presentation

[Demystifying Ahead-Of-Time Compilation In Angular 2](http://slides.com/wassimchegham/demystifying-ahead-of-time-compilation-in-angular-2-aot-jit).

# How to

## Build a JIT bundle

```
$ npm run build-jit
```


## Build an AOT bundle

```
$ npm run build-aot
```

## Build both

```
$ npm run demo
```

See [package.json#L5-L13](https://github.com/manekinekko/angular2-aot-demo/blob/master/package.json#L5-L13) for more details.
