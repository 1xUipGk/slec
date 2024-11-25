const Logo = ({ isFooter }) => {
  return (
    <img 
      src={isFooter ? "/src/assets/Asset 2.svg" : "/src/assets/Asset6.svg"}
      alt="سن لايت للمقاولات الكهربائية" 
      className="logo-svg"
    />
  );
};

export default Logo; 