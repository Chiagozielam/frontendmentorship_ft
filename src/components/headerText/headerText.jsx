const HeaderText = ({
  text,
  color = " #061088",
  fontSize = "32px",
  fontFamily = "Open Sans",
  fontWeight = "700",
  className,
}) => {
  return (
    <h1
      className={className}
      style={{
        color: `${color}`,
        fontSize: `${fontSize}`,
        fontWeight: `${fontWeight}`,
        fontFamily: `${fontFamily}`,
      }}
    >
      {text}
    </h1>
  );
};

export default HeaderText;
