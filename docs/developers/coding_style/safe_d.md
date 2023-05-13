# `@safe` D

The D language officially supports a so-called [`SafeD`](https://dlang.org/articles/safed.html) mode.
Additional runtime checks are added to arrays/slices to avoid a whole heap of bugs (pun intended) as well
as ongoing modernisation via the `DIP1000` effort to bring greater memory safety.

If you start with `@safe` and `DIP1000` then you will find life a lot easier!

## Use a global decorator

The quickest way to integrate `@safe` is by adding it at the module level, rather than on each and every
function:

```d

module mymodule;

import blahblah;

@safe:

/* Code here */
```

## DIP1000

All **new** projects should be compiled with `-preview=dip1000` until such time as it becomes the default
behaviour in the D compiler. This enables many memory safety checks, and makes the `scope` keyword more
useful.

## Scope lifetimes

Scope affects the lifetime of variables in D. This is quite a complex discussion. With DIP1000 we can
add strict storage constraints to variables and function return values to ensure we control the lifetime.

 - [Scope Parameters](https://dlang.org/spec/function.html#scope-parameters)


## Unsafe code

No matter how hard any language tries, there will always be situations where we need to engage with unsafe
code. In D, this is labeled as `@system` code. An example is when we interact with the C standard library,
which has no safety guarantees at all. It is advisable to encapsulate these calls in short, controlled
`@trusted` lambdas:

```d
void myFunction()
{
    /* Create a trusted lambda, run it. */
    int rc = () @trusted {
        return doSomethingUnsafe();
    }();
    ...
}
```

## Managing C allocated resources

For unsafe underlying resources that need passing around it is advised to use `std.typecons.SafeRefCounted`.
Allow functions to use the managed resource via the `.borrow` API:

```d
ubyte* memory = () @trusted {
    return someUnsafeMemoryFunction;
}();
auto rc = safeRefCounted(memory);
memory.borrow((m) {
    method(m);
});
```