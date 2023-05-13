---
sidebar_position: 1
---

# Introduction

In Serpent OS, we rely heavily on the [D programming language](https://dlang.org),
and all of our tooling is developed publicly in our primary [GitHub space](https://github.com/serpent-os)

## What is D

D is a programming language that permits a number of development styles, and has been around since 2001.
In recent years, the project has changed pace and begun to take on modern challenges such as memory safety
and parallelism.

It compiles to native code, and offers a garbage collector as part of the standard library. While it is quite
possible to write explicitly managed memory code, this adds developer burden to satisfy all safety requirements.
At Serpent OS, we default to garbage collection model, and explicitly use manual memory management for areas where
we need to tweak the performance (i.e. contiguous memory).

This allows the best approach in terms of productivity, safety and targetted performance.

### Obtaining D

If you're using a Linux distribution other than Serpent OS or Solus, it is recommended to use the official
build of `ldc2` from dlang.org.

Visit [The Install Page](https://dlang.org/install.html) for more information.