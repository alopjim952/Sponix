import React, { createContext, useContext } from "react";

export const SongContext = createContext();
export const AuthContext = createContext(localStorage.getItem('user'));