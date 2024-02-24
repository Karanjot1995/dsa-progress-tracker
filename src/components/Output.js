import { useState } from "react";
// import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  // const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      // toast({
      //   title: "An error occurred.",
      //   description: error.message || "Unable to run code",
      //   status: "error",
      //   duration: 6000,
      // });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="output">
      <div className="output-header">
        <div className="title mb-2">Output:</div>
        <button className="output-btn" isLoading={isLoading} onClick={runCode}>
          Run Code
        </button>
      </div>

      <div className="box">
        {output
          ? output.map((line, i) => <div key={i}>{line}</div>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};
export default Output;
