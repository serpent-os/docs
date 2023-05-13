# Basics

:::caution

Earlier in our development we pursued the use of monadic return types, attempted the elimination of EH and eventually settled on an idiomatic pattern that works for us.

Some of the information shown may not be representative of the current code on GitHub.

:::


Having a consistent coding style is important for any project, especially with Serpent OS having a large codebase and numerous user facing tools.

## Integration of serpent-style

All of our D projects incorporate a standard module to assist in keeping code style consistent.

 - [serpent-style on GitHub](https://github.com/serpent-os/serpent-style)

Whenever you make any changes in your codebase, make sure you run the following command before pushing your commits for review:

```bash
./serpent-style/update-format.sh
```

## Brace Style

Simply, we use the Allman style as it is easy to follow, and easy to integrate in tooling.

Exception: Even single line conditionals and loops should be surrounded in braces.

## Indentation

We use 4 spaces, not tabs.