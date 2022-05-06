import React from "react";

function Error({error}) {
  return (
    <div>
      <div class="alert alert-danger w-50 "style={{marginLeft:'30%'}} role="alert">
       {error}
      </div>
    </div>
  );
}

export default Error;
