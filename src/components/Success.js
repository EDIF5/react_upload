import React from "react";

function Success({success}) {
  return (
    <div>
      <div class="alert alert-success" role="alert">
        {success}
      </div>
    </div>
  );
}

export default Success;
