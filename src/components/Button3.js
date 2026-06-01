import React from "react";
import { Link } from "react-router-dom";

function Button3({ name, link, icon }) {
  const isExternal =
    link && (link.startsWith("http://") || link.startsWith("https://"));

  return (
    <div>
      <button className="Button3">
        {isExternal ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span>{icon}</span>
            {name}
          </a>
        ) : (
          <Link to={link}>
            <span>{icon}</span>
            {name}
          </Link>
        )}
      </button>
    </div>
  );
}

export default Button3;
