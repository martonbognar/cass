# Introduction to C and RISC-V assembly

## Practical information

9 exercise sessions, bring your laptop. Solutions are included in this file, and will become available at each weekend. It's strongly recommended to first complete the exercises (don't be afraid to use external resources if you understand what you're doing) before looking at the solutions.

## Perspective

Positioning this course, we will talk about translating procedural code to assembly, and how machine code is executed on the computer.

## Stored-program computer

The computer is made up of several parts: control unit, ALU, RAM, registers. The RAM stores both instructions and data (Von Neumann architecture). The instructions stored in memory are in machine code format, which strongly relates to assembly code.

Assembly code manipulates the hardware and uses registers to compute (faster, but finite).

Different instruction sets of assembly for different architectures: x86, ARM, RISC-V.

Binary, mnemonic form.

RISC-V: open source, not CISC.

C is a high level language that compiles directly to assembly. We will use this in the course to demonstrate high-level ideas before implementing them in assembly. One example of the high-levelness of C is that the programmer operates on variables, not registers.

But not as high level as other languages (Java, python): manual memory management, transparent memory locations, procedural, no error handling.

## Compiling C and running assembly

Hello world example

Godbolt link, but you should set up gcc/clang locally for bigger projects.

See assembly output with `-S`.

Run handwritten assembly with RARS.

## Integers in C and assembly

Integers, basic arithmetic

Side-by-side examples of C and RISC-V (just `c = a + b` or something).

## Registers in RISC-V

In the previous example, we've already seen registers being used, here is their list in RISC-V, along with register sizes and stuff.

## Breakdown of assembly instructions

Operation, destination, sources.

[ go back to the previous example here ]

## Pointers in C

Are C variables always stored in registers? What if we have too many? Storing them in memory. How can we see where they are stored?

Pointers

Interactive example

## Memory segments in assembly

So can we store variables in memory from assembly?

Memory segments, example with a `word`.

## Other data types

Basic ones, char, float, double

Size of data types

### Exercise 1 from session 2

## User input handling in C

scanf

### Exercise 3 from session 1

### Exercise 1 from session 1

Hint: for loop

### Exercise 3 from session 2

### Maybe: exercise 4 from session 2

## Complex data types: static arrays

First example in C, with loop

Also strings

### Exercise 5 from session 1 (although this is pretty boring)

### Exercise 6 from session 1

## Branches in assembly

### Exercise 2 from session 2 (also not fun)

### Exercise 5 from session 2

### Exercise 6 from session 2

### Exercise 7 from session 2

Before next: explain sizeof array

### Exercise 2 from session 1

## Functions




## Structs (((until later)))

### Exercise 4 from session 1
