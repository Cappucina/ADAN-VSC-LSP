<div align="center">
	<h1>ADAN's Language Server for VS Code</h1>
</div>

ADAN is a statically typed, memory safe programming language that strives to introduce a strict and safe type system that primarily focuses on preventing possible memory leaks and unstable code. ADAN has syntax similar to C, to keep familiarity and to avoid having a steep learning curve.

ADAN was developed by [Lily](https://github.com/transicle), [Kauht](https://github.com/kauht), and [Leo](https://github.com/nvttles).

The ADAN LSP (Language Server Protocol) provides various features, such as: **syntax highlighting** and **auto-completion**. Making development in ADAN seamless and less of a hassle.

> [View the ADAN language's source code or install the language for yourself](https://github.com/Cappucina/ADAN.git).

## Installation

You can [install this extension](https://marketplace.visualstudio.com/items?itemName=Cappucina.adan) from Cappucina on the VS Code Marketplace.

Or, if you'd like, directly install the `.vsix` file from the [releases page](https://github.com/Cappucina/ADAN-VSC-LSP/releases/tag/latest).

## Features

- Syntax highlighting
- Code snippets
- - Increase your development speed with easily editable pre-built blocks of code.

Turn something from this:
```c
include adan.io;

pro
```

Into this:
```c
include adan.io;

program::void my_function(parameters) {

}
```

- Auto completion
- - `pr` -> `program`, `t` -> `true`, etc.