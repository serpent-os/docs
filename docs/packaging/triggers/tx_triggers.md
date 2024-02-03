---
sidebar_position: 2
---

# Transaction Triggers

Transactional scope triggers (`tx triggers`) are run after the new filesystem transaction has been
blitted to disk, and just before the new `/usr` tree is activated. These triggers run within a specialised
container and have read-write access to the new `/usr` tree, but only have read-only access to the `/etc`
directory.

Currently transaction triggers must be installed in `/usr/share/moss/triggers/pre.d` with a `.yaml` suffix.
In a future update to moss this path will be changed to `/usr/share/moss/triggers/tx.d`

## Sample trigger

This simple trigger will run `depmod -a 6.6.15` when any files are installed to `/usr/lib/modules/6.6.15/`.
Note that identical commands (after expansion) will be collapsed automatically to a single run.

```yaml
name: depmod
description: |
    Update kernel module dependencies

# Define all of our handlers
handlers:
    depmod:
        # Run `depmod` with these arguments
        run: /usr/sbin/depmod
        args: ["-a", "$(version)"]

paths:
    # Set up a match
    "/usr/lib/modules/(version:*)/*" :
        # Run these handlers for this match.
        handlers:
            - depmod
        type: directory
```