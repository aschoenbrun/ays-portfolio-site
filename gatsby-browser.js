// FONTS
require("typeface-fira-code");
require("typeface-fira-sans");
require("typeface-open-sans");

// Prompt user to update page
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
