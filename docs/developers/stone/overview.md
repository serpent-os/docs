---
sidebar_position: 1
---

# Overview

Serpent OS uses a custom binary format for the distribution of packages, aka the `.stone` format.
This is a binary file that splits the various components of a package into strongly-typed "payloads".
Currently we're stabilising the `v1` format and intend to incrementally improve it across a series
of staged updates.

:::tip

    All multibyte values (i.e. bigger than a `uint8_t`, and not an array) are stored as Big Endian.