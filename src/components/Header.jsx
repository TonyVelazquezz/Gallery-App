import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { SiPexels } from 'react-icons/si';
import loginForm from '../assets/loginForm.jpg';
import { startLogout } from '../redux/thunks/auth.thunk';

const Header = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<header className="h-16 flex items-center shadow-md relative w-full">
			<img
				src={loginForm}
				alt="login-form-img"
				className="absolute object-cover object-center h-full w-full"
			/>

			<Link to="/home" className="pl-5 z-10">
				<SiPexels className="duration-300 text-main_violet text-4xl hover:text-dark_violet ease-in" />
			</Link>

			<ul className="flex flex-wrap font-semibold items-center justify-end gap-x-4 pr-6 text-white w-full z-10">
				<li>
					<NavLink to="/images" className={({ isActive }) => (isActive ? 'text-main_violet' : '')}>
						Images
					</NavLink>
				</li>
				<li>
					<NavLink to="/videos" className={({ isActive }) => (isActive ? 'text-main_violet' : '')}>
						Videos
					</NavLink>
				</li>
				<li>
					<NavLink to="/favorites" className={({ isActive }) => (isActive ? 'text-main_violet' : '')}>
						Favorites
					</NavLink>
				</li>
				<li>
					<button onClick={handleLogout} className="btn_log">
						Logout
					</button>
				</li>
			</ul>
		</header>
	);
};

export default Header;
