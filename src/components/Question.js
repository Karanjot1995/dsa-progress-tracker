import { useState } from "react";
// import { Box, Button, Text, useToast } from "@chakra-ui/react";
// import { executeCode } from "../api";

const Question = ({ editorRef, language }) => {
  // const toast = useToast();
  // const [output, setOutput] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  return (
    <div className="question mb-3">
      <div className="">
        <div className="title mb-2">Question:</div>
      </div>
      <textarea className="box"/>
    </div>
  );
};
export default Question;
