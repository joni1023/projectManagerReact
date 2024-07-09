import React from "react";

export function ProfileImage (props) {
  const nameParts = props.name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  return (
    <span className="user-profile-image">
      {firstNameInitial}
      {lastNameInitial}
    </span>
  );
};
