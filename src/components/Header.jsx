import pin from '../images/pin.png';

const Header = () => {
  return (
    <div className="min-h-20 flex justify-between py-5 px-3 relative">
      <div className="flex items-center justify-center mb-5">
        <img src={pin} alt="PIN" width="30px" className='mx-1'/>
        <div>
          <div>Address - #123, ABC CITY</div>
          <div className="text-xs text-gray-800">9999988888</div>
        </div>
      </div>
      <div className="flex items-center bg-amber-700 text-white rounded-t-[15px] px-3 sm:px-10 text-center overflow-x-hidden absolute -bottom-1.25 sm:-bottom-1.5 right-2 h-10 sm:h-11 sm:right-10 sm:text-[19px]">DELIVERING IN 20 MINUTES</div>
    </div>
  );
};

export default Header;