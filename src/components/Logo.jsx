const Logo = ({ isFooter }) => {
  return (
    <img 
      src={isFooter ? "/assets/logos/Asset2.svg" : "/assets/logos/Asset6.svg"}
      alt="سن لايت للمقاولات الكهربائية" 
      className="logo-svg"
    />
  );
};

export default Logo; 