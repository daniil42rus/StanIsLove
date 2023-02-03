import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register user
export const register = async (req, res) => {
	try {
		const { username, password, surname, access } = req.body;
		const isUsed = await User.findOne({ username });

		if (isUsed) {
			return res.json({
				message: 'Данный username уже занят.',
			});
		}

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		const newUser = new User({
			username,
			password: hash,
			surname,
			access,
		});

		// const token = jwt.sign(
		//     {
		//         id: newUser._id,
		//     },
		//     process.env.JWT_SECRET,
		//     { expiresIn: '30d' },
		// )

		await newUser.save();

		res.json({
			newUser,
			// token,
			message: `Регистрация польхователя ${newUser.username} прошла успешно`,
		});
	} catch (error) {
		console.log(error);
		res.json({ message: 'Ошибка при создании пользователя.' });
	}
};

// Login user
export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });

		if (!user) {
			return res.json({
				message: 'Такого юзера не существует.',
			});
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) {
			return res.json({
				message: 'Неверный пароль.',
			});
		}

		const token = jwt.sign(
			{
				id: user._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '30d' }
		);

		res.json({
			user,
			token,
			message: `Вы вошли в систему под пользователем ${user.surname.toLocaleUpperCase()}`,
		});
	} catch (error) {
		res.json({ message: 'Ошибка при авторизации.' });
	}
};

// Get Me
export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.userId);

		if (!user) {
			return res.json({
				message: 'Такого юзера не существует.',
			});
		}

		const token = jwt.sign(
			{
				id: user._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '30d' }
		);

		res.json({
			user,
			token,
		});
	} catch (error) {
		res.json({ message: 'Нет доступа.' });
	}
};
