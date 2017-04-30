// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'; 


make_all() {
	if (!vscode.window.activeTextEditor || !LANGUAGE_IS_FORTRAN) {
	    return
	}
	RUN_MAKE_COMMAND
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.commands.registerCommand('fortran.make_all', () => make_all())
	GET_OUTPUT_TO_SOME_CONSOLE
}
