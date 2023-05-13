# Exception handling

Without proper exception handling, expect a lot of bug reports.

:::caution

Earlier in the project history, our code diverged significantly from the D standard library in how we handled runtime exceptions.
We are now returning to idiomatic EH for improved develop and end user experience.

:::

## Scope Guards

In most languages that employ EH, the use of `try`, `catch` and `finally` are recommended. These can lead to quite cumbersome,
repetitive code. Thankfully, D has **scope guards** to simplify control flow.

```d
void myFunction()
{
    scope (exit)
    {
        writeln("Exit from current scope");
    }
    scope (success)
    {
        writeln("Only executed if no errors thrown in scope");
    }
    scope (failure)
    {
        writeln("Only executed if an exception is thrown");
    }
}
```

```d
void doThing()
{
    auto f = File("someFile");
    scope (exit)
    {
        f.close();
    }
}
```

## Catching exceptions

As with most languages featuring exception handling, you **can** use try-catch blocks:

```d
import std.conv : to;

int n;
try {
    n = "twelve".to!int;
} catch (Exception ex)
{
    n = 4;
}
```

However, this is super inelegant and clumsy to follow. A better approach is to simply take
a sane-defaults approach:

```d
import std.exception : ifThrown;
import std.conv : to;

int n = "twelve".to!int.ifThrown(4);
```

## Sane callsites

We want to ideally handle all exceptions properly, and ensure that the `main()` method is marked
as `nothrow` to ensure we have correctly handled all exceptions deeper within the code. It is
generally a terrible user experience to have unhandled exceptions.

## Real errors.

When an exception is recoverable, we should try to do so. In some cases catching these exceptions
to just abort makes absolutely no sense, especially when we need a `nothrow` main. In these cases
it is possible to raise the exception to a *runtime error* via `assumeWontThrow`. If an exception
is thrown in the body, the process will dump at runtime with a nice stack trace.

```d
import std.exception : assumeWontThrow;
import std.conv : to;

@safe:

void main() nothrow
{
    // AssertError is thrown.
    int n = assumeWontThrow("twelve".to!int);
}
```