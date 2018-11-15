# Apology

I feel bad for making another component library but at the same time since I'm just using it for
my personal projects and website, and not foisting it on anyone else, I don't see a problem.

# Third Coast

Third Coast is a simple React component library for use in my own projects.

Primary reasons for existence:

- Uses React 16.7 concepts such as hooks and memo 
- Written in TypeScript, using literal types for many props to reduce the possibility of errors
- Functional CSS under the hood
- Lightweight and tree shaking friendly
- Atomic design
- !important occurs nowhere in the codebase

It derives heavily from, but does not depend on the following libraries:

- nanostyled (functional css as props)
- Blueprint (most styling)
- basscss (class names and some code)

It does depend on: 

- SASS 

# Repository usage

This git repository is both a React application for demo/development purposes, and a Rollup library
for use elsewhere.

You can run it with

    yarn
    yarn start

