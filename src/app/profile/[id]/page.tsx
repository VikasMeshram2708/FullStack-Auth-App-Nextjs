import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div className="text-center">
      <h1>
        UserProfile :{" "}
        <span className="bg-orange-500 px-2 py-1 text-white font-semibold">
          {params.id}
        </span>
      </h1>
    </div>
  );
};

export default UserProfile;
