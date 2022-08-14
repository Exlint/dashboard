const icons = {
	greyUser: [
		'19 20',
		`
		<path d="M9.5 19.5C10.8015 19.5 12.0224 19.2518 13.1628 18.7555C14.3096 18.2591 15.3211 17.5726 16.1974 16.6959C17.0736 15.8257 17.7597 14.8169 18.2558 13.6695C18.7519 12.5221 19 11.2973 19 9.99516C19 8.69304 18.7487 7.4715 18.2462 6.33053C17.7501 5.18312 17.0639 4.17108 16.1877 3.2944C15.3179 2.41773 14.3096 1.73444 13.1628 1.24453C12.0159 0.748176 10.7918 0.5 9.49034 0.5C8.19532 0.5 6.9744 0.748176 5.82757 1.24453C4.68074 1.73444 3.66921 2.41773 2.79298 3.2944C1.92319 4.17108 1.24025 5.18312 0.744151 6.33053C0.24805 7.4715 0 8.69304 0 9.99516C0 11.2973 0.24805 12.5221 0.744151 13.6695C1.24025 14.8169 1.92319 15.8257 2.79298 16.6959C3.66921 17.5726 4.68074 18.2591 5.82757 18.7555C6.9744 19.2518 8.19854 19.5 9.5 19.5ZM9.5 17.8852C8.8235 17.8852 8.14378 17.7918 7.46083 17.6048C6.77789 17.4243 6.12716 17.1601 5.50865 16.812C4.89657 16.4639 4.36182 16.0416 3.90437 15.5453C4.25873 15.0232 4.71617 14.5751 5.2767 14.2013C5.84368 13.8274 6.48152 13.5438 7.19023 13.3504C7.90539 13.157 8.67531 13.0603 9.5 13.0603C10.3118 13.0603 11.0753 13.157 11.7904 13.3504C12.5056 13.5373 13.1434 13.8177 13.704 14.1916C14.2645 14.5655 14.7284 15.0167 15.0956 15.5453C14.6317 16.0416 14.0938 16.4639 13.4817 16.812C12.8696 17.1601 12.2221 17.4243 11.5392 17.6048C10.8562 17.7918 10.1765 17.8852 9.5 17.8852ZM9.5 11.4746C8.90081 11.4681 8.35961 11.3102 7.8764 11.0008C7.39318 10.6913 7.00983 10.2756 6.72635 9.75344C6.44286 9.22485 6.30112 8.62858 6.30112 7.96463C6.30112 7.33935 6.44286 6.76565 6.72635 6.24351C7.00983 5.72137 7.39318 5.3056 7.8764 4.99618C8.35961 4.68032 8.90081 4.52239 9.5 4.52239C10.0927 4.52239 10.6307 4.68032 11.1139 4.99618C11.5972 5.3056 11.9805 5.72137 12.264 6.24351C12.5539 6.76565 12.6989 7.33935 12.6989 7.96463C12.6989 8.62858 12.5571 9.22485 12.2737 9.75344C11.9902 10.282 11.6068 10.7042 11.1236 11.0201C10.6404 11.3295 10.0992 11.481 9.5 11.4746Z"/>
		`,
	],
	blackUser: [
		'28 28',
		`
		<path d="M14 28c1.92 0 3.722-.365 5.407-1.096a14.273 14.273 0 0 0 4.457-3.025 14.151 14.151 0 0 0 3.04-4.457C27.634 17.727 28 15.919 28 14c0-1.91-.37-3.707-1.11-5.392a14.107 14.107 0 0 0-3.04-4.472 14.153 14.153 0 0 0-4.458-3.04C17.707.366 15.905 0 13.985 0c-1.91 0-3.707.365-5.392 1.096a14.327 14.327 0 0 0-4.472 3.04 14.226 14.226 0 0 0-3.025 4.472C.366 10.293 0 12.09 0 14c0 1.92.365 3.727 1.096 5.422a14.482 14.482 0 0 0 3.04 4.457 14.274 14.274 0 0 0 4.457 3.025C10.278 27.634 12.08 28 14 28Zm0-2.119c-1.646 0-3.19-.307-4.633-.92a11.915 11.915 0 0 1-3.77-2.543 12.092 12.092 0 0 1-2.543-3.785c-.613-1.442-.92-2.986-.92-4.633 0-1.637.307-3.171.92-4.603a11.873 11.873 0 0 1 2.543-3.785 11.799 11.799 0 0 1 3.77-2.558c1.433-.613 2.972-.92 4.618-.92 1.657 0 3.2.307 4.633.92a11.799 11.799 0 0 1 3.77 2.558 11.755 11.755 0 0 1 2.558 3.785c.613 1.432.92 2.966.92 4.603.01 1.646-.292 3.19-.906 4.633a11.968 11.968 0 0 1-2.557 3.785 11.87 11.87 0 0 1-3.785 2.542c-1.432.614-2.971.921-4.618.921Zm-6.372-4.852h12.7c.273 0 .467-.078.584-.234a.947.947 0 0 0 .176-.584c0-.39-.146-.887-.439-1.49-.282-.605-.716-1.214-1.3-1.828-.585-.613-1.325-1.125-2.222-1.534-.886-.419-1.933-.628-3.142-.628-1.208 0-2.26.21-3.156.628-.897.41-1.637.92-2.221 1.534-.585.614-1.023 1.223-1.316 1.827-.282.604-.424 1.101-.424 1.49 0 .235.064.43.19.585.127.156.317.234.57.234Zm6.357-7.424a3.162 3.162 0 0 0 1.783-.496c.536-.341.96-.804 1.272-1.389.321-.584.482-1.242.482-1.973 0-.691-.16-1.325-.482-1.9a3.674 3.674 0 0 0-1.272-1.373 3.187 3.187 0 0 0-1.783-.526c-.652 0-1.247.175-1.782.526a3.791 3.791 0 0 0-1.287 1.374 3.825 3.825 0 0 0-.482 1.9c0 1.09.346 2.006 1.038 2.747.692.73 1.53 1.1 2.513 1.11Z"/>
		`,
	],
	close: [
		'15 15',
		`
		<path d="M0.277594 14.7272C0.396563 14.8463 0.538665 14.9256 0.7039 14.9653C0.869134 15.0116 1.03106 15.0116 1.18969 14.9653C1.35492 14.9256 1.50033 14.8463 1.62591 14.7272L7.49504 8.84534L13.384 14.7272C13.5625 14.9058 13.7839 14.995 14.0482 14.995C14.3126 15.0017 14.5373 14.9124 14.7224 14.7272C14.9075 14.5421 15 14.3173 15 14.0527C15 13.7816 14.9108 13.5568 14.7323 13.3783L8.84336 7.49638L14.7323 1.62441C14.9108 1.44587 15 1.22104 15 0.949922C15 0.678807 14.9075 0.453979 14.7224 0.275439C14.5373 0.0968997 14.3126 0.0076299 14.0482 0.0076299C13.7839 0.0076299 13.5625 0.0968997 13.384 0.275439L7.49504 6.15733L1.62591 0.275439C1.50033 0.156413 1.35492 0.077062 1.18969 0.0373865C1.03106 -0.00890155 0.869134 -0.0122078 0.7039 0.0274676C0.538665 0.0671431 0.396563 0.1498 0.277594 0.275439C0.158625 0.401078 0.0793126 0.546555 0.0396563 0.71187C0 0.870571 0 1.03258 0.0396563 1.19789C0.0793126 1.36321 0.158625 1.50538 0.277594 1.62441L6.14673 7.49638L0.277594 13.3783C0.158625 13.4973 0.0760079 13.6395 0.0297422 13.8048C-0.00991408 13.9701 -0.00991408 14.1354 0.0297422 14.3007C0.0693985 14.466 0.152016 14.6082 0.277594 14.7272Z"/>
		`,
	],
	plus: [
		'16 16',
		`
            <path d="M7.59375 15.5898C8.63021 15.5898 9.60677 15.3893 10.5234 14.9883C11.4401 14.5924 12.2474 14.0456 12.9453 13.3477C13.6432 12.6497 14.1901 11.8451 14.5859 10.9336C14.9818 10.0169 15.1797 9.03776 15.1797 7.99609C15.1797 6.95964 14.9792 5.98307 14.5781 5.06641C14.1823 4.14974 13.6354 3.34245 12.9375 2.64453C12.2396 1.94661 11.4323 1.39974 10.5156 1.00391C9.59896 0.608073 8.6224 0.410156 7.58594 0.410156C6.54948 0.410156 5.57292 0.608073 4.65625 1.00391C3.74479 1.39974 2.9375 1.94661 2.23438 2.64453C1.53646 3.34245 0.989583 4.14974 0.59375 5.06641C0.197917 5.98307 0 6.95964 0 7.99609C0 9.03776 0.197917 10.0169 0.59375 10.9336C0.994792 11.8451 1.54427 12.6497 2.24219 13.3477C2.9401 14.0456 3.74479 14.5924 4.65625 14.9883C5.57292 15.3893 6.55208 15.5898 7.59375 15.5898ZM7.59375 14.1992C6.73438 14.1992 5.92969 14.0378 5.17969 13.7148C4.42969 13.3971 3.77083 12.9544 3.20312 12.3867C2.63542 11.819 2.19271 11.1602 1.875 10.4102C1.55729 9.66016 1.39844 8.85547 1.39844 7.99609C1.39844 7.13672 1.55729 6.33203 1.875 5.58203C2.19271 4.83203 2.63542 4.17318 3.20312 3.60547C3.77083 3.03776 4.42708 2.59505 5.17188 2.27734C5.92188 1.95964 6.72656 1.80078 7.58594 1.80078C8.44531 1.80078 9.25 1.95964 10 2.27734C10.75 2.59505 11.4089 3.03776 11.9766 3.60547C12.5443 4.17318 12.987 4.83203 13.3047 5.58203C13.6276 6.33203 13.7891 7.13672 13.7891 7.99609C13.7943 8.85547 13.6354 9.66016 13.3125 10.4102C12.9948 11.1602 12.5521 11.819 11.9844 12.3867C11.4219 12.9544 10.763 13.3971 10.0078 13.7148C9.25781 14.0378 8.45312 14.1992 7.59375 14.1992ZM4.16406 7.99609C4.16406 8.18359 4.22656 8.33984 4.35156 8.46484C4.47656 8.58464 4.63542 8.64453 4.82812 8.64453H6.92188V10.7461C6.92188 10.9388 6.98177 11.0977 7.10156 11.2227C7.22656 11.3424 7.38281 11.4023 7.57031 11.4023C7.76823 11.4023 7.92969 11.3424 8.05469 11.2227C8.17969 11.1029 8.24219 10.944 8.24219 10.7461V8.64453H10.3438C10.5365 8.64453 10.6953 8.58464 10.8203 8.46484C10.9453 8.33984 11.0078 8.18359 11.0078 7.99609C11.0078 7.79818 10.9453 7.63672 10.8203 7.51172C10.6953 7.38672 10.5365 7.32422 10.3438 7.32422H8.24219V5.23047C8.24219 5.03255 8.17969 4.8737 8.05469 4.75391C7.92969 4.62891 7.76823 4.56641 7.57031 4.56641C7.38281 4.56641 7.22656 4.62891 7.10156 4.75391C6.98177 4.8737 6.92188 5.03255 6.92188 5.23047V7.32422H4.82812C4.63542 7.32422 4.47656 7.38672 4.35156 7.51172C4.22656 7.63672 4.16406 7.79818 4.16406 7.99609Z" />
        `,
	],
	search: [
		'17 17',
		`
		<path d="M0.80957 6.83643C0.80957 7.68864 0.970052 8.48828 1.29102 9.23535C1.61198 9.98242 2.05469 10.641 2.61914 11.2109C3.18913 11.7809 3.84766 12.2264 4.59473 12.5474C5.3418 12.8683 6.14144 13.0288 6.99365 13.0288C7.68538 13.0288 8.33838 12.9237 8.95264 12.7134C9.56689 12.4976 10.1313 12.2015 10.646 11.8252L14.5972 15.793C14.6802 15.8704 14.7743 15.9285 14.8794 15.9673C14.9901 16.0116 15.1007 16.0337 15.2114 16.0337C15.3774 16.0337 15.5241 15.995 15.6514 15.9175C15.7786 15.8455 15.8783 15.7432 15.9502 15.6104C16.0221 15.4831 16.0581 15.3364 16.0581 15.1704C16.0581 15.0597 16.036 14.9518 15.9917 14.8467C15.953 14.7471 15.8949 14.6558 15.8174 14.5728L11.8828 10.6216C12.2923 10.1014 12.6133 9.52034 12.8457 8.87842C13.0781 8.23096 13.1943 7.55029 13.1943 6.83643C13.1943 5.97868 13.0339 5.17627 12.7129 4.4292C12.3919 3.68213 11.9465 3.02637 11.3765 2.46191C10.8065 1.89193 10.1479 1.44645 9.40088 1.12549C8.65381 0.798991 7.8514 0.635742 6.99365 0.635742C6.14144 0.635742 5.3418 0.798991 4.59473 1.12549C3.84766 1.44645 3.18913 1.89193 2.61914 2.46191C2.05469 3.02637 1.61198 3.68213 1.29102 4.4292C0.970052 5.17627 0.80957 5.97868 0.80957 6.83643ZM2.01318 6.83643C2.01318 6.14469 2.14323 5.5 2.40332 4.90234C2.66341 4.29915 3.02034 3.77067 3.47412 3.31689C3.93343 2.85758 4.46191 2.50065 5.05957 2.24009C5.66276 1.986 6.30745 1.85596 6.99365 1.85596C7.68538 1.85596 8.33008 1.986 8.92773 2.24009C9.53092 2.50065 10.0594 2.85758 10.5132 3.31689C10.9725 3.77067 11.3294 4.29915 11.584 4.90234C11.8441 5.5 11.9741 6.14469 11.9741 6.83643C11.9741 7.52262 11.8441 8.16732 11.584 8.77051C11.3294 9.36816 10.9725 9.89665 10.5132 10.356C10.0594 10.8097 9.53092 11.1667 8.92773 11.4268C8.33008 11.6813 7.68538 11.8086 6.99365 11.8086C6.30745 11.8086 5.66276 11.6813 5.05957 11.4268C4.46191 11.1667 3.93343 10.8097 3.47412 10.356C3.02034 9.89665 2.66341 9.36816 2.40332 8.77051C2.14323 8.16732 2.01318 7.52262 2.01318 6.83643Z" />
		`,
	],
	arrowRight: [
		'13 22',
		`
		<path d="M1 20.5L11.1237 11.7568C11.5855 11.358 11.5855 10.642 11.1237 10.2432L0.999999 1.5"  stroke-width="2" stroke-linecap="round"/>
		`,
	],
	arrowDown: [
		'13 8',
		`
		<path d="M1 1L5.76285 6.19583C6.15918 6.6282 6.84082 6.6282 7.23715 6.19583L12 1" stroke-linecap="round"/>
		`,
	],
	vConfirm: [
		'19 12',
		`
		<path d="M1.68164 6.14247L6.49009 10.7851C6.80713 11.0912 7.30967 11.0912 7.62672 10.7851L17.2274 1.5155"  stroke-width="1.63639" stroke-linecap="round"/>
		`,
	],
	cancel: [
		'14 14',
		`
		<path d="M1.08787 12.4691C0.970711 12.5906 0.970711 12.7875 1.08787 12.9089C1.20503 13.0304 1.39497 13.0304 1.51213 12.9089L7 7.21991L12.4879 12.9089C12.605 13.0304 12.795 13.0304 12.9121 12.9089C13.0293 12.7875 13.0293 12.5906 12.9121 12.4691L7.42426 6.78009L12.4879 1.5309C12.605 1.40945 12.605 1.21254 12.4879 1.09109C12.3707 0.969637 12.1808 0.969637 12.0636 1.09109L7 6.34028L1.9364 1.09109C1.81924 0.969637 1.62929 0.969637 1.51213 1.09109C1.39497 1.21254 1.39497 1.40945 1.51213 1.5309L6.57574 6.78009L1.08787 12.4691Z"  stroke-linecap="round"/>
		`,
	],
	createGroup: [
		'208 113',
		`
		<rect width="208" height="113" rx="5" fill="#E7E7E7"/>
		<rect x="15" y="15" width="175" height="39" fill="#D9D9D9"/>
		<rect x="21" y="19" width="35" height="15" rx="7.5" fill="#BBB8CA"/>
		<rect x="59" y="19" width="59" height="15" rx="7.5" fill="#BBB8CA"/>
		<rect x="121" y="19" width="23" height="15" rx="7.5" fill="#BBB8CA"/>
		<rect x="15" y="60" width="175" height="39" fill="#D9D9D9"/>
		<rect x="50" y="63" width="34" height="15" rx="7.5" fill="#BBB8CA"/>
		<rect x="21" y="80" width="48" height="15" rx="7.5" fill="#BBB8CA"/>
		<rect x="87" y="63" width="99" height="15" rx="7.5" fill="#BBB8CA"/>
        `,
	],
	uniqueId: [
		'17 21',
		`
			<path d="M3.85205 4.81055H5.26318V2.97607C5.26318 2.59977 5.36003 2.31201 5.55371 2.11279C5.75293 1.90804 6.05176 1.80566 6.4502 1.80566H9.81201V5.68213C9.81201 6.15251 9.93099 6.50667 10.1689 6.74463C10.4124 6.97705 10.7666 7.09326 11.2314 7.09326H14.7925V13.6924C14.7925 14.0742 14.6929 14.3675 14.4937 14.5723C14.3 14.7715 14.0039 14.8711 13.6055 14.8711H12.0947V16.2822H13.7051C14.5352 16.2822 15.1577 16.0719 15.5728 15.6514C15.9933 15.2253 16.2036 14.5944 16.2036 13.7588V7.4668C16.2036 6.96875 16.1455 6.54541 16.0293 6.19678C15.9131 5.84814 15.7028 5.51888 15.3984 5.20898L11.4639 1.19971C11.1706 0.906413 10.8496 0.698893 10.501 0.577148C10.1579 0.44987 9.76774 0.38623 9.33057 0.38623H6.34229C5.52327 0.38623 4.90348 0.599284 4.48291 1.02539C4.06234 1.4515 3.85205 2.07959 3.85205 2.90967V4.81055ZM11.0322 5.49121V2.42822L14.4272 5.88135H11.4224C11.1623 5.88135 11.0322 5.7513 11.0322 5.49121ZM0.000488281 17.7349C0.000488281 18.5705 0.210775 19.1986 0.631348 19.6191C1.05192 20.0452 1.67448 20.2583 2.49902 20.2583H9.86182C10.6864 20.2583 11.3089 20.0452 11.7295 19.6191C12.1501 19.1986 12.3604 18.5705 12.3604 17.7349V11.6587C12.3604 11.1385 12.3105 10.7318 12.2109 10.4385C12.1169 10.1396 11.9093 9.82699 11.5884 9.50049L7.30518 5.13428C6.99528 4.81885 6.68815 4.61133 6.38379 4.51172C6.08496 4.41211 5.70589 4.3623 5.24658 4.3623H2.49902C1.67448 4.3623 1.05192 4.57536 0.631348 5.00146C0.210775 5.42757 0.000488281 6.05566 0.000488281 6.88574V17.7349ZM1.41992 17.6685V6.94385C1.41992 6.57308 1.51676 6.28809 1.71045 6.08887C1.90967 5.88411 2.20573 5.78174 2.59863 5.78174H5.08057V10.1895C5.08057 10.7262 5.21338 11.1247 5.479 11.3848C5.74463 11.6449 6.1403 11.7749 6.66602 11.7749H10.9492V17.6685C10.9492 18.0503 10.8496 18.3408 10.6504 18.54C10.4512 18.7448 10.1551 18.8472 9.76221 18.8472H2.59033C2.19743 18.8472 1.90413 18.7448 1.71045 18.54C1.51676 18.3408 1.41992 18.0503 1.41992 17.6685ZM6.81543 10.5049C6.65495 10.5049 6.53874 10.4689 6.4668 10.397C6.39486 10.325 6.35889 10.2088 6.35889 10.0483V6.07227L10.7168 10.5049H6.81543Z" fill="#4B4A65"/>
		`,
	],
	chooseLibrary: [
		'133 94',
		`
		<rect width="97" height="20" rx="5" fill="#D9D9D9"/>
		<rect y="74" width="47" height="20" rx="10" fill="#D9D9D9"/>
		<rect x="50" y="74" width="83" height="20" rx="10" fill="#D9D9D9"/>
		<rect y="26" width="133" height="42" rx="5" fill="#D9D9D9"/>
		`,
	],
	arrowRightPolicy: [
		'37 24',
		`
		<path d="M36.0607 13.0607C36.6464 12.4749 36.6464 11.5251 36.0607 10.9393L26.5147 1.3934C25.9289 0.807611 24.9792 0.807611 24.3934 1.3934C23.8076 1.97919 23.8076 2.92893 24.3934 3.51472L32.8787 12L24.3934 20.4853C23.8076 21.0711 23.8076 22.0208 24.3934 22.6066C24.9792 23.1924 25.9289 23.1924 26.5147 22.6066L36.0607 13.0607ZM0 13.5H35V10.5H0V13.5Z" />
		`,
	],
	buildRules: [
		'185 72',
		`
		<rect width="156" height="20" rx="5" fill="#D9D9D9"/>
		<rect y="26" width="156" height="20" rx="5" fill="#D9D9D9"/>
		<rect y="52" width="156" height="20" rx="5" fill="#D9D9D9"/>
		<path d="M167 10.1838L171.809 15.2386C172.204 15.6528 172.864 15.6528 173.258 15.2386L183 5" stroke="#242337" stroke-width="4" stroke-linecap="round"/>
		<path d="M167 34.1838L171.809 39.2386C172.204 39.6528 172.864 39.6528 173.258 39.2386L183 29" stroke="#242337" stroke-width="4" stroke-linecap="round"/>
		<path d="M167 61.1838L171.809 66.2386C172.204 66.6528 172.864 66.6528 173.258 66.2386L183 56" stroke="#242337" stroke-width="4" stroke-linecap="round"/>
		`,
	],
	threeDots: [
		'31 8',
		`
			<circle cx="3.5" cy="4" r="3.5" fill="#8B8B8B"/>
			<circle cx="15.5" cy="4" r="3.5" fill="#8B8B8B"/>
			<circle cx="27.5" cy="4" r="3.5" fill="#8B8B8B"/>
		`,
	],
	editPencil: [
		'19 18',
		`
			<path d="M4.67921 16.0892L4.77447 16.0499L4.8472 15.9769L15.2985 5.48603L15.6594 5.12373L15.2988 4.76108L13.7431 3.19648L13.3789 2.83021L13.0145 3.19631L2.57323 13.6872L2.50631 13.7544L2.46781 13.8411L1.55033 15.9072L1.54623 15.9164L1.54249 15.9258C1.48998 16.0578 1.46867 16.2098 1.50243 16.3682C1.53552 16.5235 1.61364 16.6486 1.70123 16.744L1.70226 16.7451C1.79081 16.841 1.90993 16.9318 2.06381 16.9798C2.22239 17.0293 2.38078 17.0217 2.52305 16.977L2.54436 16.9703L2.56502 16.9618L4.67921 16.0892ZM15.3579 4.70338L15.7163 5.06381L16.0806 4.70937L16.9981 3.81675L16.9981 3.8168L17.0041 3.81076C17.2928 3.52047 17.4986 3.16817 17.5122 2.7577C17.5328 2.34578 17.3589 1.99008 17.0774 1.70553L16.801 1.41768L16.795 1.41139L16.7887 1.40531C16.4991 1.12339 16.1362 0.955753 15.7193 0.990695L15.7181 0.9908C15.3329 1.024 14.9965 1.2198 14.7105 1.49094L14.7104 1.49083L14.7017 1.49949L13.7942 2.40214L13.43 2.76444L13.7922 3.12875L15.3579 4.70338Z" stroke-width="1.02767"/>
		`,
	],
	deleteGroup: [
		'21, 17',
		`
			<path d="M5.80469 16.2139H14.585C15.4229 16.2139 16.0439 16.0088 16.4482 15.5986C16.8584 15.1943 17.1279 14.5762 17.2568 13.7441L18.6016 4.76172L17.1162 4.83203L15.7803 13.6826C15.7217 14.0811 15.5869 14.3652 15.376 14.5352C15.1709 14.7109 14.8896 14.7988 14.5322 14.7988H5.86621C5.50293 14.7988 5.21582 14.7109 5.00488 14.5352C4.7998 14.3652 4.6709 14.0811 4.61816 13.6826L3.28223 4.83203L1.78809 4.76172L3.1416 13.7441C3.27051 14.582 3.53711 15.2031 3.94141 15.6074C4.35156 16.0117 4.97266 16.2139 5.80469 16.2139ZM1.80566 5.55273H18.584C19.1289 5.55273 19.5449 5.39453 19.832 5.07812C20.125 4.75586 20.2715 4.3252 20.2715 3.78613V2.55566C20.2715 2.0166 20.125 1.58887 19.832 1.27246C19.5449 0.950055 19.1289 0.797852 18.584 0.797852H1.80566C1.29004 0.797852 0.879883 0.950055 0.575195 1.27246C0.270508 1.58887 0.118164 2.0166 0.118164 2.55566V3.78613C0.118164 4.3252 0.264648 4.75586 0.557617 5.07812C0.850586 5.39453 1.2666 5.55273 1.80566 5.55273ZM2.13965 4.17285C1.94043 4.17285 1.79688 4.12598 1.70898 4.03223C1.62109 3.93848 1.57715 3.79492 1.57715 3.60156V2.74902C1.57715 2.5498 1.62109 2.40332 1.70898 2.30957C1.79688 2.21582 1.94043 2.16895 2.13965 2.16895H18.2676C18.4009 2.16895 18.6016 2.21582 18.6895 2.30957C18.7773 2.40332 18.8213 2.5498 18.8213 2.74902V3.60156C18.8213 3.79492 18.7773 3.93848 18.6895 4.03223C18.6016 4.12598 18.4009 4.17285 18.2676 4.17285H2.13965ZM7.83496 13.1553C8.01074 13.1553 8.16602 13.085 8.30078 12.9443L10.1904 11.0635L12.0889 12.9443C12.1475 13.0088 12.2148 13.0615 12.291 13.1025C12.373 13.1377 12.4639 13.1553 12.5635 13.1553C12.7393 13.1553 12.8945 13.0879 13.0293 12.9531C13.1641 12.8184 13.2314 12.6602 13.2314 12.4785C13.2314 12.3086 13.1641 12.1504 13.0293 12.0039L11.1484 10.123L13.0293 8.21582C13.1699 8.0752 13.2402 7.92285 13.2402 7.75879C13.2402 7.57129 13.1729 7.41309 13.0381 7.28418C12.9033 7.14941 12.7451 7.08203 12.5635 7.08203C12.3936 7.08203 12.2383 7.14941 12.0977 7.28418L10.1904 9.18262L8.29199 7.29297C8.15137 7.16406 7.99902 7.09961 7.83496 7.09961C7.64746 7.09961 7.48633 7.16406 7.35156 7.29297C7.22266 7.42188 7.1582 7.57715 7.1582 7.75879C7.1582 7.93457 7.22559 8.08984 7.36035 8.22461L9.24121 10.123L7.36035 12.0127C7.22559 12.1475 7.1582 12.3027 7.1582 12.4785C7.1582 12.6602 7.22266 12.8184 7.35156 12.9531C7.48633 13.0879 7.64746 13.1553 7.83496 13.1553Z" />
		`,
	],
	enterLink: [
		'18 18',
		'<path d="M2.44531 17.0312H10.3359C11.138 17.0312 11.7448 16.8229 12.1562 16.4062C12.5729 15.9896 12.7812 15.3776 12.7812 14.5703V11.2812H11.2188V14.4453C11.2188 14.7786 11.1328 15.0312 10.9609 15.2031C10.7891 15.3802 10.5286 15.4688 10.1797 15.4688H2.60156C2.2526 15.4688 1.99219 15.3802 1.82031 15.2031C1.65365 15.0312 1.57031 14.7786 1.57031 14.4453V3.5625C1.57031 3.22917 1.65365 2.97656 1.82031 2.80469C1.99219 2.6276 2.2526 2.53906 2.60156 2.53906H10.1797C10.5286 2.53906 10.7891 2.6276 10.9609 2.80469C11.1328 2.97656 11.2188 3.22917 11.2188 3.5625V6.73438H12.7812V3.44531C12.7812 2.63281 12.5729 2.01823 12.1562 1.60156C11.7448 1.17969 11.138 0.96875 10.3359 0.96875H2.44531C1.64844 0.96875 1.04167 1.17969 0.625 1.60156C0.208333 2.01823 0 2.63281 0 3.44531V14.5703C0 15.3776 0.208333 15.9896 0.625 16.4062C1.04167 16.8229 1.64844 17.0312 2.44531 17.0312ZM7.3125 9.72656H14.6953L15.7891 9.66406L15.2422 10.1094L14.1719 11.1094C14.0312 11.2344 13.9609 11.3958 13.9609 11.5938C13.9609 11.7656 14.0182 11.9167 14.1328 12.0469C14.2474 12.1719 14.3958 12.2344 14.5781 12.2344C14.7448 12.2344 14.8958 12.1667 15.0312 12.0312L17.4141 9.55469C17.5078 9.40094 17.5729 9.36979 17.6094 9.28125C17.6458 9.1875 17.6641 9.09375 17.6641 9C17.6641 8.90104 17.6458 8.80729 17.6094 8.71875C17.5729 8.625 17.5078 8.53385 17.4141 8.44531L15.0312 5.96875C14.8958 5.83333 14.7448 5.76562 14.5781 5.76562C14.3958 5.76562 14.2474 5.82812 14.1328 5.95312C14.0182 6.07812 13.9609 6.22917 13.9609 6.40625C13.9609 6.59896 14.0312 6.76042 14.1719 6.89062L15.2422 7.89062L15.7891 8.33594L14.6953 8.27344H7.3125C7.11979 8.27344 6.95052 8.34375 6.80469 8.48438C6.66406 8.625 6.59375 8.79688 6.59375 9C6.59375 9.19792 6.66406 9.36979 6.80469 9.51562C6.95052 9.65625 7.11979 9.72656 7.3125 9.72656Z"/>',
	],
};

export default icons;
