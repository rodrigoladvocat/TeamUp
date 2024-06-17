const icons = {
  home: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M3 12.9915C3 10.796 3 9.69824 3.51122 8.78671C4.02244 7.87518 4.95776 7.30359 6.8284 6.16042L7.8284 5.54931C9.85916 4.30829 10.8745 3.68778 12 3.68778C13.1255 3.68778 14.1408 4.30829 16.1716 5.54931L17.1716 6.16042C19.0422 7.30359 19.9776 7.87518 20.4888 8.78671C21 9.69824 21 10.796 21 12.9915V12.9915C21 16.7684 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7684 3 12.9915V12.9915Z"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 20V16C9 15.0681 9 14.6022 9.15224 14.2346C9.35523 13.7446 9.74458 13.3552 10.2346 13.1522C10.6022 13 11.0681 13 12 13V13C12.9319 13 13.3978 13 13.7654 13.1522C14.2554 13.3552 14.6448 13.7446 14.8478 14.2346C15 14.6022 15 15.0681 15 16V20"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  grades: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M1 9C1 5.22876 1 3.34315 2.17157 2.17157C3.34315 1 5.22876 1 9 1H9.68629C11.3213 1 12.1388 1 12.8739 1.30448C13.609 1.60896 14.187 2.18702 15.3431 3.34315L16.6569 4.65685C17.813 5.81298 18.391 6.39104 18.6955 7.12612C19 7.8612 19 8.67871 19 10.3137V11C19 14.7712 19 16.6569 17.8284 17.8284C16.6569 19 14.7712 19 11 19H9C5.22876 19 3.34315 19 2.17157 17.8284C1 16.6569 1 14.7712 1 11V9Z"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 1.5V6C12 7.10457 12.8954 8 14 8H18.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M7 15H13" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 11H13" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 7H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  clipboard: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M16.5 4V4C16.9643 4 17.1965 4 17.3921 4.01926C19.2912 4.20631 20.7937 5.70882 20.9807 7.60793C21 7.80349 21 8.03566 21 8.5V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V8.5C3 8.03566 3 7.80349 3.01926 7.60793C3.20631 5.70882 4.70882 4.20631 6.60793 4.01926C6.80349 4 7.03566 4 7.5 4V4"
        strokeWidth="2"
      />
      <rect x="8" y="2" width="8" height="4" rx="1" strokeWidth="2" />
    </svg>
  ),
  monitor: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M8 21H16M12 17V21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="4"
        width="18"
        height="13"
        rx="4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  logout: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M10.666 9.33337L5.41356 14.5858C4.63251 15.3669 4.63252 16.6332 5.41356 17.4143L10.666 22.6667"
        stroke="#A28BFE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.334 4V4C22.5739 4 23.1939 4 23.7026 4.1363C25.083 4.50616 26.1612 5.58436 26.531 6.96472C26.6673 7.47339 26.6673 8.09337 26.6673 9.33333L26.6673 22.6667C26.6673 23.9066 26.6673 24.5266 26.531 25.0353C26.1612 26.4156 25.083 27.4938 23.7026 27.8637C23.1939 28 22.5739 28 21.334 28V28"
        stroke="#A28BFE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 16L5.33333 16"
        stroke="#A28BFE"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default icons;
