import { Link } from 'react-router-dom';
import errorImg from '/error.jpg';

export default function Error({message, error}) {
    return (
        <>
            <img className='h-80' src={errorImg} alt="" />
            <div className="flex flex-col gap-4">
                <h1 className="font-bold">{error}</h1>
                <p>{message}</p>
                <Link to="/"> <span class="icon-[ri--arrow-go-back-fill]"></span> Go back</Link>
            </div>
        </>
    );
}