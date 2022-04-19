import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          textDecoration: "none",
          cursor: "pointer",
          color:
            props.switchDefault === true && props.theme === "light"
              ? "black"
              : "white",
          paddingBottom: "5px",
          fontWeight: match ? "900" : "",
          borderBottom: match && !props.switchDefault ? ".3px solid white" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " "}
    </div>
  );
};
