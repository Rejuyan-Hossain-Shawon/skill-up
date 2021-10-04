import React from 'react';

const NotFound = () => {
    const style = {
        marginBottom: "290px"
    }
    return (
        <div style={style} className="pt-5 ">
            <h1 className="text-danger">Error 404!!!!!!!</h1>
            <h2 >Your requested page can not be found  </h2>
        </div>
    );
};

export default NotFound;