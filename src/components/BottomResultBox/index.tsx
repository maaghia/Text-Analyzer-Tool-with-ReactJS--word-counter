import './index.scss'

interface BottomResultBoxProps {
  bottomResultBar: { title: string; value: string }[];
}

const BottomResultBox: React.FC<BottomResultBoxProps> = ({ bottomResultBar }) => {


  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox;
