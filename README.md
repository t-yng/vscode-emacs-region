# vscode-emacs-region
This is an extension for Visual Studio Code which provides region selection similar to that of Emacs.

## Keybindings
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
|ctrl+space|start region mode|
|ctrl+g|exit region mode|

## Compatibility With Other Extensions

It is possible to combine this extension with other cursor movement extensions.

You can use the `inRegionMode` context flag in the `when` clause of your keybind to provide different behaviour for region mode vs. cursor mode. The default keybinds are laid out as follows:

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
