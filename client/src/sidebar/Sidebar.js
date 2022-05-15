import React, { useState, useEffect } from 'react';
function Sidebar () {
    const [isLogin, setIsLogin] = useState(false);
    const handleLoginSuccess = () => {
        setIsLogin(true);
    }
    const handleLogout = () => {
        setIsLogin(false);
    }
    return (
        <div>

        </div>
    )
}
export default Sidebar;