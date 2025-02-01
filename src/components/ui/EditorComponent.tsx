"use client";
import React, { useRef, useState, useEffect } from "react";
import SelectLanguages, { selectedLanguageOptionProps } from "../SelectLanguage";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { Loader, Play, TriangleAlert } from "lucide-react";
import { codeSnippets, languageOptions } from "../../../config/config";
import { compileCode } from "../../../actions/compile";
import { Spinner } from "@/once-ui/components";
import toast from "react-hot-toast";

export interface CodeSnippetsProps {
    [key: string]: string;
}

export default function EditorComponent() {
    const { theme } = useTheme();
    const [sourceCode, setSourceCode] = useState(codeSnippets["javascript"]);
    const [languageOption, setLanguageOption] = useState(languageOptions[0]);
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState([]);
    const [err, setErr] = useState(false);
    const [componentLoading, setComponentLoading] = useState(true);
    const editorRef = useRef(null);

    useEffect(() => {
        setTimeout(() => setComponentLoading(false), 1000); // Simulating loading delay
    }, []);

    function handleEditorDidMount(editor: any) {
        editorRef.current = editor;
        editor.focus();
    }
    function handleOnchange(value: string | undefined) {
        if (value) {
            setSourceCode(value);
        }
    }
    function onSelect(value: selectedLanguageOptionProps) {
        setLanguageOption(value);
        setSourceCode(codeSnippets[value.language]);
    }

    async function executeCode() {
        setLoading(true);
        const requestData = {
            language: languageOption.language,
            version: languageOption.version,
            files: [
                {
                    content: sourceCode,
                },
            ],
        };
        try {
            const result = await compileCode(requestData);
            setOutput(result.run.output.split("\n"));
            console.log(result);
            setLoading(false);
            setErr(false);
            toast.success("Compiled Successfully");
        } catch (error) {
            setErr(true);
            setLoading(false);
            toast.error("Failed to compile the Code");
            console.log(error);
        }
    }

    if (componentLoading) {
        return (
            <div className="tw-flex tw-justify-center tw-items-center tw-h-screen">
                <Spinner size="m" />
            </div>
        );
    }

    return (
        <div className="tw-w-full tw-h-full tw-flex-1 tw-p-6">
            {/* EDITOR HEADER */}
            <div className="tw-flex tw-items-center tw-justify-between tw-mb-4">
                <h2 className="tw-text-2xl tw-font-semibold tw-tracking-tight">
                    Codex
                </h2>
                <div className="tw-flex tw-items-center tw-space-x-2">
                    <div className="tw-w-[230px]">
                        <SelectLanguages
                            onSelect={onSelect}
                            selectedLanguageOption={languageOption}
                        />
                    </div>
                </div>
            </div>
            {/* EDITOR */}
            <div className="tw-bg-slate-400 dark:tw-bg-slate-950 tw-p-3 tw-rounded-2xl tw-h-[calc(100vh-12rem)]">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="tw-w-full tw-h-full tw-rounded-lg tw-border dark:tw-bg-slate-900"
                >
                    <ResizablePanel defaultSize={100}>
                        <Editor
                            theme={theme === "dark" ? "vs-dark" : "vs-light"}
                            height="100%"
                            defaultLanguage={languageOption.language}
                            defaultValue={sourceCode}
                            onMount={handleEditorDidMount}
                            value={sourceCode}
                            onChange={handleOnchange}
                            language={languageOption.language}
                            options={{
                                minimap: { enabled: false },
                                scrollBeyondLastLine: false,
                            }}
                        />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={50}>
                        <div className="tw-h-full tw-flex tw-flex-col tw-bg-slate-300 dark:tw-bg-slate-900">
                            <div className="tw-flex tw-items-center tw-pdtw-justify-between tw-bg-slate-400 dark:tw-bg-slate-950 tw-px-6 tw-py-2">
                               <h2 className="tw-p-5">Output</h2>

                                {loading ? (
                                    <Button
                                        disabled
                                        size="sm"
                                        className="dark:tw-bg-teal-600 dark:tw-hover:bg-purple-700 tw-text-slate-100 tw-bg-slate-800 tw-hover:bg-slate-900"
                                    >
                                        <Loader className="tw-w-4 tw-h-4 tw-mr-2 tw-animate-spin" />
                                        <span>Running please wait...</span>
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={executeCode}
                                        size="sm"
                                        className="dark:tw-bg-teal-600 dark:tw-hover:bg-purple-700 tw-text-slate-100 tw-bg-slate-800 tw-hover:bg-slate-900"
                                    >
                                        <Play className="tw-w-4 tw-h-4 tw-mr-2" />
                                        <span>Run</span>
                                    </Button>
                                )}
                            </div>
                            <div className="tw-flex-1 tw-overflow-auto tw-px-6 tw-py-4">
                                {err ? (
                                    <div className="tw-flex tw-items-center tw-space-x-2 tw-text-red-500 tw-border tw-border-red-600 tw-px-6 tw-py-6">
                                        <TriangleAlert className="tw-w-5 tw-h-5 tw-mr-2 tw-flex-shrink-0" />
                                        <p className="tw-text-xs">
                                            Failed to Compile the Code, Please try again!
                                        </p>
                                    </div>
                                ) : (
                                    <div className="tw-space-y-1">
                                        {output.map((item, index) => (
                                            <p className="tw-text-sm" key={index}>
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
