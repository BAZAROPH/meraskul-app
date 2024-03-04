import React from 'react'
import { useAuth } from '../context/AuthContext'
import AppNavigator from './AppNavigator';
import ParentNavigator from './ParentNavigator';
import TeacherNavigator from './TeacherNavigator';

const Navigator = () => {
    const {userIsAuthenticated , role} = useAuth();

    return (
        <>
            {
                userIsAuthenticated ? (
                        role === 'Parent' ? (
                            <ParentNavigator/>
                        ) : (
                            <TeacherNavigator/>
                        )
                ) : (
                    <AppNavigator/>
                )
            }
        </>
    )
}

export default Navigator
