import React from "react";
import Navbar from "./components/Navbar";
import UnControlledForm from "./components/UnControlledForm";
import LibraryValidatio from "./components/LibraryValidatio";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <UnControlledForm /> */}
      <LibraryValidatio />
    </div>
  );
};

export default App;
