'use client';

import clsx from "clsx";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
    confirm?: boolean;
    big?: boolean;
    traslucid?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
    confirm,
    big,
    traslucid
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
                flex
                justify-center
                rounded-full
                px-3
                py-2
                text-sm
                font-semibold
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                self-center
                active:scale-100
                transition
            `,
                disabled && "opacity-50 cursor-not-allowed",
                fullWidth && "w-full hover:scale-105",
                !fullWidth && "w-52 hover:scale-110",
                big && "text-xl",
                confirm && "bg-green-500/50 hover:bg-green-500/80 focus-visible:outline-green-600",
                danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
                !secondary && !danger && !confirm && traslucid && "bg-white/30 dark:bg-gray-900 hover:bg-gray-100/50 dark:hover:bg-gray-950 focus-visible:outline-gray-600 dark:focus-visible:outline-gray-200",
                !secondary && !danger && !confirm && !traslucid && "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950 focus-visible:outline-gray-600 dark:focus-visible:outline-gray-200"
            )} 
        >
            {children}
        </button>
    );
}
 
export default Button;