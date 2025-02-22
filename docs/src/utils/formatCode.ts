import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserTypescript from "prettier/parser-typescript";

export async function formatCode(code: string) {
    return code.trim();
}
