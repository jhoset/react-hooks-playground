import PropTypes from 'prop-types';
import { UserContext } from "./UserContext"
import { useState } from 'react';


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}