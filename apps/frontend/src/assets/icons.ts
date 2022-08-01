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
	enterLink: [
		'18 18',
		'<path d="M2.44531 17.0312H10.3359C11.138 17.0312 11.7448 16.8229 12.1562 16.4062C12.5729 15.9896 12.7812 15.3776 12.7812 14.5703V11.2812H11.2188V14.4453C11.2188 14.7786 11.1328 15.0312 10.9609 15.2031C10.7891 15.3802 10.5286 15.4688 10.1797 15.4688H2.60156C2.2526 15.4688 1.99219 15.3802 1.82031 15.2031C1.65365 15.0312 1.57031 14.7786 1.57031 14.4453V3.5625C1.57031 3.22917 1.65365 2.97656 1.82031 2.80469C1.99219 2.6276 2.2526 2.53906 2.60156 2.53906H10.1797C10.5286 2.53906 10.7891 2.6276 10.9609 2.80469C11.1328 2.97656 11.2188 3.22917 11.2188 3.5625V6.73438H12.7812V3.44531C12.7812 2.63281 12.5729 2.01823 12.1562 1.60156C11.7448 1.17969 11.138 0.96875 10.3359 0.96875H2.44531C1.64844 0.96875 1.04167 1.17969 0.625 1.60156C0.208333 2.01823 0 2.63281 0 3.44531V14.5703C0 15.3776 0.208333 15.9896 0.625 16.4062C1.04167 16.8229 1.64844 17.0312 2.44531 17.0312ZM7.3125 9.72656H14.6953L15.7891 9.66406L15.2422 10.1094L14.1719 11.1094C14.0312 11.2344 13.9609 11.3958 13.9609 11.5938C13.9609 11.7656 14.0182 11.9167 14.1328 12.0469C14.2474 12.1719 14.3958 12.2344 14.5781 12.2344C14.7448 12.2344 14.8958 12.1667 15.0312 12.0312L17.4141 9.55469C17.5078 9.46094 17.5729 9.36979 17.6094 9.28125C17.6458 9.1875 17.6641 9.09375 17.6641 9C17.6641 8.90104 17.6458 8.80729 17.6094 8.71875C17.5729 8.625 17.5078 8.53385 17.4141 8.44531L15.0312 5.96875C14.8958 5.83333 14.7448 5.76562 14.5781 5.76562C14.3958 5.76562 14.2474 5.82812 14.1328 5.95312C14.0182 6.07812 13.9609 6.22917 13.9609 6.40625C13.9609 6.59896 14.0312 6.76042 14.1719 6.89062L15.2422 7.89062L15.7891 8.33594L14.6953 8.27344H7.3125C7.11979 8.27344 6.95052 8.34375 6.80469 8.48438C6.66406 8.625 6.59375 8.79688 6.59375 9C6.59375 9.19792 6.66406 9.36979 6.80469 9.51562C6.95052 9.65625 7.11979 9.72656 7.3125 9.72656Z"/>',
	],
	backToGroupLabel: [
		'14 22',
		`
		<path d="M12 1.5L1.87632 10.2432C1.41448 10.642 1.41448 11.358 1.87632 11.7568L12 20.5"/>
		`,
	],
	threeDots: [
		'32 7',
		`
		<circle cx="4" cy="3.5" r="3.5" />
		<circle cx="16" cy="3.5" r="3.5" />
		<circle cx="28" cy="3.5" r="3.5" />
		`,
	],
};

export default icons;
