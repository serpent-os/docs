# Short and sweet

We prefer to keep code short, elegant and easy to follow. Remember, [Don't Repeat Yourself!](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
Try to keep code blocks reusable, and if you find you've reached a level of indentation representing hadouken... it's probably a bug.

## Shortened method syntax

D now supports shortened method syntax by default to make one-liner functions (such as properties) easier to write and follow.

```d
pure @property x() => _x;
@property x(uint n) => _x = n;
```

## Use the standard library

While compact, the standard library has some real gems:

 - [std.algorithm](https://dlang.org/phobos/std_algorithm.html)
 - [std.range](https://dlang.org/phobos/std_range.html)

## Functional pipeline style

D's superpowers include `UFCS` (Universal Function Call Syntax), making the `.` operator incredibly powerful. In fact, it powers pipeline programming to make you more productive:

```d
immutable wordCount = File(readable)
    .byLine
    .map!split
    .map!"a.length"
    .sum;
```
