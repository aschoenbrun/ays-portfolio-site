import React from "react";
import Button from "./Button";

const RepoLink = ({ appBuilt, repoUrl }) => {
  const githubButtonText = appBuilt
    ? `View code for this ${appBuilt} on GitHub`
    : "View code on GitHub";
  return (
    <Button
      url={repoUrl}
      iconPubId="AYS%20Portfolio%20Site%20Images/Built%20With%20Icons/GitHub-Mark-120px-plus_dmkqmp"
      text={githubButtonText}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default RepoLink;
