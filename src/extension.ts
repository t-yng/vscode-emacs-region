// Copyright (c) 2016 Nisheet Jain
// Released under the MIT license
// https://github.com/nisheetjain/vscode-emacs/blob/master/LICENSE.txt

'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

var inRegionMode: boolean = false;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(vscode.commands.registerCommand('emacs.startRegionMode', ()=>{
        removeSelection();
        inRegionMode = true;
    }));

    context.subscriptions.push(vscode.commands.registerCommand('emacs.exitRegionMode', ()=>{
        if(!inRegionMode){
            return ;
        }
        removeSelection();
        inRegionMode = false;
    }));

    var cursorMoves : string[] = ["cursorUp", "cursorDown", "cursorLeft", "cursorRight"];

    cursorMoves.forEach((cursormove) => {
        context.subscriptions.push(vscode.commands.registerCommand("emacs."+cursormove, ()=>{
            vscode.commands.executeCommand(inRegionMode? cursormove+"Select" : cursormove);
        }));
    });
}

function removeSelection(){
    var pos: vscode.Position = vscode.window.activeTextEditor.selection.active;
    vscode.window.activeTextEditor.selection = new vscode.Selection(pos, pos);
}

// this method is called when your extension is deactivated
export function deactivate() {
}