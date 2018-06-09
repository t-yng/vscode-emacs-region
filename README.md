![vscode-emacs-region](images/banner.png)

An extension for Visual Studio Code which provides region selection & operations
similar to emacs.

## Default Keybindings

|key|explanation|
|---|-----------|
|ctrl+f|move selection cursor right|
|ctrl+b|move selection cursor left|
|ctrl+p|move selection cursor up|
|ctrl+n|move selection cursor down|
|right|move selection cursor right|
|left|move selection cursor left|
|up|move selection cursor up|
|down|move selection cursor down|
|ctrl+right|move selection cursor one word to the right|
|ctrl+left|move selection cursor one word to the left|
|ctrl+v|move selection cursor one page down|
|alt+v|move selection cursor one page up|
|ctrl+a|move selection cursor to start of line|
|ctrl+e|move selection cursor to end of line|
|alt+shift+,|move selection cursor to start of file|
|alt+shift+.|move selection cursor to end of file|
|ctrl+y|paste and stop selection|
|ctrl+w|cut and stop selection|
|alt+w|copy and stop selection|
|backspace|delete selected text and exit region mode|
|delete|delete selected text and exit region mode|
|ctrl+space|start region mode|
|ctrl+x space|start column region mode|
|ctrl+g|exit region mode|

## Custom Commands

|command|explanation|
|-------|-----------|
|emacs.action.clipboardCopyAction|Copy the selected region and exit region mode.|
|emacs.action.clipboardCutAction|Cut the selected region and exit region mode.|
|emacs.action.clipboardPasteAction|Paste over the selected region and exit region mode.|
|emacs.deleteLeft|Kill region and exit region mode.|
|emacs.deleteRight|Kill region and exit region mode.|
|emacs.startRegionMode|Start region mode with a single cursor.|
|emacs.startColumnRegionMode|Start region mode with multi-line cursors.|
|emacs.exitRegionMode|Exit any active region mode.|

## Compatibility With Other Extensions

It is possible to combine this extension with other cursor movement extensions.

You can use the `inRegionMode` context flag in the `when` clause of your keybind
to provide different behaviour for region mode vs. cursor mode. The default
keybinds are laid out as follows:

```json
{
    "key": "DESIRED KEY",
    "command": "CURSOR MOVE COMMAND",
    "when": "editorTextFocus && !inRegionMode"
},
{
    "key": "DESIRED KEY",
    "command": "CURSOR MOVE & SELECT COMMAND",
    "when": "editorTextFocus && inRegionMode"
}
```

## Contributing

If you'd like to add more features, feel free to send a pull request on GitHub.

## Known Issues

- When cutting text (`emacs.action.clipboardCutAction`), sometimes only the line
  the cursor is on is removed, but the full region is sent to the clipboard. Not
  sure what the cause is - perhaps this is related to
  [vscode#2933](https://github.com/Microsoft/vscode/issues/2933).

## Acknowledgements

Thanks to [t-yng](https://github.com/t-yng) for his original extension, which
can be found here:
[t-yng/vscode-emacs-region](https://github.com/t-yng/vscode-emacs-region).