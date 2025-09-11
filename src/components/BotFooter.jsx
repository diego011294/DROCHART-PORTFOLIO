import { Icon } from "@iconify/react/dist/iconify.js"


export const BotFooter = () => {
    return (
        <div className="p-3 md:p-5">
            <div className="flex items-center justify-center gap-2">
                <p className="text-sm text-gray-600 font-raleway">
                    Diseño y desarrollo <span className="opacity-1 font-black italic text-tipo">DROCH.ART</span> | 2025
                </p>
                <img src="/img/codebar.svg" alt="codebar" />
            </div>
        </div>
    )
}