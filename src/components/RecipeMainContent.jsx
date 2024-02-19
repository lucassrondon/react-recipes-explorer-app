import { Outlet } from "react-router-dom";

export default function RecipeMainContent({ instructions, ingredients, main_img }) {

    return (
        <div className='flex flex-col lg:flex-row justify-center gap-6 min-h-screen w-3/4 lg:w-3/4 font-bold text-justify'>
            <Outlet context={{ instructions, ingredients }} />

            <div className='flex-col md:flex w-full lg:w-2/5 h-fit lg:h-full gap-2'>
                <div className='hidden lg:flex w-full p-1 border-4 border-gray-300 rounded-2xl bg-slate-100'>
                    <img src={main_img} alt="" className='w-full h-full rounded-2xl' />
                </div>
            </div>
        </div>
    );
}