const Logo = ({ isFooter }) => {
  return (
    <img 
      src={isFooter ? "/assets/Asset 2.svg" : "/assets/Asset 6.svg"}
      alt="سن لايت للمقاولات الكهربائية" 
      className="logo-svg"
    />
  );
};

export default Logo; 