/** @type {import("tailwindcss").Config} */
module.exports = {
    important: true,
    corePlugins: {
        preflight: false,
    },
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        spacing: {
            0: "0px",
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "20px",
            6: "24px",
            7: "28px",
            8: "32px",
            9: "36px",
            10: "40px",
        },
        fontSize: {
            12: "12px",
            14: "14px",
            16: "16px",
            20: "20px",
        },
        lineHeight: {
            22: "22px",
            20: "20px",
            24: "24px",
        },
        borderRadius: {
            DEFAULT: 2,
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "20px",
            6: "24px",
        },
        fontFamily: {
            roboto: ['"Roboto"'],
        },
        fontWeight: {
            medium: 500,
            regular: 400,
        },
        colors: {
            transparent: "transparent",
            backgroundDefault: "#F4F5FA",
            primary: {
                DEFAULT: "#D9DDFF",
                base: "#102C89",
                50: "#E9ECFF",
                100: "#D9DDFF",
                200: "#A8B2FF",
                300: "#7487FF",
                400: "#295BFF",
                500: "#003BBF",
                600: "#002175",
                700: "#000C3A",
            },
            secondary: {
                DEFAULT: "#FFDBD7",
                100: "#FFDBD7",
                200: "#FFA495",
                300: "#FF6229",
                400: "#C74500",
                500: "#8D2E00",
                600: "#571900",
                700: "#260700",
            },
            tertiary: {
                100: "#C6FF29",
                200: "#A3D400",
                300: "#82AB00",
                400: "#638300",
                500: "#465D00",
                600: "#2A3A00",
                700: "#111A00",
            },
            gray: {
                DEFAULT: "#DEDEE0",
                charts: "#4F4F4F",
                100: "#DEDEE0",
                200: "#B6B7BB",
                300: "#909097",
                400: "#6B6C74",
                500: "#494A50",
                600: "#2A2A2E",
                700: "#101113",
            },
        },
        extend: {
            boxShadow: {
                DEFAULT: "0px 0px 10px rgba(0, 0, 0, 0.05)",
                base: "0px 2px 16px 0px #E7E8EC",
            },
        },
    },
    plugins: [
        /* Скрипт для обращения к стилям tailwind через css переменные, чтобы стилизовать antd компоненты через
        ConfigProvider в App.tsx

        ref: https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574
        */
        function ({addBase, theme}) {
            function extractColorVars(colorObj, colorGroup = "") {
                return Object.keys(colorObj).reduce((vars, colorKey) => {
                    const value = colorObj[colorKey];
                    const cssVariable =
                        colorKey === "DEFAULT" ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`;

                    const newVars =
                        typeof value === "string" ? {[cssVariable]: value} : extractColorVars(value, `-${colorKey}`);

                    return {...vars, ...newVars};
                }, {});
            }

            addBase({
                ":root": extractColorVars(theme("colors")),
            });
        },
    ],
};
