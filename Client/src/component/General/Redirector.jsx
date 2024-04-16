import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";

const Redirector = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    // Call navigate() inside the useEffect hook
    user?.is_staff ? navigate("/Admin") : navigate("/Student");
  }, [navigate, user]);

  // Return null or an empty fragment since this component doesn't render anything visible
  return null;
};

export default Redirector;
