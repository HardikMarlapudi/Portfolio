import React, {useState, useEffect} from 'react';
import '/src/css/Toggle.css';

    const Toggle = () => {
        const [toggle, setToggle] = useState();

        const toggleHandler = () => {
            setToggle((prev) => !prev);
        };

        useEffect(() => {
            if (toggle) {
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
            } else {
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
            }
        }, [toggle])

    return (
    <div>
        <button id="toggleIcon" onClick={toggleHandler}>
        {toggle ? '☾' : '☀'}
        </button>
    </div>
        );
    };

export default Toggle;
