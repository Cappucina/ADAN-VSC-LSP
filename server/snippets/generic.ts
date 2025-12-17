import { CompletionItem, CompletionItemKind, InsertTextFormat } from "vscode-languageserver/node";

export const snippet_generic_snippets: CompletionItem[] = [
    {
        label: "init",
        kind: CompletionItemKind.Snippet,
        detail: "Define starting point of a ADAN program.",
        documentation: "```adan\ninclude adan.io;\n\nprogram::int main() {\n\treturn 0;\n}\n```",

        insertText: "include adan.io;\n\nprogram::void main() {\n\treturn;\n}",
        insertTextFormat: InsertTextFormat.Snippet
    }
];