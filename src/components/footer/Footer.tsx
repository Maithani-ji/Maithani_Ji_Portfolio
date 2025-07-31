const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Created and Coded with ❤️ by Tushar Maithani`;

  return (
    <footer className="flex flex-col items-center justify-center w-full p-5 mt-10 bg-offGrayCard dark:bg-offSecondaryBlackCard">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
        {/* Left - Branding */}
        <div className="mb-2 sm:mb-0">
          <p className="text-base font-bold text-textBlack dark:text-textWhite underline underline-offset-2">TM</p>
        </div>

        {/* Right - Copyright */}
        <div className="text-center text-sm text-textGray dark:text-gray-400">
          <span className="hover:underline hover:underline-offset-4 transition-all ease-in-out duration-200">
            {footerText}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
