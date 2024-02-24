import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import DropdownButton from "./DropdownButton";
import Question from "./Question";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div>
      <div className="">
        <div className="question-editor">
          <Question/>
        </div>
        <div className="d-flex justify-content-between">
          <div className="code-editor">
            {/* <DropdownButton language={language} onSelect={onSelect} /> */}
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="50vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </div>
          <Output width="50%" editorRef={editorRef} language={language} />
        </div>
      </div>
    </div>
  );
};
export default CodeEditor;
