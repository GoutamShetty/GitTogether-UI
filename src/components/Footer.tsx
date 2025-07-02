/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Footer
 */

import React from "react";

interface IProps {}

const Footer: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 fixed bottom-0">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
