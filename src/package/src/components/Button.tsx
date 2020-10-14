import * as React from "react";

function Button({}) {
  return (
    <div>
      <button
        onClick={() => {
          alert("clicked");
        }}
      >
        Click Me Updated
      </button>
    </div>
  );
}

export default Button;
