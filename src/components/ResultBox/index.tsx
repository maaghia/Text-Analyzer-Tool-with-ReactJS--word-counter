import './index.scss'
interface ResultBoxProps {
  resultBar: { title: string; value: number }[];
}


const ResultBox: React.FC<ResultBoxProps> = ({ resultBar }) => {

  
  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox;