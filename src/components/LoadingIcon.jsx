import Loading from '/loading.gif';

export default function LoadingIcon() {
    return (
        <div className='flex w-3/4 h-44 items-center justify-center'>
            <img className='w-2/4 lg:w-1/4 h-44' src={Loading} alt="" />
        </div>
    );
}