'use client'

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    isOpen?: boolean;
    title: string;
    description: string;
    onClose: () => void;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    title,
    description,
    onClose,
    children
}) => {
    return (
        <Transition.Root
            show={isOpen}
            as={Fragment}
        >
            <Dialog
                as="div"
                className="relative z-[999]"
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="
                        fixed
                        inset-0
                        bg-gray-500
                        bg-opacity-75
                        transition-opacity
                    "/>
                </Transition.Child>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="
                        flex
                        min-h-full
                        items-center
                        justify-center
                        p-4
                        text-center
                        sm:p-0
                    "
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="ease-in duration-200"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="
                                relative
                                transform
                                overflow-hidden
                                rounded-lg
                                bg-white
                                dark:bg-black
                                p-4
                                text-left
                                shadow-xl
                                transition-all
                                w-full
                                sm:my-8
                                sm:w-full
                                sm:max-w-lg
                                sm:p-6
                            ">
                                <div className="
                                    absolute
                                    right-0
                                    top-0
                                    hidden
                                    pr-4
                                    pt-4
                                    sm:block
                                    z-10
                                ">
                                    <button
                                        type="button"
                                        className="
                                            rounded-md
                                            bg-white
                                            dark:bg-black
                                            text-gray-400
                                            dark:text-gray-300
                                            hover:text-gray-500
                                            dark:hover:text-gray-200
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-teal-500
                                            dark:focus:ring-amber-500
                                        "
                                        onClick={onClose}
                                    >
                                        <span className="sr-only"></span>
                                        <IoClose className="h-6 w-6"/>
                                    </button>
                                </div>
                                <Dialog.Title
                                className="
                                    text-xl
                                    text-center
                                    font-bold
                                    mb-4
                                "
                                >
                                    {title}
                                </Dialog.Title>
                                <Dialog.Description
                                className="
                                    mb-5
                                    text-sm
                                    leading-normal
                                    text-center
                                "
                                >
                                    {description}
                                </Dialog.Description>
                                <div>
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
 
export default Modal;