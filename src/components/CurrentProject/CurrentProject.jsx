
import "./CurrentProject.css";
function CurrentProject({project}) {
  return (
    <button className="ProjectAll">
        <span className="PA1">{project}</span>
      
      <button className="ProjectAllButtonSvg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M16 11.5C16.2761 11.5 16.5 11.2761 16.5 11C16.5 10.7239 16.2761 10.5 16 10.5C15.7239 10.5 15.5 10.7239 15.5 11C15.5 11.2761 15.7239 11.5 16 11.5Z"
          fill="black"
          fill-opacity="0.6"
          stroke="black"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 11.5C11.2761 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.2761 10.5 11 10.5C10.7239 10.5 10.5 10.7239 10.5 11C10.5 11.2761 10.7239 11.5 11 11.5Z"
          fill="black"
          fill-opacity="0.6"
          stroke="black"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 11.5C6.27614 11.5 6.5 11.2761 6.5 11C6.5 10.7239 6.27614 10.5 6 10.5C5.72386 10.5 5.5 10.7239 5.5 11C5.5 11.2761 5.72386 11.5 6 11.5Z"
          fill="black"
          fill-opacity="0.6"
          stroke="black"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 12.8214 1.48697 14.5291 2.33782 16L1.5 20.5L6 19.6622C7.47087 20.513 9.1786 21 11 21Z"
          stroke="black"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </button>
    </button>
  );
}

export default CurrentProject;
