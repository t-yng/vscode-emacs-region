// Copyright (c) 2016 Nisheet Jain
// Released under the MIT license
// https://github.com/nisheetjain/vscode-emacs/blob/master/LICENSE.txt

'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    setRegionMode(false);

    context.subscriptions.push(vscode.commands.registerCommand('emacs.startRegionMode', ()=>{
        startRegionMode();
    }));

    context.subscriptions.push(vscode.commands.registerCommand('emacs.exitRegionMode', ()=>{
        exitRegionMode()
    }));

    var selectionActions: string[] = ["action.clipboardCopyAction", "action.clipboardPasteAction", "action.clipboardCutAction"]
    selectionActions.forEach((selectionAction) => {
        context.subscriptions.push(vscode.commands.registerCommand("emacs." + selectionAction, () => {
            vscode.commands.executeCommand("editor." + selectionAction).then(exitRegionMode);
        }))
    })

    var deletionActions: string[] = ["deleteLeft", "deleteRight"]
    deletionActions.forEach((deletionAction) => {
        context.subscriptions.push(vscode.commands.registerCommand("emacs." + deletionAction, () => {
            vscode.commands.executeCommand(deletionAction).then(exitRegionMode);
        }))
    })
}

function startRegionMode() {
    setRegionMode(true).then(removeSelection);
}

function exitRegionMode() {
    setRegionMode(false).then(removeSelection);
}

function setRegionMode(value): Thenable<{}> {
    return vscode.commands.executeCommand('setContext', 'inRegionMode', value);
}

function removeSelection() {
    var pos: vscode.Position = vscode.window.activeTextEditor.selection.active;
    vscode.window.activeTextEditor.selection = new vscode.Selection(pos, pos);
}

// this method is called when your extension is deactivated
export function deactivate() {
    setRegionMode(false)
}