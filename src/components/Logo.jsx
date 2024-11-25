const Logo = ({ isFooter }) => {
  return (
    <img 
      src={isFooter ? "/logos/Asset 2.svg" : "/logos/Asset6.svg"}
      alt="سن لايت للمقاولات الكهربائية" 
      className="logo-svg"
    />
  );
};

export default Logo; 