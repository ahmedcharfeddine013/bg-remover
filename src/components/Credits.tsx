import React from "react";

const Credits = () => {
  return (
    <div className="bg-gray-700 py-6 flex items-center justify-center flex-col gap-3 text-white">
      <p>Copyright 2024 BGR AI - All rights reserved.</p>
      <div className="text-center gap-2">
        <p className="text-xs">
          &quot;BGR&quot; is a brand of &quot;BGR.AI LTD. Registered in Tunisia
          No: &quot;13257563&quot;.
        </p>
        <p className="text-xs">
          All trademarks, service marks, trade names, product names, logos and
          trade dress appearing on our website are the property of their
          respective owners.
        </p>
      </div>
    </div>
  );
};

export default Credits;
