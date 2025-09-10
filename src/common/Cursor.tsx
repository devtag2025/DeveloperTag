'use client';

import useCanvasCursor from "./useCursor";


const CanvasCursor = () => {
    useCanvasCursor();

    return <canvas className='pointer-events-none fixed inset-0 z-[10000]' id='canvas' />;
};
export default CanvasCursor;
