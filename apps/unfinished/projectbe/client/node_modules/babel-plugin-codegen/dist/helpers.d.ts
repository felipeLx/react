/// <reference types="node" />
import type babelCore from '@babel/core';
import type { Primitive } from 'type-fest';
declare type CodegenModuleExport = string | ((...args: Array<any>) => string);
declare type CompiledESModule = {
    __esModule: boolean;
    default: CodegenModuleExport;
};
declare const getFilename: (fileOpts: babelCore.TransformOptions) => string;
declare function requireFromString(code: string | Buffer, filename: string): CodegenModuleExport | CompiledESModule;
declare type GetReplacementOptions = {
    code: string | Buffer;
    fileOpts: babelCore.TransformOptions;
    args?: Array<any>;
};
declare function getReplacement({ code, fileOpts, args }: GetReplacementOptions, babel: typeof babelCore): babelCore.types.Statement | babelCore.types.Statement[];
declare type ReplaceOptions<SpecificNode extends babelCore.types.Node> = {
    path: babelCore.NodePath<SpecificNode>;
    code: string | Buffer;
    fileOpts: babelCore.TransformOptions;
    args?: Array<any>;
};
declare function replace<SpecificNode extends babelCore.types.Node>({ path, code, fileOpts, args }: ReplaceOptions<SpecificNode>, babel: typeof babelCore): void;
declare function resolveModuleContents({ filename, module, }: {
    filename: string;
    module: string;
}): {
    code: Buffer;
    resolvedPath: string;
};
declare function isCodegenComment(comment: babelCore.types.Comment): boolean;
declare function isPropertyCall(path: babelCore.NodePath, name: string): boolean;
declare type LooksLikeTarget = any;
declare type LooksLikeMatch = Primitive | ((a: LooksLikeTarget) => boolean) | {
    [key: string]: LooksLikeMatch;
};
declare function looksLike(a: LooksLikeTarget, b: LooksLikeMatch): boolean;
export { requireFromString, getReplacement, replace, resolveModuleContents, isCodegenComment, isPropertyCall, looksLike, getFilename, };
