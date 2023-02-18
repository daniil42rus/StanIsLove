import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { thisUser } from '../../redux/features/auth/authSlice';
import styles from './navaside.module.css';

export const NavAside = () => {
	const user = useSelector(thisUser);

	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				{user.access === 'Администратор' && (
					<li className={styles.nav__item}>
						<NavLink to={'/register'} className={styles.link}>
							<svg>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.1489 4.32605L11.2039 4.08605C11.3089 3.64005 11.4809 2.98405 11.8359 2.33805C12.1979 1.68005 12.7589 1.01305 13.6389 0.574053C14.5159 0.137053 15.6149 -0.0259467 16.9739 0.154053C18.4739 0.354053 21.4869 0.850053 24.1489 2.20405C26.8259 3.56605 29.3339 5.90905 29.3339 9.81105C29.3339 11.8271 28.5539 13.9901 27.7979 15.4001C27.4349 16.0781 27.0039 16.7261 26.5719 17.0751C26.4729 17.1551 26.3319 17.2551 26.1569 17.3251C25.6768 18.9026 24.7213 20.2934 23.4208 21.3073C22.1204 22.3212 20.5385 22.9087 18.8915 22.9894C17.2445 23.0702 15.6128 22.6403 14.2194 21.7585C12.826 20.8767 11.7389 19.5861 11.1069 18.0631L11.0829 18.0671L10.7279 17.6361L10.7269 17.6341L10.7249 17.6321L10.7199 17.6251L10.7029 17.6051C10.6173 17.4985 10.5349 17.3895 10.4559 17.2781C10.2399 16.9786 10.0364 16.6703 9.84586 16.3541C9.37586 15.5761 8.80886 14.4681 8.44586 13.1751C8.08386 11.8821 7.91786 10.3661 8.29786 8.80205C8.66786 7.28005 9.54086 5.78205 11.1219 4.44405L11.1489 4.32605ZM12.8289 16.9641C13.2626 18.2113 14.0954 19.2807 15.1984 20.0067C16.3014 20.7327 17.6131 21.0748 18.9301 20.9799C20.2472 20.885 21.4963 20.3585 22.4838 19.4819C23.4714 18.6053 24.1424 17.4276 24.3929 16.1311L24.5059 16.1691C24.5019 16.1125 24.4999 16.0558 24.4999 15.9991C24.4999 14.3441 24.2699 13.1891 24.0559 12.4691C24.0141 12.3289 23.9677 12.1902 23.9169 12.0531L23.8759 12.0551H23.8359C23.0881 12.0712 22.3406 12.0143 21.6039 11.8851C19.8869 11.5951 17.5619 10.8711 14.8239 9.19405C14.7639 9.32805 14.7039 9.47905 14.6439 9.64705C14.4479 10.2021 14.2869 10.8611 14.1479 11.5571C14.0249 12.1701 13.9239 12.7871 13.8279 13.3651L13.7909 13.5931C13.6879 14.2131 13.5849 14.8221 13.4649 15.2631C13.2549 16.0291 13.0409 16.5731 12.8289 16.9631V16.9641ZM11.4289 15.1011C10.9772 14.3258 10.6225 13.4979 10.3729 12.6361C10.0739 11.5701 9.96386 10.4161 10.2419 9.27505C10.5119 8.16505 11.1649 6.99805 12.5079 5.89205C12.7499 5.72805 12.8599 5.50805 12.8899 5.44905V5.44805C12.9424 5.33993 12.9846 5.2271 13.0159 5.11105C13.0479 4.99705 13.0829 4.84105 13.1159 4.70105L13.1509 4.54405C13.2459 4.14105 13.3689 3.70205 13.5889 3.30105C13.8029 2.91305 14.0959 2.58105 14.5319 2.36405C14.9699 2.14505 15.6479 1.99505 16.7099 2.13705C18.1629 2.33005 20.8959 2.79305 23.2419 3.98705C25.5719 5.17205 27.3339 6.96605 27.3339 9.81105C27.3339 11.1211 26.8939 12.6111 26.3639 13.7861C26.2639 13.0201 26.1199 12.3941 25.9719 11.8981C25.8687 11.5436 25.74 11.197 25.5869 10.8611C25.5291 10.7366 25.4657 10.6148 25.3969 10.4961L25.3799 10.4691L25.3739 10.4591L25.3709 10.4541L25.3689 10.4511L24.9989 9.87705L24.3369 10.0101L24.3229 10.0131L24.2259 10.0261C24.077 10.0426 23.9276 10.0526 23.7779 10.0561C23.1613 10.068 22.5451 10.0197 21.9379 9.91205C20.3249 9.64005 17.9549 8.89905 15.0759 6.98205L14.3759 6.51505L13.7969 7.12505C13.3199 7.62705 12.9959 8.31205 12.7589 8.97905C12.5169 9.66405 12.3339 10.4291 12.1869 11.1631C12.065 11.7877 11.9543 12.4145 11.8549 13.0431L11.8169 13.2671C11.7099 13.9181 11.6229 14.4151 11.5349 14.7371C11.502 14.8591 11.4667 14.9805 11.4289 15.1011Z"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.414 23.8551C12.202 23.4331 11.941 22.9121 11.5 23.0131C6.096 24.2431 0.5 27.7941 0.5 31.5701V37.0001H36.5V31.5701C36.5 28.5961 33.028 25.7611 28.913 24.0901L28.908 24.0801C28.9034 24.071 28.8988 24.062 28.894 24.0531L28.861 24.0691C27.768 23.6291 26.63 23.2691 25.5 23.0131C24.997 22.8981 24.477 23.5901 24.25 24.0231H12.5C12.472 23.9711 12.444 23.9131 12.414 23.8551ZM25.903 25.1751C26.34 25.2961 26.775 25.4321 27.204 25.5821C27.216 25.9241 27.19 26.3281 27.134 26.7401C27.077 27.1666 26.986 27.588 26.862 28.0001H25.5C25.3143 28.0002 25.1324 28.052 24.9745 28.1496C24.8166 28.2473 24.689 28.387 24.606 28.5531L23.606 30.5531C23.5365 30.6918 23.5002 30.8449 23.5 31.0001V33.0001C23.5 33.2653 23.6054 33.5197 23.7929 33.7072C23.9804 33.8947 24.2348 34.0001 24.5 34.0001H26.5V32.0001H25.5V31.2361L26.118 30.0001H28.882L29.5 31.2361V32.0001H28.5V34.0001H30.5C30.7652 34.0001 31.0196 33.8947 31.2071 33.7072C31.3946 33.5197 31.5 33.2653 31.5 33.0001V31.0001C31.4998 30.8449 31.4635 30.6918 31.394 30.5531L30.394 28.5531C30.311 28.387 30.1834 28.2473 30.0255 28.1496C29.8676 28.052 29.6857 28.0002 29.5 28.0001H28.934C29.0576 27.4709 29.1405 26.933 29.182 26.3911C30.157 26.8521 31.063 27.3811 31.848 27.9531C33.77 29.3551 34.5 30.6671 34.5 31.5701V35.0001H2.5V31.5701C2.5 30.6671 3.23 29.3551 5.152 27.9531C6.118 27.2481 7.271 26.6101 8.507 26.0821C8.54133 26.879 8.66921 27.6691 8.888 28.4361L8.896 28.4641C8.29816 28.8423 7.85321 29.4196 7.63974 30.094C7.42626 30.7685 7.45799 31.4967 7.72932 32.15C8.00066 32.8033 8.49414 33.3397 9.12261 33.6645C9.75107 33.9893 10.4741 34.0815 11.164 33.9249C11.8538 33.7683 12.4662 33.373 12.8928 32.8087C13.3195 32.2444 13.533 31.5475 13.4957 30.8411C13.4584 30.1346 13.1726 29.4641 12.6889 28.9479C12.2051 28.4317 11.5545 28.1031 10.852 28.0201C10.7242 27.6017 10.6306 27.1736 10.572 26.7401C10.5163 26.3524 10.4932 25.9607 10.503 25.5691C10.5059 25.4943 10.5109 25.4196 10.518 25.3451C10.638 25.3081 10.758 25.2721 10.878 25.2381L11.293 26.0241H25.457L25.903 25.1761V25.1751ZM10.5 32.0161C11.038 32.0161 11.5 31.5761 11.5 31.0011C11.5 30.4271 11.038 29.9861 10.5 29.9861C9.962 29.9861 9.5 30.4261 9.5 31.0011C9.5 31.5751 9.962 32.0161 10.5 32.0161Z"
								/>
							</svg>
							<span>Управление учетными записями</span>
						</NavLink>
					</li>
				)}

				<li className={styles.nav__item}>
					<NavLink to={'/patientregister'} className={styles.link}>
						<svg>
							<path d="M6.50016 24.2084C6.2239 24.2084 5.95894 24.3181 5.76359 24.5135C5.56824 24.7088 5.4585 24.9738 5.4585 25.25C5.4585 25.5263 5.56824 25.7913 5.76359 25.9866C5.95894 26.182 6.2239 26.2917 6.50016 26.2917H21.0835C21.3598 26.2917 21.6247 26.182 21.8201 25.9866C22.0154 25.7913 22.1252 25.5263 22.1252 25.25C22.1252 24.9738 22.0154 24.7088 21.8201 24.5135C21.6247 24.3181 21.3598 24.2084 21.0835 24.2084H6.50016ZM5.4585 30.4584C5.4585 30.1821 5.56824 29.9172 5.76359 29.7218C5.95894 29.5265 6.2239 29.4167 6.50016 29.4167H14.8335C15.1098 29.4167 15.3747 29.5265 15.5701 29.7218C15.7654 29.9172 15.8752 30.1821 15.8752 30.4584C15.8752 30.7346 15.7654 30.9996 15.5701 31.1949C15.3747 31.3903 15.1098 31.5 14.8335 31.5H6.50016C6.2239 31.5 5.95894 31.3903 5.76359 31.1949C5.56824 30.9996 5.4585 30.7346 5.4585 30.4584Z" />
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M6.5 3.375C6.5 2.5462 6.82924 1.75134 7.41529 1.16529C8.00134 0.57924 8.7962 0.25 9.625 0.25H17.9583C18.7871 0.25 19.582 0.57924 20.168 1.16529C20.7541 1.75134 21.0833 2.5462 21.0833 3.375H24.2083C25.0371 3.375 25.832 3.70424 26.418 4.29029C27.0041 4.87634 27.3333 5.6712 27.3333 6.5V34.625C27.3333 35.4538 27.0041 36.2487 26.418 36.8347C25.832 37.4208 25.0371 37.75 24.2083 37.75H3.375C2.5462 37.75 1.75134 37.4208 1.16529 36.8347C0.57924 36.2487 0.25 35.4538 0.25 34.625V6.5C0.25 5.6712 0.57924 4.87634 1.16529 4.29029C1.75134 3.70424 2.5462 3.375 3.375 3.375H6.5ZM2.33333 17.9583H8.76146L10.2927 15.3896L12.1833 22.3281L16.3854 16.9167H20.8417C21.1179 16.9167 21.3829 16.8069 21.5782 16.6116C21.7736 16.4162 21.8833 16.1513 21.8833 15.875C21.8833 15.5987 21.7736 15.3338 21.5782 15.1384C21.3829 14.9431 21.1179 14.8333 20.8417 14.8333H15.3646L13.0969 17.7552L11.0135 10.1104L7.57812 15.875H2.33333V6.5C2.33333 6.22373 2.44308 5.95878 2.63843 5.76343C2.83378 5.56808 3.09873 5.45833 3.375 5.45833H6.5C6.5 6.28713 6.82924 7.08199 7.41529 7.66804C8.00134 8.25409 8.7962 8.58333 9.625 8.58333H17.9583C18.7871 8.58333 19.582 8.25409 20.168 7.66804C20.7541 7.08199 21.0833 6.28713 21.0833 5.45833H24.2083C24.4846 5.45833 24.7496 5.56808 24.9449 5.76343C25.1403 5.95878 25.25 6.22373 25.25 6.5V34.625C25.25 34.9013 25.1403 35.1662 24.9449 35.3616C24.7496 35.5569 24.4846 35.6667 24.2083 35.6667H3.375C3.09873 35.6667 2.83378 35.5569 2.63843 35.3616C2.44308 35.1662 2.33333 34.9013 2.33333 34.625V17.9583ZM19 3.375V5.45833C19 5.7346 18.8903 5.99955 18.6949 6.1949C18.4996 6.39025 18.2346 6.5 17.9583 6.5H9.625C9.34873 6.5 9.08378 6.39025 8.88843 6.1949C8.69308 5.99955 8.58333 5.7346 8.58333 5.45833V3.375C8.58333 3.09873 8.69308 2.83378 8.88843 2.63843C9.08378 2.44308 9.34873 2.33333 9.625 2.33333H17.9583C18.2346 2.33333 18.4996 2.44308 18.6949 2.63843C18.8903 2.83378 19 3.09873 19 3.375ZM34.625 8.58333C33.7962 8.58333 33.0013 8.91257 32.4153 9.49862C31.8292 10.0847 31.5 10.8795 31.5 11.7083V32.8573L34.625 37.5448L37.75 32.8573V11.7083C37.75 10.8795 37.4208 10.0847 36.8347 9.49862C36.2487 8.91257 35.4538 8.58333 34.625 8.58333ZM33.5833 11.7083C33.5833 11.4321 33.6931 11.1671 33.8884 10.9718C34.0838 10.7764 34.3487 10.6667 34.625 10.6667C34.9013 10.6667 35.1662 10.7764 35.3616 10.9718C35.5569 11.1671 35.6667 11.4321 35.6667 11.7083V13.7917H33.5833V11.7083ZM33.5833 32.226V15.875H35.6667V32.226L34.625 33.7885L33.5833 32.226Z"
							/>
						</svg>
						<span>Записать пациента</span>
					</NavLink>
				</li>

				{user.access === 'Заведующий' || user.access === 'Администратор' ? (
					<li className={styles.nav__item}>
						<NavLink to={'/createschedule'} className={styles.link}>
							<svg>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M30.4582 35.6666C31.8395 35.6666 33.1643 35.1179 34.141 34.1411C35.1178 33.1644 35.6665 31.8396 35.6665 30.4583C35.6665 29.077 35.1178 27.7522 34.141 26.7754C33.1643 25.7987 31.8395 25.25 30.4582 25.25C29.0768 25.25 27.7521 25.7987 26.7753 26.7754C25.7986 27.7522 25.2498 29.077 25.2498 30.4583C25.2498 31.8396 25.7986 33.1644 26.7753 34.1411C27.7521 35.1179 29.0768 35.6666 30.4582 35.6666ZM30.4582 37.75C32.392 37.75 34.2467 36.9817 35.6142 35.6143C36.9816 34.2468 37.7498 32.3922 37.7498 30.4583C37.7498 28.5244 36.9816 26.6698 35.6142 25.3023C34.2467 23.9349 32.392 23.1666 30.4582 23.1666C28.5243 23.1666 26.6696 23.9349 25.3022 25.3023C23.9347 26.6698 23.1665 28.5244 23.1665 30.4583C23.1665 32.3922 23.9347 34.2468 25.3022 35.6143C26.6696 36.9817 28.5243 37.75 30.4582 37.75Z"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M30.4582 26.8125C30.7344 26.8125 30.9994 26.9222 31.1947 27.1176C31.3901 27.3129 31.4998 27.5779 31.4998 27.8542V30.0271L32.2363 30.7635C32.426 30.96 32.531 31.2231 32.5287 31.4963C32.5263 31.7694 32.4167 32.0306 32.2236 32.2238C32.0305 32.4169 31.7692 32.5265 31.4961 32.5288C31.223 32.5312 30.9598 32.4262 30.7634 32.2365L29.4165 30.8896V27.8542C29.4165 27.5779 29.5262 27.3129 29.7216 27.1176C29.917 26.9222 30.1819 26.8125 30.4582 26.8125ZM8.58317 17.9583H6.49984V20.0417H8.58317V17.9583ZM6.49984 15.875C5.9473 15.875 5.4174 16.0945 5.0267 16.4852C4.636 16.8759 4.4165 17.4058 4.4165 17.9583V20.0417C4.4165 20.5942 4.636 21.1241 5.0267 21.5148C5.4174 21.9055 5.9473 22.125 6.49984 22.125H8.58317C9.1357 22.125 9.66561 21.9055 10.0563 21.5148C10.447 21.1241 10.6665 20.5942 10.6665 20.0417V17.9583C10.6665 17.4058 10.447 16.8759 10.0563 16.4852C9.66561 16.0945 9.1357 15.875 8.58317 15.875H6.49984ZM16.9165 17.9583H14.8332V20.0417H16.9165V17.9583ZM14.8332 15.875C14.2806 15.875 13.7507 16.0945 13.36 16.4852C12.9693 16.8759 12.7498 17.4058 12.7498 17.9583V20.0417C12.7498 20.5942 12.9693 21.1241 13.36 21.5148C13.7507 21.9055 14.2806 22.125 14.8332 22.125H16.9165C17.469 22.125 17.9989 21.9055 18.3896 21.5148C18.7803 21.1241 18.9998 20.5942 18.9998 20.0417V17.9583C18.9998 17.4058 18.7803 16.8759 18.3896 16.4852C17.9989 16.0945 17.469 15.875 16.9165 15.875H14.8332ZM25.2498 17.9583H23.1665V20.0417H25.2498V17.9583ZM23.1665 15.875C22.614 15.875 22.0841 16.0945 21.6934 16.4852C21.3027 16.8759 21.0832 17.4058 21.0832 17.9583V20.0417C21.0832 20.5942 21.3027 21.1241 21.6934 21.5148C22.0841 21.9055 22.614 22.125 23.1665 22.125H25.2498C25.8024 22.125 26.3323 21.9055 26.723 21.5148C27.1137 21.1241 27.3332 20.5942 27.3332 20.0417V17.9583C27.3332 17.4058 27.1137 16.8759 26.723 16.4852C26.3323 16.0945 25.8024 15.875 25.2498 15.875H23.1665ZM8.58317 26.2917H6.49984V28.375H8.58317V26.2917ZM6.49984 24.2083C5.9473 24.2083 5.4174 24.4278 5.0267 24.8185C4.636 25.2092 4.4165 25.7391 4.4165 26.2917V28.375C4.4165 28.9275 4.636 29.4574 5.0267 29.8481C5.4174 30.2388 5.9473 30.4583 6.49984 30.4583H8.58317C9.1357 30.4583 9.66561 30.2388 10.0563 29.8481C10.447 29.4574 10.6665 28.9275 10.6665 28.375V26.2917C10.6665 25.7391 10.447 25.2092 10.0563 24.8185C9.66561 24.4278 9.1357 24.2083 8.58317 24.2083H6.49984ZM16.9165 26.2917H14.8332V28.375H16.9165V26.2917ZM14.8332 24.2083C14.2806 24.2083 13.7507 24.4278 13.36 24.8185C12.9693 25.2092 12.7498 25.7391 12.7498 26.2917V28.375C12.7498 28.9275 12.9693 29.4574 13.36 29.8481C13.7507 30.2388 14.2806 30.4583 14.8332 30.4583H16.9165C17.469 30.4583 17.9989 30.2388 18.3896 29.8481C18.7803 29.4574 18.9998 28.9275 18.9998 28.375V26.2917C18.9998 25.7391 18.7803 25.2092 18.3896 24.8185C17.9989 24.4278 17.469 24.2083 16.9165 24.2083H14.8332Z"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M2.33333 6.5C2.33333 6.22373 2.44308 5.95878 2.63843 5.76343C2.83378 5.56808 3.09873 5.45833 3.375 5.45833H8.58333V3.375H3.375C2.5462 3.375 1.75134 3.70424 1.16529 4.29029C0.57924 4.87634 0.25 5.6712 0.25 6.5V31.5C0.25 32.3288 0.57924 33.1237 1.16529 33.7097C1.75134 34.2958 2.5462 34.625 3.375 34.625H24.474C24.0297 33.9887 23.6904 33.2854 23.4688 32.5417H3.375C3.09873 32.5417 2.83378 32.4319 2.63843 32.2366C2.44308 32.0412 2.33333 31.7763 2.33333 31.5V6.5ZM29.4167 23.2396C30.1076 23.1407 30.8091 23.1407 31.5 23.2396V6.5C31.5 5.6712 31.1708 4.87634 30.5847 4.29029C29.9987 3.70424 29.2038 3.375 28.375 3.375H25.25V5.45833H28.375C28.6513 5.45833 28.9162 5.56808 29.1116 5.76343C29.3069 5.95878 29.4167 6.22373 29.4167 6.5V23.2396ZM10.6667 5.45833H21.6698V3.375H10.6667V5.45833Z"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M31.5002 12.75H2.3335V10.6666H31.5002V12.75Z"
								/>
								<path d="M6.5 1.29167C6.5 1.0154 6.60975 0.750448 6.8051 0.555097C7.00045 0.359747 7.2654 0.25 7.54167 0.25C7.81793 0.25 8.08289 0.359747 8.27824 0.555097C8.47359 0.750448 8.58333 1.0154 8.58333 1.29167V6.5C8.58333 6.77627 8.47359 7.04122 8.27824 7.23657C8.08289 7.43192 7.81793 7.54167 7.54167 7.54167C7.2654 7.54167 7.00045 7.43192 6.8051 7.23657C6.60975 7.04122 6.5 6.77627 6.5 6.5V1.29167ZM21.0833 1.29167C21.0833 1.0154 21.1931 0.750448 21.3884 0.555097C21.5838 0.359747 21.8487 0.25 22.125 0.25C22.4013 0.25 22.6662 0.359747 22.8616 0.555097C23.0569 0.750448 23.1667 1.0154 23.1667 1.29167V6.5C23.1667 6.77627 23.0569 7.04122 22.8616 7.23657C22.6662 7.43192 22.4013 7.54167 22.125 7.54167C21.8487 7.54167 21.5838 7.43192 21.3884 7.23657C21.1931 7.04122 21.0833 6.77627 21.0833 6.5V1.29167Z" />
							</svg>
							<span>Создать расписание</span>
						</NavLink>
					</li>
				) : (
					false
				)}

				{user.access === 'Заведующий' || user.access === 'Администратор' ? (
					<li className={styles.nav__item}>
						<NavLink to={'/addquotas'} className={styles.link}>
							<svg>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.5 3C6.5 2.20435 6.81607 1.44129 7.37868 0.87868C7.94129 0.316071 8.70435 0 9.5 0H17.5C18.2956 0 19.0587 0.316071 19.6213 0.87868C20.1839 1.44129 20.5 2.20435 20.5 3H23.5C24.2956 3 25.0587 3.31607 25.6213 3.87868C26.1839 4.44129 26.5 5.20435 26.5 6V22H24.5V6C24.5 5.73478 24.3946 5.48043 24.2071 5.29289C24.0196 5.10536 23.7652 5 23.5 5H20.5C20.5 5.79565 20.1839 6.55871 19.6213 7.12132C19.0587 7.68393 18.2956 8 17.5 8H9.5C8.70435 8 7.94129 7.68393 7.37868 7.12132C6.81607 6.55871 6.5 5.79565 6.5 5H3.5C3.23478 5 2.98043 5.10536 2.79289 5.29289C2.60536 5.48043 2.5 5.73478 2.5 6V34C2.5 34.2652 2.60536 34.5196 2.79289 34.7071C2.98043 34.8946 3.23478 35 3.5 35H13.5V37H3.5C2.70435 37 1.94129 36.6839 1.37868 36.1213C0.81607 35.5587 0.5 34.7957 0.5 34V6C0.5 5.20435 0.81607 4.44129 1.37868 3.87868C1.94129 3.31607 2.70435 3 3.5 3H6.5ZM9.5 2C9.23478 2 8.98043 2.10536 8.79289 2.29289C8.60536 2.48043 8.5 2.73478 8.5 3V5C8.5 5.26522 8.60536 5.51957 8.79289 5.70711C8.98043 5.89464 9.23478 6 9.5 6H17.5C17.7652 6 18.0196 5.89464 18.2071 5.70711C18.3946 5.51957 18.5 5.26522 18.5 5V3C18.5 2.73478 18.3946 2.48043 18.2071 2.29289C18.0196 2.10536 17.7652 2 17.5 2H9.5ZM12.5 12V15H9.5V17H12.5V20H14.5V17H17.5V15H14.5V12H12.5ZM13.5 25.665V29.665C13.5 29.9302 13.6054 30.1846 13.7929 30.3721C13.9804 30.5596 14.2348 30.665 14.5 30.665H18.5V28.665H17.025L18.278 27.487C18.8732 26.8838 19.612 26.4418 20.4249 26.2024C21.2378 25.9631 22.0983 25.9343 22.9254 26.1188C23.7525 26.3032 24.5191 26.6949 25.1533 27.2569C25.7875 27.819 26.2685 28.5331 26.551 29.332L28.436 28.665C28.0418 27.5518 27.3724 26.5565 26.4901 25.7716C25.6078 24.9866 24.5412 24.4376 23.3898 24.1757C22.2383 23.9137 21.0392 23.9473 19.9042 24.2732C18.7692 24.5992 17.735 25.207 16.898 26.04L15.5 27.353V25.665H13.5ZM25.167 31.332H29.167C29.4322 31.332 29.6866 31.4374 29.8741 31.6249C30.0616 31.8124 30.167 32.0668 30.167 32.332V36.332H28.167V34.644L26.769 35.957C25.9321 36.7903 24.898 37.3983 23.7629 37.7244C22.6278 38.0505 21.4286 38.0842 20.2771 37.8222C19.1255 37.5602 18.0589 37.0111 17.1766 36.226C16.2943 35.4409 15.625 34.4453 15.231 33.332L17.116 32.665C17.3985 33.464 17.8795 34.178 18.5137 34.7401C19.1479 35.3021 19.9145 35.6938 20.7416 35.8782C21.5687 36.0627 22.4292 36.0339 23.2421 35.7946C24.055 35.5552 24.7938 35.1132 25.389 34.51L26.642 33.332H25.167V31.332Z"
								/>
							</svg>
							<span>Добавть квоты</span>
						</NavLink>
					</li>
				) : (
					false
				)}
				{user.access === 'Заведующий' || user.access === 'Администратор' ? (
					<li className={styles.nav__item}>
						<NavLink to={'/reportgenerate'} className={styles.link}>
							<svg>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M1.90476 32.2619V0.833374H0V33.2143C0 33.4669 0.10034 33.7092 0.278946 33.8878C0.457552 34.0664 0.699794 34.1667 0.952381 34.1667H33.3333V32.2619H1.90476Z"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4.76172 17.9762C4.76172 17.7236 4.86206 17.4814 5.04066 17.3027C5.21927 17.1241 5.46151 17.0238 5.7141 17.0238H11.4284C11.681 17.0238 11.9232 17.1241 12.1018 17.3027C12.2804 17.4814 12.3808 17.7236 12.3808 17.9762V33.2143C12.3808 33.4669 12.2804 33.7091 12.1018 33.8877C11.9232 34.0663 11.681 34.1667 11.4284 34.1667H5.7141C5.46151 34.1667 5.21927 34.0663 5.04066 33.8877C4.86206 33.7091 4.76172 33.4669 4.76172 33.2143V17.9762ZM6.66648 18.9286V32.2619H10.476V18.9286H6.66648Z"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4.76172 25.5953C4.76172 25.3427 4.86206 25.1005 5.04066 24.9219C5.21927 24.7433 5.46151 24.6429 5.7141 24.6429H11.4284C11.681 24.6429 11.9232 24.7433 12.1018 24.9219C12.2804 25.1005 12.3808 25.3427 12.3808 25.5953V33.2144C12.3808 33.4669 12.2804 33.7092 12.1018 33.8878C11.9232 34.0664 11.681 34.1667 11.4284 34.1667H5.7141C5.46151 34.1667 5.21927 34.0664 5.04066 33.8878C4.86206 33.7092 4.76172 33.4669 4.76172 33.2144V25.5953ZM6.66648 26.5477V32.262H10.476V26.5477H6.66648ZM14.2855 14.1667C14.2855 13.9141 14.3859 13.6719 14.5645 13.4933C14.7431 13.3147 14.9853 13.2144 15.2379 13.2144H20.9522C21.2048 13.2144 21.447 13.3147 21.6256 13.4933C21.8042 13.6719 21.9046 13.9141 21.9046 14.1667V33.2144C21.9046 33.4669 21.8042 33.7092 21.6256 33.8878C21.447 34.0664 21.2048 34.1667 20.9522 34.1667H15.2379C14.9853 34.1667 14.7431 34.0664 14.5645 33.8878C14.3859 33.7092 14.2855 33.4669 14.2855 33.2144V14.1667ZM16.1903 15.1191V32.262H19.9998V15.1191H16.1903Z"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M14.2856 21.7858C14.2856 21.5332 14.386 21.291 14.5646 21.1124C14.7432 20.9338 14.9854 20.8334 15.238 20.8334H20.9523C21.2049 20.8334 21.4471 20.9338 21.6257 21.1124C21.8044 21.291 21.9047 21.5332 21.9047 21.7858V33.2144C21.9047 33.467 21.8044 33.7092 21.6257 33.8878C21.4471 34.0664 21.2049 34.1668 20.9523 34.1668H15.238C14.9854 34.1668 14.7432 34.0664 14.5646 33.8878C14.386 33.7092 14.2856 33.467 14.2856 33.2144V21.7858ZM16.1904 22.7382V32.262H19.9999V22.7382H16.1904ZM23.8095 6.54772C23.8095 6.29513 23.9098 6.05289 24.0884 5.87428C24.267 5.69568 24.5092 5.59534 24.7618 5.59534H30.4761C30.7287 5.59534 30.9709 5.69568 31.1496 5.87428C31.3282 6.05289 31.4285 6.29513 31.4285 6.54772V33.2144C31.4285 33.467 31.3282 33.7092 31.1496 33.8878C30.9709 34.0664 30.7287 34.1668 30.4761 34.1668H24.7618C24.5092 34.1668 24.267 34.0664 24.0884 33.8878C23.9098 33.7092 23.8095 33.467 23.8095 33.2144V6.54772ZM25.7142 7.5001V32.262H29.5237V7.5001H25.7142Z"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M23.8096 17.9762C23.8096 17.7236 23.9099 17.4814 24.0885 17.3027C24.2671 17.1241 24.5094 17.0238 24.762 17.0238H30.4762C30.7288 17.0238 30.9711 17.1241 31.1497 17.3027C31.3283 17.4814 31.4286 17.7236 31.4286 17.9762V33.2143C31.4286 33.4669 31.3283 33.7091 31.1497 33.8877C30.9711 34.0663 30.7288 34.1667 30.4762 34.1667H24.762C24.5094 34.1667 24.2671 34.0663 24.0885 33.8877C23.9099 33.7091 23.8096 33.4669 23.8096 33.2143V17.9762ZM25.7143 18.9286V32.2619H29.5239V18.9286H25.7143Z"
								/>
							</svg>
							<span> Сформировать отчет</span>
						</NavLink>
					</li>
				) : (
					false
				)}
			</ul>
		</nav>
	);
};
