import { useRouteError } from 'react-router-dom';
import Error from '../components/Error';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className='flex items-center flex-col md:flex-row justify-center w-screen h-screen'>
            <Error error={error.statusText} message={error.data} /> 
        </div>
    );
}