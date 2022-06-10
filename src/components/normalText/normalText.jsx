import "./style.scss";
const NormalText = ({
  text,
  color = "#424242",
  fontSize = "16px",
  fontFamily = "Open Sans",
  fontWeight = "400",
  lineHeight = "155%",
  width,
  textAlign,
  className,
  margin,
}) => {
  return (
    <p
      className={`${className} normal_text`}
      style={{
        color: `${color}`,
        fontSize: `${fontSize}`,
        fontWeight: `${fontWeight}`,
        fontFamily: `${fontFamily}`,
        lineHeight: `${lineHeight}`,
        width: `${width}`,
        textAlign: `${textAlign}`,
        margin: `${margin}`,
      }}
    >
      {text}
    </p>
  );
};

export default NormalText;
