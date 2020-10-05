# Thesis-dissertation: Datasets

This repository contains the datasets we created to exercise the [tool](https://github.com/BernardoFuret/Thesis-dissertation) we have been developing.

It is divided into two major folders:
- `benchmarks`: Contains several mini-programs that range through most of the asynchronous APIs JavaScript provides. These are used to make general tests to the tool to see how it responds to each of the different asynchronous operations.  
- `notable cases`: This folder contains two folders. Each represents a specific kind of concurrency bug that serve as the focus for our work. Both also contains small snippets of code, but these are to exercise their respective bug only. The two notable cases, each on its own folder:
    - `Broken Promise`
    - `Unexpected Execution Order`

For each of the files, they are named starting with a letter, to identify the purpose of the code they contain and how they are to be used:
- `C`: Is for code that is correct, regarding the programmers' intentions. This code will execute in the way the developer wants it to.
- `I`: Represents code that contains asynchrony bugs. The developer wanted the program to do something, but an unintended bug leads to unexpected results.
- `O`: Stands for other examples that don't necessarily add anything new in terms of concepts, but contain code organized more like it appears on real-world programs, or simply display edgier patterns.
