import config from "@/config";
import Link from "next/link";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Terms of Service", href: "/tos" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <Link href="/" className="mb-4" style={{ color: "#FFFFFF" }}>
        <svg
          width="188"
          height="28"
          viewBox="0 0 188 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-32"
        >
          <g clipPath="url(#clip0_22_169)">
            <path d="M9.76126 5.88624H9.72797C9.79454 5.61047 9.72797 5.4393 9.52352 5.4393C9.31908 5.4393 9.01002 5.57718 8.66769 5.78163C7.40296 6.60418 5.52013 7.21753 3.84174 7.0844C3.6373 7.11768 3.46613 7.22229 3.43285 7.46002C3.39956 7.73579 3.29496 8.04008 3.26168 8.31585C3.2284 8.55358 3.39956 8.59162 3.49941 8.59162C4.73086 8.59162 5.07319 9.34285 5.07319 10.4745C5.07319 10.8501 5.03991 11.297 4.96859 11.7059V11.6726C4.62626 14.1355 3.59926 19.7174 3.05248 22.1851C2.67686 23.7922 2.09204 25.1615 0.622862 25.1615C0.347093 25.1615 0.213964 25.2661 0.175927 25.5371C0.142644 25.8129 0.0380426 26.1172 0.00476026 26.3929C-0.0285221 26.5974 0.109362 26.6687 0.209209 26.6687C1.40738 26.5641 2.74343 26.4975 3.97487 26.4975C5.20632 26.4975 6.50909 26.5641 7.67397 26.6687C7.87842 26.6354 8.04959 26.5308 8.08287 26.2931C8.11615 26.0173 8.22076 25.7463 8.25404 25.4705C8.28732 25.2661 8.22076 25.1615 8.01631 25.1615C6.78486 25.1615 6.44253 24.4435 6.44253 23.3452C6.44253 22.9363 6.47581 22.4894 6.54713 22.0425V22.0757C6.95603 19.1326 8.77229 8.86263 9.76601 5.88148L9.76126 5.88624Z" fill="currentColor"/>
            <path d="M23.4879 5.26813C16.3654 5.26813 11.7772 11.1924 11.5395 17.4923C11.2637 23.6543 14.863 27.0443 19.998 27.0443C26.9825 27.0443 31.5374 21.1201 31.8417 14.8202C32.1175 8.62489 28.3851 5.26813 23.4879 5.26813ZM27.7337 14.0309V13.9976C27.496 19.3038 24.5149 25.4658 20.1311 25.4658C16.6412 25.4658 15.4383 22.1803 15.6142 18.3101C15.8519 12.9706 18.8331 6.77059 23.2834 6.77059C26.7067 6.77059 27.9762 10.056 27.7337 14.0309Z" fill="currentColor"/>
            <path d="M44.7506 5.26813C37.6281 5.26813 33.0399 11.1924 32.8022 17.4923C32.5264 23.6543 36.1257 27.0443 41.2607 27.0443C48.2452 27.0443 52.8001 21.1201 53.1044 14.8202C53.3802 8.62489 49.6478 5.26813 44.7506 5.26813ZM48.9917 14.0309V13.9976C48.754 19.3038 45.7728 25.4658 41.389 25.4658C37.8991 25.4658 36.6962 22.1803 36.8721 18.3101C37.1099 12.9706 40.091 6.77059 44.5414 6.77059C47.9647 6.77059 49.2342 10.056 48.9917 14.0309Z" fill="currentColor"/>
            <path d="M115.362 16.6697C114.23 16.6697 113.445 17.4923 113.136 18.3814H113.17C113.921 18.3814 114.472 19.1707 114.472 20.1977C114.472 22.7652 111.149 26.3929 106.665 26.3929C102.182 26.3929 98.9628 22.7271 98.9628 17.1832C98.9628 11.0878 102.866 1.60707 109.951 1.60707C114.23 1.60707 115.566 4.93055 116.969 8.42045C117.106 8.79607 117.515 8.96723 117.996 8.96723C118.476 8.96723 119.056 8.65818 119.227 8.17796L117.482 0.751237C117.377 0.171173 117.035 -0.137878 116.522 0.204455L115.014 1.19817C113.54 0.375622 110.769 0.137891 110.288 0.137891C100.703 0.137891 94.3365 8.11616 94.3365 15.7473V16.2275C94.3365 23.7922 99.8139 28.0048 106.285 28.0048C112.756 28.0048 117.687 23.5877 117.687 19.4797C117.687 17.5303 116.455 16.6697 115.357 16.6697H115.362Z" fill="currentColor"/>
            <path d="M135.992 25.1615C134.794 25.1615 134.042 24.4103 133.8 22.594L132.977 15.714C132.773 13.9358 132.635 12.1861 132.464 10.4079L132.055 6.16199C131.988 5.99083 131.851 5.78638 131.679 5.78638C131.232 5.85294 130.139 5.89098 129.045 5.89098C128.085 5.89098 126.991 5.8577 126.235 5.78638C126.031 5.81966 125.926 5.95754 125.826 6.23331L125.589 7.02258C125.589 7.19375 125.727 7.29835 125.826 7.29835C126.853 7.29835 126.958 7.98301 126.616 8.87213L120.216 22.0852C119.393 23.659 118.195 25.1662 116.621 25.1662C116.346 25.1662 116.213 25.3041 116.141 25.5751L115.937 26.3977C115.87 26.6021 116.003 26.6735 116.108 26.6735C117.273 26.5689 118.504 26.5023 119.598 26.5023C120.691 26.5023 121.89 26.5689 123.055 26.6735C123.259 26.6402 123.43 26.5023 123.501 26.2646L123.706 25.442C123.706 25.3374 123.673 25.1662 123.501 25.1662C122.232 25.1662 121.685 24.7193 121.685 23.8302C121.685 23.4879 121.79 23.0076 122.028 22.5274C122.303 21.9474 122.679 21.1581 122.917 20.578C123.154 20.1691 123.635 19.7555 124.181 19.7555H128.836C129.488 19.7555 129.83 20.1311 129.896 20.7492L130.001 22.1185C130.001 22.2897 130.034 22.4609 130.034 22.5987C130.068 23.0076 130.101 23.35 130.101 23.6923C130.101 24.5814 129.863 25.1662 128.765 25.1662C128.489 25.1662 128.356 25.3041 128.285 25.5751L128.113 26.2931C128.08 26.4975 128.147 26.6687 128.389 26.6687C129.35 26.6687 130.377 26.5308 131.47 26.5308C132.906 26.5308 134.38 26.5974 135.545 26.6687C135.749 26.6354 135.921 26.4975 135.992 26.2598L136.196 25.4373C136.196 25.3327 136.163 25.1615 135.992 25.1615Z" fill="currentColor"/>
            <path d="M146.533 14.0689C144.717 12.6996 143.143 11.4682 143.143 9.88963C143.143 8.07336 144.921 7.28885 146.257 7.28885C148.758 7.28885 150.194 8.79607 151.326 10.6789C151.497 10.988 151.839 11.1258 152.215 11.1258C152.662 11.1258 153.175 10.8881 153.175 10.5791V10.4745C152.766 9.07184 152.353 7.46002 151.944 6.09068C151.806 5.61047 151.463 5.4393 151.055 5.68179L149.856 6.47105C148.554 5.71982 147.013 5.51062 146.091 5.51062C142.905 5.51062 139.106 7.42673 139.106 11.1258C139.106 13.7266 141.469 15.6094 143.623 17.1832C145.572 18.6191 147.455 20.1596 147.455 22.2136C147.455 24.2676 145.981 25.6702 143.552 25.6702C140.746 25.6702 139.444 24.0965 139.444 22.5227C139.444 21.6668 139.891 20.8776 140.675 20.5352C140.228 19.8839 139.582 19.7127 138.897 19.7127C137.561 19.7127 136.054 20.7397 136.054 22.7271C136.054 26.0506 140.228 27.3153 143.518 27.3153C147.831 27.3153 151.53 25.0236 151.53 20.9156C151.53 17.73 148.825 15.7806 146.533 14.0689Z" fill="currentColor"/>
            <path d="M170.634 25.1615C169.436 25.1615 168.685 24.4103 168.442 22.594L167.62 15.714C167.415 13.9358 167.277 12.1861 167.106 10.4079L166.697 6.16199C166.631 5.99083 166.493 5.78638 166.322 5.78638C165.875 5.85294 164.781 5.89098 163.688 5.89098C162.727 5.89098 161.634 5.8577 160.878 5.78638C160.673 5.81966 160.569 5.95754 160.469 6.23331L160.231 7.02258C160.231 7.19375 160.369 7.29835 160.469 7.29835C161.496 7.29835 161.6 7.98301 161.258 8.87213L154.858 22.0852C154.036 23.659 152.837 25.1662 151.264 25.1662C150.988 25.1662 150.855 25.3041 150.783 25.5751L150.579 26.3977C150.512 26.6021 150.646 26.6735 150.75 26.6735C151.915 26.5689 153.147 26.5023 154.24 26.5023C155.334 26.5023 156.532 26.5689 157.697 26.6735C157.901 26.6402 158.072 26.5023 158.144 26.2646L158.348 25.442C158.348 25.3374 158.315 25.1662 158.144 25.1662C156.874 25.1662 156.327 24.7193 156.327 23.8302C156.327 23.4879 156.432 23.0076 156.67 22.5274C156.945 21.9474 157.321 21.1581 157.559 20.578C157.797 20.1691 158.277 19.7555 158.824 19.7555H163.478C164.13 19.7555 164.472 20.1311 164.539 20.7492L164.643 22.1185C164.643 22.2897 164.677 22.4609 164.677 22.5987C164.71 23.0076 164.743 23.35 164.743 23.6923C164.743 24.5814 164.505 25.1662 163.407 25.1662C163.131 25.1662 162.998 25.3041 162.927 25.5751L162.756 26.2931C162.722 26.4975 162.789 26.6687 163.031 26.6687C163.992 26.6687 165.019 26.5308 166.112 26.5308C167.548 26.5308 169.022 26.5974 170.187 26.6687C170.392 26.6354 170.563 26.4975 170.634 26.2598L170.839 25.4373C170.839 25.3327 170.805 25.1615 170.634 25.1615Z" fill="currentColor"/>
            <path d="M186.586 6.09068C186.448 5.61047 186.106 5.4393 185.697 5.68179L184.499 6.47105C183.196 5.71982 181.655 5.51062 180.733 5.51062C177.547 5.51062 173.748 7.42673 173.748 11.1258C173.748 13.7266 176.111 15.6094 178.265 17.1832C180.215 18.6191 182.097 20.1596 182.097 22.2136C182.097 24.2676 180.624 25.6702 178.194 25.6702C175.389 25.6702 174.086 24.0965 174.086 22.5227C174.086 21.6668 174.533 20.8776 175.317 20.5352C174.87 19.8839 174.224 19.7127 173.539 19.7127C172.203 19.7127 170.696 20.7397 170.696 22.7271C170.696 26.0506 174.87 27.3153 178.161 27.3153C182.473 27.3153 186.172 25.0236 186.172 20.9156C186.172 17.73 183.467 15.7806 181.175 14.0689C179.359 12.6996 177.785 11.4682 177.785 9.88963C177.785 8.07336 179.563 7.28885 180.899 7.28885C183.4 7.28885 184.836 8.79607 185.968 10.6789C186.139 10.988 186.481 11.1258 186.857 11.1258C187.304 11.1258 187.817 10.8881 187.817 10.5791V10.4745C187.408 9.07184 186.995 7.46002 186.586 6.09068Z" fill="currentColor"/>
            <path d="M85.7307 10.6646H83.0634V2.66735H80.396V5.33469H77.7287V2.66735H75.0613V0H72.394V2.66735H69.7266V5.33469H67.0593V8.00204H64.3919V10.6694H61.7246V13.3367H59.0573V16.0041H61.7246V26.6687H85.726V16.0041H88.3933V13.3367H85.726V10.6694L85.7307 10.6646ZM75.0613 19.998V23.9966H72.394V18.6619H75.0613V19.9932V19.998ZM83.0634 15.9993V24.0014H77.7287V15.9993H69.7266V24.0014H64.3919V13.3367H67.0593V10.6694H69.7266V8.00204H72.394V5.33469H75.0613V8.00204H77.7287V10.6694H80.396V13.3367H83.0634V16.0041V15.9993Z" fill="currentColor"/>
          </g>
          <defs>
            <clipPath id="clip0_22_169">
              <rect width="187.817" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>

      <nav className="grid grid-flow-col gap-4">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="link link-hover">
            {item.label}
          </a>
        ))}
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          {config.appName}
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
