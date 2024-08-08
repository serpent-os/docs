---
sidebar_position: 2
title: COSMIC
---

The [COSMIC Desktop](https://system76.com/cosmic) from [System76](https://system76.org) is a highly popular
choice with Serpent OS users. Despite early alpha status, it is notable for being written in Rust and using
a modern multiprocess architecture, while being Wayland-only. For many, this makes Serpent OS and COSMIC an
ideal partnership.

:::info

The current ISO releases are GNOME based. COSMIC will be an installer option soon.

:::

### Installing COSMIC on Serpent OS

```bash
sudo moss install cosmic-desktop
```

### Controlling the display manager

If you've installed COSMIC over the top of a GNOME install, you can safely remove `gdm` and have
`cosmic-greeter` take over. Note: GNOME Shell still expects `gdm` for full functionality.
