"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { languageOptions } from "../../config/config";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export type selectedLanguageOptionProps = {
    language: string;
    version: string;
    aliases: string[];
    runtime?: string;
};
export default function SelectLanguages({
    onSelect,
    selectedLanguageOption,
}: {
    onSelect: any;
    selectedLanguageOption: selectedLanguageOptionProps;
}) {
    // const [selected, setSelected] = useState(languageOptions[0]);
    // console.log(selected);

    return (
        <Listbox value={selectedLanguageOption} onChange={onSelect}>
            {({ open }) => (
                <>
                    <div className="tw-relative">
                        <Listbox.Button className="tw-relative tw-w-full tw-cursor-default tw-rounded-md tw-bg-white tw-py-2 tw-pl-3 tw-pr-10 tw-text-left tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 sm:tw-text-sm sm:tw-leading-6">
                            <span className="tw-flex tw-items-center">
                                <span className="tw-ml-3 tw-block tw-truncate tw-capitalize">
                                    {selectedLanguageOption.language} (
                                    {selectedLanguageOption.version})
                                </span>
                            </span>
                            <span className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-ml-3 tw-flex tw-items-center tw-pr-2">
                                <ChevronUpDownIcon
                                    className="tw-h-5 tw-w-5 tw-text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="tw-transition tw-ease-in tw-duration-100"
                            leaveFrom="tw-opacity-100"
                            leaveTo="tw-opacity-0"
                        >
                            <Listbox.Options className="tw-absolute tw-z-10 tw-mt-1 tw-max-h-56 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm">
                                {languageOptions.map((item) => (
                                    <Listbox.Option
                                        key={item.language}
                                        className={({ active }) =>
                                            classNames(
                                                active ? "tw-bg-indigo-600 tw-text-white" : "tw-text-gray-900",
                                                "tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-3 tw-pr-9"
                                            )
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="tw-flex tw-items-center">
                                                    <span
                                                        className={classNames(
                                                            selected ? "tw-font-semibold" : "tw-font-normal",
                                                            "tw-ml-3 tw-block tw-truncate tw-capitalize"
                                                        )}
                                                    >
                                                        {item.language}({item.version})
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? "tw-text-white" : "tw-text-indigo-600",
                                                            "tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-4"
                                                        )}
                                                    >
                                                        <CheckIcon className="tw-h-5 tw-w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
}