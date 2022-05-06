import React from "react";

function Loading() {
  return (
    <div className="text-center">
      <div class="spinner-border" role="status" style={{marginTop:'100px',width:'100px', height:'100px'}}>
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
