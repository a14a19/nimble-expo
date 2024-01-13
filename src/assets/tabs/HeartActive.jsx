import { SvgXml } from "react-native-svg";

export default function HeartActive() {

    const xml = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="solar:heart-bold">
    <path id="Vector" d="M2.58325 11.8019C2.58325 18.0833 7.77575 21.43 11.5758 24.4267C12.9166 25.4832 14.2083 26.4791 15.4999 26.4791C16.7916 26.4791 18.0833 25.4845 19.424 24.4254C23.2254 21.4313 28.4166 18.0833 28.4166 11.8032C28.4166 5.52182 21.3124 1.06687 15.4999 7.1067C9.68742 1.06557 2.58325 5.52053 2.58325 11.8019Z" fill="url(#paint0_linear_463_1103)"/>
    </g>
    <defs>
    <linearGradient id="paint0_linear_463_1103" x1="2.58325" y1="15.3611" x2="28.4166" y2="15.3611" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FF74A6"/>
    <stop offset="1" stop-color="#E167FF"/>
    </linearGradient>
    </defs>
    </svg>`;

    return (
        <SvgXml xml={xml} />
    )
}

