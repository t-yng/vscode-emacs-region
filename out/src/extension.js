'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var inRegionMode = false;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('emacs.startRegionMode', function () {
        removeSelection();
        inRegionMode = true;
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emacs.exitRegionMode', function () {
        if (!inRegionMode) {
            return;
        }
        removeSelection();
        inRegionMode = false;
    }));
    var cursorMoves = ["cursorUp", "cursorDown", "cursorLeft", "cursorRight"];
    cursorMoves.forEach(function (cursormove) {
        context.subscriptions.push(vscode.commands.registerCommand("emacs." + cursormove, function () {
            vscode.commands.executeCommand(inRegionMode ? cursormove + "Select" : cursormove);
        }));
    });
}
exports.activate = activate;
function removeSelection() {
    var pos = vscode.window.activeTextEditor.selection.active;
    vscode.window.activeTextEditor.selection = new vscode.Selection(pos, pos);
}
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map