import './index.scss'


interface TextAreaProps {
  onTextChange: (text: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ onTextChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    onTextChange(text);
  };

  return <textarea className="text-area" placeholder="Paste your text here..." onChange={handleChange} autoFocus/>
}

export default TextArea