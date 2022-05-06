import React from "react";

function SmallLoading() {
  return (

      <div
        class="spinner-border"
        role="status"
        style={{ marginTop: "5px", width: "15px", height: "15px",display:'inline-block' }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    
  );
}

export default SmallLoading;
