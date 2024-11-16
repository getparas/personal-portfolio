import { DownloadIcon } from "@/assets";
import Button from "@/components/Ui/Button";
import React from "react";

const Buttons: React.FC = () => {
  const handleCancelClick = () => {
    console.log("Cancel button clicked");
    // Add your cancel logic here
  };

  const handleDownloadClick = () => {
    console.log("Download CV button clicked");
    // Add your download logic here
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center gap-4 p-4">
        <Button
          variant="primary"
          className="flex items-center justify-center w-40"
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-2 w-60"
          onClick={handleDownloadClick}
        >
          Download CV
          <img src={DownloadIcon} alt="Download" />
        </Button>
      </div>
    </main>
  );
};

export default Buttons;
